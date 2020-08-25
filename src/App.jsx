import React from 'react'
import './App.css'
import logo from './assets/cancer.svg'
import FormUpload from './components/FormUpload/FormUpload.jsx'

function App() {
  return (
    <div className="container">
      <h1><strong>IMAGE CLASSIFICATION ONCOLOGY</strong></h1>
      <img src={logo} alt="Logo" id="logo" />
      <FormUpload />
    </div>
  )
}
export default App