import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import HomePage from "./routes/homePage/homePage";
import ShopPage from "./routes/shopPage/shopPage";
import Authentiaction from "./routes/authentication/authentiaction";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="auth" element={<Authentiaction />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
