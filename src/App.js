import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import SingleArt from "./Pages/SingleArt";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={client}>
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
