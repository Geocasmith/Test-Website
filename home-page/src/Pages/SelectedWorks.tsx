import styled from "styled-components";
import arrow from "../Resources/Arrow.svg";
import React from "react";
import boatImage4 from "../Resources/4.png";
import boatImage5 from "../Resources/5.png";
import boatImage3 from "../Resources/3.png";
import circle from "../Resources/circle.svg";
import linearGradient from "../Resources/linearGradient.svg";

export function SelectedWorks() {
    return <>
        <FlexColumn>
            <Text>Selected Works</Text>
            <BlackRectangle>
                <Text2>case study</Text2>
                <Text3>[01]</Text3>
            </BlackRectangle>
            <BlackRectangle1>
                <Text2>case study</Text2>
                <Text3>[02]</Text3>
            </BlackRectangle1>
            <Div>
                <Text4>view project</Text4>
                <Div2>
                    <Text16>case study</Text16>
                    <Text17>[03]</Text17>
                </Div2>
            </Div>
        </FlexColumn>
        <BackBoat/>
        <MiddleBoat/>
        <FrontBoat/>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu in
            venenatis id laoreet enim. Interdum in orci vitae feugiat quam urna.
            Pretium netus nec ante massa nulla odio nunc posuere sit. Nec justo,
            leo eget ipsum sollicitudin aliquet.
            <br/>
        </Paragraph>
        <Div3>
            <Arrow src={arrow}/>
            <Ellipse>
                <Text5>See all designs</Text5>
            </Ellipse>
        </Div3>
    </>;
}

const Text2 = styled.div`
  width: 1007px;
  height: 28px;
  left: 42px;
  position: absolute;
  color: #b1b1b1;
  font-size: 32px;
  font-weight: 500;
  font-family: Syne;
  line-height: 32px;
  text-transform: uppercase;
`;
const Text3 = styled.div`
  width: 284px;
  height: 12px;
  top: 3px;
  position: absolute;
  color: #f7f7f7;
  font-size: 12px;
  font-family: Oxygen Mono;
  line-height: 14px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
const FlexColumn = styled.div`
  height: 514px;
  top: 1080px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-size: cover;
  background-image: url(${linearGradient});
  padding: 33px 727px 33px 60px;
`;

const Text = styled.div`
  width: 616px;
  height: 144px;
  color: #f7f7f7;
  font-size: 84px;
  font-weight: 500;
  font-family: Syne;
  line-height: 76px;
  text-transform: uppercase;
  margin: 0px 0px 130px 0px;
`;
const BlackRectangle = styled.div`
  width: 1049px;
  height: 28px;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  margin: 0px 0px 37px 0px;
`;
const BlackRectangle1 = styled.div`
  width: 1049px;
  height: 28px;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  margin: 0px 0px 34px 0px;
`;
const Div = styled.div`
  width: 1133px;
  height: 57px;
  position: relative;
  align-self: stretch;
`;
const Text4 = styled.div`
  width: 330px;
  height: 13px;
  left: 780px;
  position: absolute;
  color: #f7f7f7;
  font-size: 16px;
  font-weight: 700;
  font-family: Syne;
  line-height: 16px;
  text-align: right;
  letter-spacing: 3.2px;
  text-transform: uppercase;
  z-index: 1;
`;
const Div2 = styled.div`
  width: 1049px;
  height: 54px;
  top: 3px;
  position: absolute;
`;
const Text16 = styled.div`
  width: 1007px;
  height: 54px;
  left: 42px;
  position: absolute;
  color: #f7f7f7;
  font-size: 64px;
  font-weight: 500;
  font-family: Syne;
  line-height: 64px;
  text-transform: uppercase;
`;
const Text17 = styled.div`
  width: 284px;
  height: 12px;
  top: 12px;
  position: absolute;
  color: #f7f7f7;
  font-size: 12px;
  font-family: Oxygen Mono;
  line-height: 14px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
const BackBoat = styled.div`
  width: 802px;
  height: 640px;
  left: 1118px;
  top: 1169px;
  position: absolute;
  background-color: rgba(14, 18, 25, 0.8);
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: multiply, normal;
  background-image: linear-gradient(
      rgba(14, 18, 25, 0.8),
      rgba(14, 18, 25, 0.8)
    ),
    url(${boatImage5});
`;
const MiddleBoat = styled.div`
  width: 874px;
  height: 640px;
  left: 1046px;
  top: 1335px;
  position: absolute;
  background-color: rgba(14, 18, 25, 0.6);
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: multiply, normal;
  background-image: linear-gradient(
      rgba(14, 18, 25, 0.6),
      rgba(14, 18, 25, 0.6)
    ),
    url(${boatImage4});
`;
const FrontBoat = styled.div`
  width: 952px;
  height: 640px;
  left: 968px;
  top: 1527px;
  position: absolute;
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: multiply, normal;
  background-image: 
    url(${boatImage3});

`;
const Paragraph = styled.div`
  width: 430px;
  height: 88px;
  left: 102px;
  top: 1659px;
  position: absolute;
  color: #f7f7f7;
  font-size: 16px;
  font-weight: 300;
  font-family: Archivo;
  line-height: 24px;
`;
const Div3 = styled.div`
  width: 320px;
  height: 106px;
  left: 60px;
  top: 1975px;
  position: absolute;
`;
const Arrow = styled.img`
  width: 62.41px;
  height: 18px;
  left: 130px;
  top: 64px;
  position: absolute;
`;
const Ellipse = styled.div`
  width: 320px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image: url(${circle});
  padding: 39px 0px 54px 0px;
`;
const Text5 = styled.div`
  width: 214px;
  height: 13px;
  color: #f7f7f7;
  font-size: 16px;
  font-weight: 700;
  font-family: Syne;
  line-height: 16px;
  text-align: center;
  letter-spacing: 3.2px;
  text-transform: uppercase;
`;