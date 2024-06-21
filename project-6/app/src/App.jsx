import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from "./components/Students";
import CreateStudent from "./components/CreateStudent";
import UpdateUser from "./components/UpdateUser";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Students />}></Route>
          <Route path="/create" element={<CreateStudent />}></Route>
          <Route path="/update/:id" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
