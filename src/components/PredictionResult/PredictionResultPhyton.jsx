import React from 'react'
import './PredictionResult.css'

function PredictionResult({ predictions}) {
  const renderResult = predictions => {
    if (predictions[0].probability > 0.5) {
      return (
        <article className="predictions">
          <h2 className="predictions-heading">Phyton with CNN's Model</h2>
          <h3>AJUSTES</h3>
          <h4>CNN´s = 1</h4>
          <h4>Capas = 7</h4>
          <center><h3>{predictions[0].className}</h3></center>
          <div className="progress">
            <div
              className="progress-bar1"
              role="progressbar"
              style={{
                width: `${(predictions[0].probability * 100).toFixed(2)}%`
              }}
              aria-valuenow={(predictions[0].probability * 100).toFixed(2)}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {(predictions[0].probability * 100).toFixed(2).replace('.', ',')}{' '}
              %
            </div>
          </div>
          <center><h3>{predictions[1].className}</h3></center>
          <div className="progress">
            <div
              className="progress-bar1"
              role="progressbar"
              style={{
                width: `${(predictions[1].probability * 100).toFixed(2)}%`
              }}
              aria-valuenow={(predictions[1].probability * 100).toFixed(2)}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {(predictions[1].probability * 100).toFixed(2).replace('.', ',')}{' '}
              %
            </div>
          </div>
          <span></span>
        </article>
      )
    } else {
      return (
        <p className="alert is-warning">
          Nos fue imposible identificar esta imagen
        </p>
      )
    }
  }
  return renderResult(predictions)
}

export default PredictionResult