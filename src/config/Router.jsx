import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from "./routes";
import Home from "../pages/Home";
import Login from "../pages/Login";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
               <Route path={ROUTES.HOME} element={<Home/>}/>
               <Route path={ROUTES.LOGIN} element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
