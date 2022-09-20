import styled from "styled-components";
import boatImage from "./Resources/1.png";
import logoLargeSvg from "./Resources/LogoLarge.svg";
import React from "react";
import {Navigation} from "./Components/Navigation";

export function NavBar() {
    return <Element12>
        <Navigation/>
        <FlexColumn>
            <Logo src={logoLargeSvg}/>
            <FlexRow1>
                <Text5>
                    +64 9 480 6800
                    <br/>
                    info@bakewell-white.com
                </Text5>
                <Paragraph>
                    Bakewell-white Yacht Design LTD
                    <br/>
                    Pace with grace / © 2022
                </Paragraph>
                <Text6>
                    Est. 1994
                    <br/>
                    auckland / new zealand
                    <br/>
                </Text6>
            </FlexRow1>
        </FlexColumn>
    </Element12>;
}

const Element12 = styled.div`
  height: 1080px;
  width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #79858c;
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: hue, normal;
  background-image: linear-gradient(
      rgba(121, 133, 140, 1),
      rgba(121, 133, 140, 1)
    ),
    url(${boatImage});
`;
const FlexColumn = styled.div`
  height: 188px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-image: linear-gradient(
    180deg,
    rgba(14, 18, 25, 0) 0%,
    #0e1219 37%
  );
  padding: 6px 60px;
`;
const Logo = styled.img`
  height: 97px;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Text5 = styled.div`
  width: 495px;
  height: 26px;
  color: #ffffff;
  font-size: 12px;
  font-family: Oxygen Mono;
  line-height: 14px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
const Paragraph = styled.div`
  width: 568px;
  height: 26px;
  color: #ffffff;
  font-size: 12px;
  font-family: Oxygen Mono;
  line-height: 14px;
  text-align: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
const Text6 = styled.div`
  width: 495px;
  height: 26px;
  color: #ffffff;
  font-size: 12px;
  font-family: Oxygen Mono;
  line-height: 14px;
  text-align: right;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;