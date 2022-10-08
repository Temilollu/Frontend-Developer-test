import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import SingleArt from "./Pages/SingleArt";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art/:id" element={<SingleArt />} />
          <Route path="*">Page not found</Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
