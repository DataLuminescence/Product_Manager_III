import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductViewOne from './components/ProductViewOne';
import ProductUpdateOne from './components/ProductUpdateOne';
import Main from './views/Main';
import './App.css';
    
function App() {
  return (
    <BrowserRouter>
    <nav></nav>
    <Routes>
        {/* <Route path="/testapi" element ={<TestComponent />}/> */}
        <Route path="/" element = {<Main/>}/>
        <Route path="/product/view/:id" element = {<ProductViewOne/>} />
        <Route path="/product/update/:id" element = {<ProductUpdateOne/>} />
        {/* <Route path="*" element = {<Error/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}
    
export default App;
