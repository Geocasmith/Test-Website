import styled from "styled-components";
import logoSmallSvg from "../Resources/Logo.svg";
import React from "react";

export function Navigation() {
    return <NavContainer>
        <Text1>Expertise</Text1>
        <Text2>Portfolio</Text2>
        <Logo1 src={logoSmallSvg}/>
        <Text3>Awards</Text3>
        <Text4>Contact Us</Text4>
    </NavContainer>;
}

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  padding: 50px 0px 51px 0px;
`;
const Text1 = styled.div`
  width: 133px;
  height: 14px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Syne;
  line-height: 14px;
  text-align: center;
  letter-spacing: 3.2px;
  text-transform: uppercase;
  margin: 0px 172px 0px 0px;
`;
const Text2 = styled.div`
  width: 141px;
  height: 14px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Syne;
  line-height: 14px;
  text-align: center;
  letter-spacing: 3.2px;
  text-transform: uppercase;
  margin: 0px 291px 0px 0px;
`;
const Logo1 = styled.img`
  width: 329px;
  height: 18px;
  margin: 0px 327px 0px 0px;
`;
const Text3 = styled.div`
  width: 115px;
  height: 14px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Syne;
  line-height: 14px;
  text-align: center;
  letter-spacing: 3.2px;
  text-transform: uppercase;
  margin: 0px 135px 0px 0px;
`;
const Text4 = styled.div`
  width: 166px;
  height: 14px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Syne;
  line-height: 14px;
  text-align: center;
  letter-spacing: 3.2px;
  text-transform: uppercase;
`;