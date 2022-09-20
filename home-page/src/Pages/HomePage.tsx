import React from "react";
import '../index.css';
import '../App.css';
import styled from "styled-components";
import {NavBar} from "../NavBar";
import {Footer} from "./Footer";
import {Designs} from "./Designs";
import {SelectedWorks} from "./SelectedWorks";
import {AboutUs} from "./AboutUs";

export const HomePage = ({}) => {
    return (
        <Div>
            <NavBar/>
            <Div1>
                <AboutUs/>
                <SelectedWorks/>
            </Div1>
            <Div2>
                <Designs/>
                <Footer/>
            </Div2>
        </Div>
    );
};

export const Div = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #54646d;
  overflow: hidden;
`;
export const Div1 = styled.div`
  width: 1920px;
  height: 2167px;
  position: relative;
  background-size: cover;
  background-image: linear-gradient(
          180deg,
          #0e1219 0%,
          rgba(14, 18, 25, 0) 16%,
          rgba(14, 18, 25, 0) 84%,
          #0e1219 100%
  );
  
`;
export const Div2 = styled.div`
  width: 1920px;
  height: 1401px;
  position: relative;
`;