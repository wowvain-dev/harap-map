import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainMap from './mapping/MainMap'
import { useState } from "react";
import {GlobalStyles} from "./globalStyles";
import ReactModal from "react-modal";

function App() {
    return (
    <div className="App">
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand flex-fill" >
                    <p className="text-center mt-3">Harta lumii din "Povestea lui Harap-Alb"</p>
                </a>
            </div>
        </nav>
    <MainMap />
    <h4 className="mt-5 text=sm-center">Personajele basmului</h4>
    </div>
  );
}

export default App;
