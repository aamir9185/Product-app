import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <>
    <RecoilRoot>
     <Navbar />
     <Outlet />
     <Footer/>
     </RecoilRoot>
    </>
  );
}

export default App;
