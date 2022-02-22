import React from "react";
import { useState } from "react";
import { Box } from "@mui/material/";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home/Home";
import DetailView from "./components/post/DetailView";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box style={{ marginTop: 64 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<DetailView />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
