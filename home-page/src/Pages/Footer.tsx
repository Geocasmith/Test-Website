import styled from "styled-components";
import React from "react";
import circle from "../Resources/circle.svg";
import arrow from "../Resources/Arrow.svg";
import water from "../Resources/6.png";
import {Div, Div1, Div2} from "./HomePage";
export function Footer() {
    return <Image>
        <Text>Get in touch</Text>
        <Text2>Privacy Policy</Text2>
        <Text3>info@bakewell-white.com</Text3>
        <Text4>+64 9 480 6800</Text4>
        <Text5>EST. 1994</Text5>
        <Text6>Facebook</Text6>
        <Text7>Linkedin</Text7>
        <Div3>
            <Image1 src={arrow}/>
            <Ellipse>
                <Text8>Contact Us</Text8>
            </Ellipse>
        </Div3>
    </Image>;
}

const Image1 = styled.img`
  width: 62.41px;
  height: 18px;
  left: 130px;
  top: 65px;
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
const Text8 = styled.div`
  width: 214px;
  height: 13px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Syne;
  line-height: 16px;
  text-align: center;
  letter-spacing: 3.2px;
  text-transform: uppercase;
`;

const Image = styled.div`
  width: 1919px;
  height: 321px;
  top: 1080px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: normal, color, normal;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    linear-gradient(rgba(165, 182, 189, 1), rgba(165, 182, 189, 1)),
    url(${water});
`;
const Text = styled.div`
  width: 754px;
  height: 65px;
  left: 591px;
  top: 60px;
  position: absolute;
  color: #ffffff;
  font-size: 84px;
  font-weight: 500;
  font-family: Syne;
  line-height: 76px;
  text-align: center;
  text-transform: uppercase;
`;
const Text2 = styled.div`
  width: 273px;
  height: 12px;
  left: 1587px;
  top: 60px;
  position: absolute;
  color: #ffffff;
  font-size: 12px;
  font-family: Oxygen Mono;
  line-height: 14px;
  text-align: right;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
const Text3 = styled.div`
  width: 420px;
  height: 11px;
  left: 83px;
  top: 60px;
  position: absolute;
  color: #ffffff;
  font-size: 12px;
  font-family: Oxygen Mono;
  line-height: 14px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
const Text4 = styled.div`
  width: 420px;
  height: 12px;
  left: 83px;
  top: 91px;
  position: absolute;
  color: #ffffff;
  font-size: 12px;
  font-family: Oxygen Mono;
  line-height: 14px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
const Text5 = styled.div`
  width: 420px;
  height: 11px;
  left: 83px;
  top: 123px;
  position: absolute;
  color: #ffffff;
  font-size: 12px;
  font-family: Oxygen Mono;
  line-height: 14px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
const Text6 = styled.div`
  width: 273px;
  height: 12px;
  left: 1587px;
  top: 91px;
  position: absolute;
  color: #ffffff;
  font-size: 12px;
  font-family: Oxygen Mono;
  line-height: 14px;
  text-align: right;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
const Text7 = styled.div`
  width: 273px;
  height: 12px;
  left: 1587px;
  top: 122px;
  position: absolute;
  color: #ffffff;
  font-size: 12px;
  font-family: Oxygen Mono;
  line-height: 14px;
  text-align: right;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
const Div3 = styled.div`
  width: 320px;
  height: 106px;
  left: 808px;
  top: 155px;
  position: absolute;
`;