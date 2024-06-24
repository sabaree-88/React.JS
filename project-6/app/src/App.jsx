import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import CreateUser from "./components/CreateUser"; // Import the combined form component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<CreateUser />} />
      </Routes>
    </Router>
  );
};

export default App;
