import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Students from "./components/Students";
import CreateStudent from "./components/CreateStudent"; // Import the combined form component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="/create" element={<CreateStudent />} />
        <Route path="/update/:id" element={<CreateStudent />} />
      </Routes>
    </Router>
  );
};

export default App;
