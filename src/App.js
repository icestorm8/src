import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Games from "./pages/Games";
import Header from "./components/Header";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/Layout";
function App() {
  return (
    <div>
      <BrowserRouter className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
