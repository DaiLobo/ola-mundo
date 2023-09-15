import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { SobreMim } from "./pages/SobreMim";
import { Menu } from "./componentes/Menu";
import { Footer } from "componentes/Footer";
import { PaginaPadrao } from "componentes/PaginaPadrao";
import { Post } from "pages/Post";
import { NaoEncontrado } from "pages/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
