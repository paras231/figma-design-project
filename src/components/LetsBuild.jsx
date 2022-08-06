import React from "react";
import blur from "../assets/blur.png";
import styled from "styled-components";
import illustration from "../assets/illustration.png";
import ellipse1 from "../assets/ellipse1.png";

const LeftContent = styled.div`
  /* background-image: url(${blur});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */

  @media (min-width: 375px) and (max-width: 420px) {
    padding-left: 10%;
    height: 100%;
    display: grid;
    width: 60%;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    padding-left: 10%;
    height: 100%;
    display: grid;
    width: 60%;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    padding-left: 6%;
    height: 100%;
    display: grid;
    width: 48%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    padding-left: 6%;
    height: 100%;
    display: grid;
    width: 43%;
  }
  @media (min-width: 1281px) and (max-width: 1370px) {
    padding-left: 6%;
    height: 100%;
    display: grid;
    width: 40%;
  }
  @media (min-width: 1371px) and (max-width: 1440px) {
    padding-left: 6%;
    height: 100%;
    display: grid;
    width: 40%;
  }
  @media (min-width: 1441px) and (max-width: 1540px) {
    padding-left: 6%;
    height: 100%;
    display: grid;
    width: 37%;
  }
  @media (min-width: 1541px) and (max-width: 1680px) {
    padding-left: 6%;
    height: 100%;
    display: grid;
    width: 37%;
  }
  @media (min-width: 1681px) and (max-width: 1920px) {
    padding-left: 6%;
    height: 100%;
    display: grid;
    width: 37%;
  }
`;
const Text = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 62px;
  letter-spacing: -0.04em;
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* text-fill-color: transparent; */
`;

const Text2 = styled.p`
  margin-top: 20px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;

  color: #81afdd;
`;

const RightContent = styled.div``;

const Button = styled.button`
  background-color: #ff4820;
  color: #ffffff;

  width: 110px;

  cursor: pointer;
  border: none;
  @media (min-width: 992px) and (max-width: 1024px) {
    height: 43px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    height: 58px;
  }
  @media (min-width: 1371px) and (max-width: 1440px) {
    height: 62px;
    width: 130px;
  }
`;

const InputDiv = styled.div`
  margin-top: 5vh;
  display: flex;
`;
const Input = styled.input`
  width: 30vw;
  height: 7vh;
  background-color: #052d56;
  border: none;

  ::-webkit-input-placeholder {
    padding-left: 20px;
  }

  &:focus {
    outline: none;
  }
`;

const RightImage = styled.img`
  width: 40vw;
  height: 100%;
  margin-left: 17%;
  margin-top: -13%;

  @media (min-width: 375px) and (max-width: 420px) {
    width: 64vw;
    height: 100%;
    margin-left: 17%;
    margin-top: 10vh;
  }

  @media (min-width: 993px) and (max-width: 1024px) {
    width: 44vw;
    height: 100%;
    margin-left: 27%;
    margin-top: -13%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 44vw;
    height: 100%;
    /* margin-left: 20%; */
    margin-top: -10%;
  }
  @media (min-width: 1281px) and (max-width: 1370px) {
    width: 44vw;
    height: 100%;
    margin-left: 20%;
    margin-top: -13%;
  }
  @media (min-width: 1371px) and (max-width: 1440px) {
    width: 44vw;
    height: 100%;
    margin-left: 22%;
    margin-top: -13%;
  }
  @media (min-width: 1441px) and (max-width: 1540px) {
    width: 44vw;
    height: 100%;
    margin-left: 27%;
    margin-top: -13%;
  }
  @media (min-width: 1541px) and (max-width: 1680px) {
    width: 42vw;
    height: 100%;
    margin-left: 27%;
    margin-top: -13%;
  }
  @media (min-width: 1681px) and (max-width: 1920px) {
    width: 40vw;
    height: 100%;
    margin-left: 27%;
    margin-top: -16%;
  }
`;

const AvatarsContent = styled.div`
  display: flex;
  margin-top: 10vh;
  padding-left: 2%;
`;
const Ellipse = styled.img`
  margin-left: -13px;
`;
const MainContent = styled.div`
  display: flex;
  margin-top: 10vh;
  @media (min-width: 376px) and (max-width: 420px) {
    flex-direction: column;
  }
`;
const LetsBuild = () => {
  return (
    <>
      <MainContent>
        <LeftContent>
          <Text>Let’s Build Something amazing with GPT-3 OpenA</Text>
          <Text2>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </Text2>
          <InputDiv>
            <Input placeholder="Your Email Address" />
            <Button>Get Started</Button>
          </InputDiv>
          <AvatarsContent>
            <Ellipse src={ellipse1} />
            <Ellipse src={ellipse1} />
            <Ellipse src={ellipse1} />
            <Ellipse src={ellipse1} />
            <Ellipse src={ellipse1} />
            <Ellipse src={ellipse1} />
          </AvatarsContent>
        </LeftContent>
        <RightContent>
          <RightImage src={illustration} />
        </RightContent>
      </MainContent>
    </>
  );
};

export default LetsBuild;
