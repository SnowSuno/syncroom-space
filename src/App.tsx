import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layouts/Layout";
import { IndexPage } from "./components/pages/IndexPage";

export const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<IndexPage/>}>
                    <Route path=":roomId"/>
                </Route>
            </Route>
        </Routes>
    );
};
