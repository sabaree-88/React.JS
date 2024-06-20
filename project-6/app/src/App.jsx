import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from "./components/Students";
import CreateStudent from "./components/CreateStudent";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Students />}></Route>
          <Route path="/create" element={<CreateStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
