import React from 'react'
import Router from "./routes"
import 'office-ui-fabric-react/dist/css/fabric.css';
import Navbar from './components/child/navbar';

function App(){
  return (
    <div className="ms-Grid" dir="ltr">
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm2">
        <Navbar />
      </div>
      <div className="ms-Grid-col ms-sm10">
            <Router />
      </div>
    </div>
  </div>
  )
}

export default App
