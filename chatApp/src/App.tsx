import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ChatScreen from "./pages/ChatScreen";
import WelcomeScreen from "./pages/WelcomeScreen";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/chat" element={<ChatScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
