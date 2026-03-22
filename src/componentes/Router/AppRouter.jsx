import React from "react";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "../Inicio";
import { Gelatortas } from "../Gelatortas";
import { Carrito } from "../Carrito";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Gelatortas" element={<Gelatortas />} />
            <Route path="/carrito" element={<Carrito />} />
        </Routes>
    )
}
