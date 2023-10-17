import { BrowserRouter, Routes, Route } from "react-router-dom" ;
import RouteHome from "./RouteHome";
import RoutePage1 from "./RoutePage1";
import RoutePage2 from "./RoutePage2";
import RouteNav from "./RouteNav";
const RoutMain = () => {
  return (
    <BrowserRouter>
      <main className="container">
        
        <RouteNav /> 
      <Routes>  
        <Route path="/" element={<RouteHome />} /> 
        <Route path="/page1/:item" element={<RoutePage1 />} /> 
        <Route path="/page2" element={<RoutePage2 />} /> 
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default RoutMain
