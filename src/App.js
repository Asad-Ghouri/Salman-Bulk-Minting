/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/App.scss";

import Header from "./components/Header";

import {Main} from "./Pages/Home/Main";

import { Footer } from "./components/Footer/Footer";

import Web3 from "web3";

import { BG } from "./Pages/BG/BG";

const web3 = new Web3(Web3.givenProvider);

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
      {/* <Route path="/" element={<BG />} exact /> */}
        <Route path="/" element={<Main />} exact />
      </Routes>      
    </div>
  );
}

export default App;
