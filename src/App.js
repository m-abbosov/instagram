import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./containers/Home";
import { Like } from "./containers/Like";
import Login from "./containers/Login";
import LoginPage from "./containers/LoginPage";
import Profile from "./containers/Profile";
import Search from "./containers/Search";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<Home />} />
        <Route path="/user/search" element={<Search /> } />
        <Route path="/user/likes" element={<Like />} /> 
        <Route path="/user/profile" element={<Profile />} />
      </Routes>
    </Wrapper>
  );
}

export default App;


const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 375px;
  height: 812px;
  overflow-y: hidden;
  background-color: white;
`