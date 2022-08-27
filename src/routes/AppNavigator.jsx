import React from "react";
import { Routes, Route } from "react-router-dom";
import HtmlPage from "../landing/pages/HtmlPage";
import {CssPage} from "../landing/pages/CssPage";
import {JsPage} from "../landing/pages/JsPage";
import {ReactPage} from "../landing/pages/ReactPage";
import InicioPage from "../landing/pages/InicioPage";

export const AppNavigator = () => {
  return (
    <div>
      <h1>Bienvenido a React Router!</h1>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/inicio" element={<InicioPage />} />
        <Route path="/html" element={<HtmlPage />} />
        <Route path="/css" element={<CssPage />} />
        <Route path="/js" element={<JsPage />} />
        <Route path="/react" element={<ReactPage />} />
      </Routes>
    </div>
  );
};
