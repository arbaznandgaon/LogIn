import logo from "./logo.svg";
import LogIn from "./Screens/LogIn";
import NewUser from "./Screens/NewUser";
import Profile from "./Screens/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NewUser />}>
              {" "}
            </Route>
            <Route path="/login" element={<LogIn />}>
              {" "}
            </Route>
            <Route path="/home" element={<Profile />}>
              {" "}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
