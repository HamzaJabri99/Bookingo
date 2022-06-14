import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hotel from "./pages/hotel/Hotel";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
