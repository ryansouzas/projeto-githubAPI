import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ClientHome from "./routes";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            <Route index element={<Home/>}/>
          </Route>  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
