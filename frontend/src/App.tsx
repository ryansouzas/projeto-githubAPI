import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ClientHome from "./routes";
import Before from "./routes/Before";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="before" element={<Before/>}/>
          </Route>  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
