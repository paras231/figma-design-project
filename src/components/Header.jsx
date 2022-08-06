import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const HeaderContainer = styled.div`
  display: flex;

  padding-top: 45px;
`;
const LeftLink = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 50px;

  ul {
    display: flex;
    gap: 30px;
  }
  li {
    color: #ffffff;
    list-style: none;
    font-size: 18px;
    font-weight: 500;
    font-style: normal;
    cursor: pointer;
  }
`;
const RightLink = styled.div`
  display: flex;
  padding-left: 340px;
  ul {
    display: flex;
  }
  li {
    list-style: none;
    color: #ffffff;
    font-size: 18px;
  }
`;

const Button = styled.button`
  background-color: #ff4820;
  color: #ffffff;
  border-radius: 5px;
  width: 110px;
  height: 50px;
  margin-top: -16px;
  margin-left: 20px;
  cursor: pointer;
`;

const LogoContent = styled.div`
  display: flex;
  padding-left: 90px;
`;

const Logo = styled.img`
  height: 20px;
`;
const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LogoContent>
          <Logo src={logo} />
        </LogoContent>
        <LeftLink>
          <ul>
            <li>Home</li>
            <li>What is GPT</li>
            <li>Open AI</li>
            <li>Case Studies</li>
            <li>Library</li>
          </ul>
        </LeftLink>
        <RightLink>
          <ul>
            <li>Sign Up</li>
            <Button>Login</Button>
          </ul>
        </RightLink>
      </HeaderContainer>
    </>
  );
};

export default Header;
