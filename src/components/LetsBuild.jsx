import React from "react";
import blur from "../assets/blur.png";
import styled from "styled-components";
import illustration from "../assets/illustration.png";
import ellipse1 from "../assets/ellipse1.png";
import google from "../assets/google.png";
import slack from "../assets/slack.png";
import shopify from "../assets/shopify.png";
import dropbox from "../assets/dropbox.png";


const LeftContent = styled.div`
 
 @media (min-width: 320px) and (max-width: 374px) {
    padding-left: 5%;
    height: 100%;
    display: grid;
    width: 40%;
  }

  @media (min-width: 375px) and (max-width: 420px) {
    padding-left: 10%;
    height: 100%;
    display: grid;
    width: 60%;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    padding-left: 10%;
    height: 100%;
    display: grid;
    width: 60%;
  }
  @media (min-width: 481px) and (max-width: 560px) {
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
  @media (min-width: 320px) and (max-width: 375px) {
    margin-top: 5vh;
  display: flex;
 
  }
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
  @media (min-width: 320px) and (max-width: 375px) {
    width: 47vw;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 47vw;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    width: 47vw;
  }
`;

const RightImage = styled.img`
  width: 40vw;
  height: 100%;
  margin-left: 17%;
  margin-top: -13%;

  @media (min-width: 320px) and (max-width: 375px) {
    width: 60vw;
    height: 100%;
    margin-left: 17%;
    margin-top: 10vh;
  }

  @media (min-width: 375px) and (max-width: 420px) {
    width: 64vw;
    height: 100%;
    margin-left: 17%;
    margin-top: 10vh;
  }

  @media (min-width: 421px) and (max-width: 480px) {
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

  @media (min-width: 320px) and (max-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding-left: 0%; */
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding-left: 0%; */
  }
  @media (min-width: 421px) and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding-left: 0%; */
  }
`;
const Ellipse = styled.img`
  margin-left: -13px;
`;

const LogoDiv = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: 10vh;

`

const MainContent = styled.div`
  display: flex;
  margin-top: 10vh;
  @media (min-width: 320px) and (max-width: 375px) {
    display:grid
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display:grid
  }
  @media (min-width: 421px) and (max-width: 480px) {
    display:grid
  }
`;
const LetsBuild = () => {
  return (
    <>
      <MainContent>
        <LeftContent>
          <Text>Let’s Build Something amazing with GPT-3 OpenAI</Text>
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

{/* <LogoDiv>
  <img src={google}/>
  <img  src={slack}/>
  <img   scr={dropbox}/>
  <img   scr={shopify}/>
</LogoDiv> */}
    </>
  );
};

export default LetsBuild;
