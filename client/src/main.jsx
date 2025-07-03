import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/homepage/homepage.jsx";
import Createpage from "./pages/createPage/createPage.jsx";
import Authpage from "./pages/authPage/authPage.jsx";
import Profilepage from "./pages/profilePage/profilePage.jsx";
import Searchpage from "./pages/searchPage/searchPage.jsx";
import Mainlayout from "./pages/layouts/mainLayout.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Postpage from "./pages/postPage/postPage.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Authpage />} />
          <Route element={<Mainlayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/create" element={<Createpage />} />
            <Route path="/pin/:id" element={<Postpage />} />
            <Route path="/:userName" element={<Profilepage />} />
            <Route path="/search" element={<Searchpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
