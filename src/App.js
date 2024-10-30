import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee";
import ListEmployees from "./components/ListEmployee";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/listEmployee" element={<ListEmployees />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;