import React from "react";
import "./PredictionResult.css";

function PredictionResult({ predictions, description }) {
  const renderResult = predictions => {
    if (predictions[0].probability > 0.5) {
      return (
        <article className="predictions">
          <h2 className="predictions-heading">
            {predictions[0].className.replace(/(_)/gi, " ")}
          </h2>
          <h3>Descripción</h3>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${(predictions[0].probability * 100).toFixed(2)}%`
              }}
              aria-valuenow={(predictions[0].probability * 100).toFixed(2)}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {(predictions[0].probability * 100).toFixed(2).replace(".", ",")}{" "}
              %
            </div>
          </div>
          <p className="predictions-description">
            {!description.error && !description.desc && (
              <span>Cargando...</span>
            )}

            {!description.error && description.desc && (
              <>
                {description.desc}
                <span>
                  Aprende más en{" "}
                  <a href={description.wikiUrl}>{description.wikiUrl}</a>
                </span>
              </>
            )}
            {description.error && (
              <span>Wikipedia no encontro un resultado.</span>
            )}
          </p>
        </article>
      );
    } else {
      return (
        <p className="alert is-warning">
          Nos fue imposible identificar esta imagen
        </p>
      );
    }
  };

  return renderResult(predictions);
}

export default PredictionResult;
