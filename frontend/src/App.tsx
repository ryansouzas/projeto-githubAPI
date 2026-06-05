import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientHome from "./routes";
import Before from "./routes/Before";
import After from "./routes/After";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            <Route index element={<Home/>}/>
            <Route path="before" element={<Before/>}/>
            <Route path="after" element={<After/>}/>
          </Route> 
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
