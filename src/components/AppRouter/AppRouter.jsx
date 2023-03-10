import { Routes, Route } from "react-router-dom";
import NotFound from "../../pages/NotFound";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Catalog</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
