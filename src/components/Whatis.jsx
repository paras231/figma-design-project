import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  background-color: #002853;

  margin-top: 10vh;
  height: 70vh;
  width: 90vw;
`;

const HeadignDiv = styled.div`
  width: 80vw;

  @media (min-width: 320px) and (max-width: 375px) {
    margin-left: 20%;
    
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-left: 24%;
    width: 50vw;
  }
  @media (min-width: 480px) and (max-width: 560px) {
    margin-left: 26%;
    width: 50vw;
  }
  @media (min-width: 561px) and (max-width: 640px) {
    margin-left: 30%;
    width: 50vw;
  }
`;

const Heading = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  letter-spacing: -0.04em;
  color: #ffffff;
  padding-right: 67%;
  padding-top: 8%;
`;

const UpperDiv = styled.div`
  display: flex;
  @media (min-width: 320px) and (max-width: 375px) {
    display: grid;
    
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display: grid;
    
  }
  @media (min-width: 480px) and (max-width: 560px) {
    display: grid;
  }
  @media (min-width: 561px) and (max-width: 640px) {
    display: grid;
  }
`;
const ParaDiv1 = styled.div`
  width: 75vw;
  padding-right: 60px;
  padding-top: 5%;
`;
const Text1 = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  color: #81afdd;
`;

const MiddleDiv = styled.div`
  margin-top: 5vh;
  display: flex;
  @media (min-width: 320px) and (max-width: 375px) {
    display: grid;
    justify-content: center;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display: grid;
    justify-content: center;
  }
  @media (min-width: 480px) and (max-width: 560px) {
    display: grid;
    justify-content: center;
  }
  @media (min-width: 561px) and (max-width: 640px) {
    display: grid;
    justify-content: center;
  }
`;

const PossibilityDiv = styled.div`
  padding-right: 34%;
  width: 50vw;

`;

const ExploreDiv = styled.div`
  width: 25vw;
  padding-right: 10%;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 40vw;
    padding-top: 5%;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 40vw;
    padding-top: 5%;
  }
  @media (min-width: 480px) and (max-width: 560px) {
    
    width: 40vw;
    padding-top: 5%;
  }
  @media (min-width: 561px) and (max-width: 640px) {
    width: 40vw;
    padding-top: 5%;
  }
`;
const ExploreText = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  /* identical to box height, or 188% */

  color: #ff8a71;
`;
const Possibility = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 34px;
  line-height: 45px;

  background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%),
    #ffffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const LowerDiv = styled.div`
  display: flex;
  margin-top: 10vh;
  gap: 30px;
`;
const ChatBotDiv = styled.div`
  display: grid;
`;
const ChatBotText = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  letter-spacing: -0.04em;
  color: #ffffff;
`;

const ChatBoxText2Div = styled.div`
  width: 24vw;
  padding-left: 25%;
`;
const ChatBotText2 = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #81afdd;
`;

const Whatis = () => {
  return (
    <>
      <center>
        <MainDiv>
          <UpperDiv>
            <HeadignDiv>
              <Heading>What is GPT-3</Heading>
            </HeadignDiv>
            <ParaDiv1>
              <Text1>
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought. His defective nor convinced residence own.
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he. Friendly bachelor
                entrance to on by.
              </Text1>
            </ParaDiv1>
          </UpperDiv>
          <MiddleDiv>
            <PossibilityDiv>
              <Possibility>
                The possibilities are beyond your imagination
              </Possibility>
            </PossibilityDiv>
            <ExploreDiv>
              <ExploreText>Explore The Library</ExploreText>
            </ExploreDiv>
          </MiddleDiv>
          <LowerDiv>
            <ChatBotDiv>
              <ChatBotText>Chatbots</ChatBotText>
              <ChatBoxText2Div>
                <ChatBotText2>
                  We so opinion friends me message as delight. Whole front do of
                  plate heard oh ought
                </ChatBotText2>
              </ChatBoxText2Div>
            </ChatBotDiv>
            <ChatBotDiv>
              <ChatBotText>Chatbots</ChatBotText>
              <ChatBoxText2Div>
                <ChatBotText2>
                  We so opinion friends me message as delight. Whole front do of
                  plate heard oh ought
                </ChatBotText2>
              </ChatBoxText2Div>
            </ChatBotDiv>
            <ChatBotDiv>
              <ChatBotText>Chatbots</ChatBotText>
              <ChatBoxText2Div>
                <ChatBotText2>
                  We so opinion friends me message as delight. Whole front do of
                  plate heard oh ought
                </ChatBotText2>
              </ChatBoxText2Div>
            </ChatBotDiv>
          </LowerDiv>
        </MainDiv>
      </center>
    </>
  );
};

export default Whatis;
