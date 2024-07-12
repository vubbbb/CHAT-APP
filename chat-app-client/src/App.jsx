import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Auth from "./pages/auth";
import Chat from "./pages/chat";
import Profile from "./pages/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth/>}></Route>
        <Route path="/chat" element={<Chat/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/*" element={<Navigate to="/auth"/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
