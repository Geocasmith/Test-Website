import styled from "styled-components";
import darkCloud from "../Resources/2.png";
import Mesh from "../Resources/Mesh.svg";
import React from "react";

export function AboutUs() {
    return <Image1>
        <Div1>
            <Image2 src={Mesh}/>
            <Image3>
                <Paragraph1>
                    We can offer a complete design service to all vessels, power and
                    sail. Whether it is conceptual design work or full naval
                    architecture and engineering, no job is too big or too small for
                    our team.
                </Paragraph1>
                <FlexRow>
                    <Paragraph2>
                        We believe that success is to a large part a matter of design
                        process, and a good designer will have a design process that
                        will produce a successful outcome whether it be a yacht, a
                        powerboat, an aeroplane, or a ballpoint pen.
                    </Paragraph2>
                    <Paragraph3>
                        We undertake a wide variety of craft from radio yachts, to
                        racing yachts, offshore powerboats, to 90m motoryachts,
                        pilotboats, kayaks, Arabian dhows, cargo barges and fishing
                        boats. As a result we are exposed to a wide variety of
                        conditions, design problems and novel solutions, and if we
                        were restricted to designing only one type of craft then we
                        would not see this rich variety of thinking.
                    </Paragraph3>
                </FlexRow>
            </Image3>
            <Text>we are an </Text>
            <Text4>Award-winning</Text4>
            <Text2>Boutique design studio</Text2>
            <Div2>
                <Ellipse>
                    <Text3>See expertise</Text3>
                </Ellipse>
            </Div2>
        </Div1>
    </Image1>;
}

const Image1 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: normal, normal;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(https://file.rendit.io/n/skOSGgh19YbinWEubBm6.png);
`;
const Div1 = styled.div`
  width: 1920px;
  height: 1080px;
  position: relative;
  background-image: linear-gradient(
    180deg,
    #0e1219 0%,
    rgba(14, 18, 25, 0) 16%,
    rgba(14, 18, 25, 0) 84%,
    #0e1219 100%
  );
`;
const Image2 = styled.img`
  width: 1925.63px;
  height: 1082px;
  left: 0.19px;
  top: 152.59px;
  position: absolute;
`;
const Image3 = styled.div`
  width: 1194px;
  height: 582px;
  left: 363px;
  top: 239px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: normal, color, normal;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
  linear-gradient(rgb(77, 150, 180), rgba(165, 182, 189, 1)),
  url(${darkCloud});
  
`;
const Paragraph1 = styled.div`
  width: 696px;
  height: 77px;
  top: 128px;
  left: 249px;
  position: absolute;
  color: #f7f7f7;
  font-size: 20px;
  font-weight: 600;
  font-family: Syne;
  line-height: 28px;
  text-align: center;
  z-index: 2 ;
`;
const FlexRow = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Paragraph2 = styled.div`
  width: 281px;
  height: 137px;
  align-self: flex-start;
  color: #f7f7f7;
  font-size: 16px;
  font-weight: 300;
  font-family: Archivo;
  top: 247px;
  left: 304px;
  position: absolute;
  line-height: 24px;
  text-align: right;
  z-index: 2 ;
`;
const Paragraph3 = styled.div`
  width: 285px;
  height: 236px;
  color: #f7f7f7;
  font-size: 16px;
  font-weight: 300;
  font-family: Archivo;
  top: 247px;
  left: 605px;
  position: absolute;
  line-height: 24px;
  z-index: 2 ;
`;
const Text = styled.div`
  width: 823px;
  height: 145px;
  left: 58px;
  top: 131px;
  position: absolute;
  color: #f7f7f7;
  font-size: 74px;
  font-weight: 500;
  font-family: Syne;
  line-height: 76px;
  text-transform: uppercase;
  
  
`;
const Text4 = styled.div`
  width: 823px;
  height: 145px;
  left: 58px;
  top: 200px;
  position: absolute;
  color: #f7f7f7;
  font-size: 74px;
  font-weight: 500;
  font-family: Syne;
  line-height: 76px;
  text-transform: uppercase;
  
`;
const Text2 = styled.div`
  width: 878px;
  height: 144px;
  left: 982px;
  top: 800px;
  position: absolute;
  color: #f7f7f7;
  font-size: 84px;
  font-weight: 500;
  font-family: Syne;
  line-height: 76px;
  text-align: right;
  text-transform: uppercase;
`;
const Div2 = styled.div`
  width: 320px;
  height: 106px;
  left: 1396px;
  top: 477px;
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
  background-image: url("https://file.rendit.io/n/0OZ0ZXhWWAeHFlVKc0Jv.svg");
  padding: 39px 0px 56px 0px;
`;
const Text3 = styled.div`
  width: 184px;
  height: 11px;
  color: #f7f7f7;
  font-size: 16px;
  font-weight: 700;
  font-family: Syne;
  line-height: 16px;
  text-align: center;
  letter-spacing: 3.2px;
  text-transform: uppercase;
`;