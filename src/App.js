import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PostDetails from "./component/PostDetails/PostDetails";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postDetails/:postId" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
