import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Music from "./pages/Music";
import Layout from "./layouts/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/likes"
          element={
            <Layout>
              <Likes />
            </Layout>
          }
        />
        <Route
          path="/music"
          element={
            <Layout>
              <Music />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
