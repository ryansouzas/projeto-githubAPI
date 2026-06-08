import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientHome from "./routes";
import Before from "./routes/Before";
import After from "./routes/After";
import Home from "./routes/Home";
import NotFoundCard from "./components/NotFoundCard";
import ProfileCard from "./components/ProfileCard";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            <Route index element={<Home />} />
            <Route path="before" element={<Before />} />
            <Route path="after" element={<After />} >
              <Route path = ":username" element={<ProfileCard />} />
              <Route path="notfound" element={<NotFoundCard />} />
            </Route>
            <Route path="*" element={<h1>404 - Página Não Encontrada</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
