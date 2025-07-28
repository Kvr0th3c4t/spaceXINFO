import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../components/pages/home";
import { Launches } from "../components/pages/Launches";
import { NextLaunch } from "../components/pages/NextLaunch";
import { Ships } from "../components/pages/Ships";
import { Tripulation } from "../components/pages/Tripulation";
import { Nav } from "../components/layout/Nav";
import { Footer } from "../components/layout/Footer";
import { LaunchDetail } from "../components/pages/LaunchDetail";
import { Launchers } from "../components/pages/Launchers";
import { ShipDetail } from "../components/pages/ShipDetail";
import { LaunchersDetail } from "../components/pages/LaunchersDetail";
import { TripulationDetail } from "../components/pages/TripulationDetail"
import { NotFound } from "../components/pages/NotFound";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            {/*LAYOUT*/}
            <Nav></Nav>

            {/*Contenido central y rutas*/}
            <section>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/nextLaunch" element={<NextLaunch />} />
                    <Route path="/launches" element={<Launches />} />
                    <Route path="/launchDetail/:id" element={<LaunchDetail />} />
                    <Route path="/ships" element={<Ships />} />
                    <Route path="/shipDetail/:name" element={<ShipDetail />} />
                    <Route path="/launchers" element={<Launchers />} />
                    <Route path="/launcherDetail/:id" element={<LaunchersDetail />} />
                    <Route path="/tripulation" element={<Tripulation />} />
                    <Route path="/astronautDetail/:id" element={<TripulationDetail />} />
                    <Route path="*" element={<NotFound />} />

                </Routes>
            </section>

            <Footer></Footer>
        </BrowserRouter>
    )
}