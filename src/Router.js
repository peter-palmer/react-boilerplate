import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoggedOutLayout from "./layouts/LoggedOutLayout";

import Home from "./pages/Home/index";
import NotFound from "./pages/NotFound/index";

function Router() {
  return (
    <BrowserRouter>
      <LoggedOutLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LoggedOutLayout>
    </BrowserRouter>
  );
}

export default Router;
