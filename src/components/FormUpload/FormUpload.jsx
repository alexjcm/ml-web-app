import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import * as tmImage from '@teachablemachine/image'

import './FormUpload.css'

import uploadImage from '../../assets/uploadImage.svg'
import close from '../../assets/close.svg'

import PredictionResultPhyton from '../PredictionResult/PredictionResultPhyton.jsx'
import PredictionResult from '../PredictionResult/PredictionResult.jsx'
import Loading from '../Loading/Loading.jsx'
import Preview from '../Preview/Preview.jsx'

function FormUpload() {
  const [predictions, setPredictions] = useState([])
  const [file, setFiles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pjson, setpjson] = useState([])

  const onDrop = useCallback(async acceptedFiles => {
    try {
      const start = Date.now()
      setError(null)
      setLoading(true)
      setPredictions([])
      setpjson([])

      const singleFile = acceptedFiles[0]
      setFiles(
        Object.assign(singleFile, {
          preview: URL.createObjectURL(singleFile)
        })
      )

      const image = document.getElementById('image')

      const model = await tmImage.load(
        './model/model.json',
        './model/metadata.json'
      )

      const prediction = await model.predictTopK(image, 3)

      handleResults(prediction)

      async function handleResults(predictionData) {
        setPredictions(predictionData)
      }

      cargarAPI(pjson, file)

      async function cargarAPI(predictionData, file){
        var form = new FormData();
        let cachedData = null;
        form.append("image", file);

        fetch({
          URL:"https://api.chooch.ai/predict/image?apikey=0e6b1e5b-8c1e-4c4f-af3f-7d31df7c7d81",
          method: 'POST',
          processData: false,
          mimeType: "multipart/form-data",
          contentType: false,
          data: form,
        })
          .then(response => {
            cachedData = response
            setpjson(cachedData);
            console.log(cachedData.json())
          });        
      }

      setLoading(false)
      const end = new Date()
      const elapsedTime = end - start
      console.log(`It took ${elapsedTime / 1000} seconds`)

    } catch (err) {
      setLoading(false)
      setError(err)
      console.error(err)
    }
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject
  } = useDropzone({ onDrop, accept: 'image/jpeg, image/png, image/jpg' })

  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return (
        <div className="dropContainer">
          <img src={uploadImage} alt="Illustration upload" />
          <h3>Arrastre o cliquee aquí </h3>
          <small>para subir su imagen</small>
          <p>No hay archivos seleccionados</p>
        </div>
      )
    }
    if (isDragReject) {
      return (
        <div className="dropContainer dragReject">
          <img src={close} alt="X icon" />
          <h3>Archivo no soportado</h3>
        </div>
      )
    }

    return (
      <div className="dropContainer dragActive">
        <img src={uploadImage} alt="Illustration upload" />
        <h3>Suelte aqui</h3>
        <small>para subir su imagen</small>
      </div>
    )
  }

  return (
    <>
      {file.name ? (
        <>
          <section>
            <section className="fileInput">
              <button {...getRootProps()} className="btn">
                Subir otra Imagen
              </button>
              <input {...getInputProps()} />
              <Preview f={file} />

              {loading && <Loading />}

              {error && (
                <p className="alert is-danger">
                  Error al realizar el análisis, consulte los registros
                </p>
              )}
            </section>
            <section>
            {predictions.length !== 0 && (
              <PredictionResult
                predictions={predictions}
              />
            )}
          </section>
        </section>
        </>
      ) : (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <h2>Seleccione una Imagen</h2>
            {renderDragMessage(isDragActive, isDragReject)}
          </div>
        )}
    </>
  )
}

export default FormUpload