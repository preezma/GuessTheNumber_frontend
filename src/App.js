import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
const StartPage = lazy(() => import("./views/startPage/StartPage"));
const GamePage = lazy(() => import("./views/gamePage/GamePage"));
const NotFoundPage = lazy(() => import("./views/notFoundPage/NotFoundPage"));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route exact path="/game/:id" element={<GamePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
