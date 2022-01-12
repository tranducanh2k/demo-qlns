import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Content from "./components/Content";
import NavLink from "./components/Link";
import Plan from './components/Plan';
import NavbarImage from './assets/navbar.png';

function App() {

  return (
    <div className="App">
      <div className="navbar">
        <div className="title">
          <div className="titleText"> DX workplace </div>
        </div>
        <img src={NavbarImage} alt="navbar" width='85%' />
      </div>
      
      <div className="body">
        <BrowserRouter>
          <div className="sidebar">
            <Link to='/'>
              <NavLink text={"Quản lý nhân sự"} />
            </Link>
            <Link to='/bangtin'>
              <NavLink text={"Bảng tin quản lý nhân sự"} />
            </Link>
            <Link to='/kehoachlamviec'>
              <NavLink text={"Quản lý kế hoạch làm việc"} />
            </Link>
          </div>
          <div className="content">
              <Routes>
                <Route path="/bangtin" element={<Content />} />
                <Route path='/kehoachlamviec' element={<Plan />} />
              </Routes>
          </div>
        </BrowserRouter>
      </div>
      
      <div className="footer"></div>
    </div>
  );
}

export default App;
