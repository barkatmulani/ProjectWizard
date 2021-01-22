import React from 'react';
import './app.scss';
import MainRouter from './main/main.router';
import Payload from './payload/payload.component';

function App() {
  return (
    <div className="container">
      <h2 className="title">Project Wizard</h2>
      
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <MainRouter></MainRouter>
        </div>
        <div className="col-md-4 col-sm-12">
          <Payload></Payload>
        </div>
      </div>
    </div>
  );
}

export default App;
