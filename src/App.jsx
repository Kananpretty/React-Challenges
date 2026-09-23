import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Challenge from "./pages/Challenges/Challenge";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/challenges/:slug" element={<Challenge />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
