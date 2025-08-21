import "./index.css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Mainlayout from "./pages/layouts/mainLayout.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Homepage = React.lazy(() => import("./pages/homepage/homepage.jsx"));
const Createpage = React.lazy(() =>
  import("./pages/createPage/createPage.jsx")
);
const Authpage = React.lazy(() => import("./pages/authPage/authPage.jsx"));
const Profilepage = React.lazy(() =>
  import("./pages/profilePage/profilePage.jsx")
);
const Searchpage = React.lazy(() =>
  import("./pages/searchPage/searchPage.jsx")
);
const Postpage = React.lazy(() => import("./pages/postPage/postPage.jsx"));

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
