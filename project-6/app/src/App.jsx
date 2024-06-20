import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from "./components/Students";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Students />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
