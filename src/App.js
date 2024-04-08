import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Gallery from "./pages/Gallery";
import ApiHw from "./pages/ApiHw";
import Layout from "./components/Layout";
import Page404 from "./pages/Page404";
import Shop from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <div>header</div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Gallery />} />
          <Route path="/vip" element={<ApiHw />} />
          <Route path="/shop/:catname" element={<Shop />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
      {/* <ApiHw /> */}
      <hr />
      {/* <GalleryHw /> */}
    </BrowserRouter>
  );
}
export default App;
