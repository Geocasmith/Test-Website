import styled from "styled-components";
import line from "../Resources/line.svg";
import Mesh2 from "../Resources/Mesh2.svg";
import React from "react";

export function Designs() {
    return <>
        <WhiteRectangle>
            <Text1>award-winning designs</Text1>
            <Text2>29m DSS Super-Maxi Race Yatch</Text2>
            <Text3>YD 37.11M Club Racer</Text3>
            <Text4>13.7M IRC Race Yacht</Text4>
            <Text5>11.3M IRC Race Yacht</Text5>
            <Text6>30m Super-Maxi</Text6>
            <Text7>15.85m Canting Keel Racer/Cruiser</Text7>
            <Paragraph>12m Production One Design Racer / Cruiser</Paragraph>
            <Text8>15.85m TP52 Carbon Race Yacht</Text8>
            <Text9>Mini 650 Carbon Race Yacht</Text9>
            <Text10>12.5m Cruiser / Racer</Text10>
            <Text11>view More</Text11>
            <Div>
                <Text12>CQS</Text12>
                <Text13>[01]</Text13>
            </Div>
            <Div2>
                <Text12>Anarchy</Text12>
                <Text13>[02]</Text13>
            </Div2>
            <Div3>
                <Text12>A Fork in the Road</Text12>
                <Text13>[03]</Text13>
            </Div3>
            <Div4>
                <Text12>General Lee</Text12>
                <Text13>[04]</Text13>
            </Div4>
            <Div5>
                <Text14>Zana/Konica Minolta/Lahana</Text14>
                <Text15>[05]</Text15>
            </Div5>
            <Div6>
                <Text14>Wired</Text14>
                <Text15>[06]</Text15>
            </Div6>
            <Div7>
                <Text16>Jazz Player</Text16>
                <Text17>[07]</Text17>
            </Div7>
            <Div8>
                <Text18>Braveheart /Valkyrie</Text18>
                <Text17>[08]</Text17>
            </Div8>
            <Div9>
                <Text14>NZL-403</Text14>
                <Text15>[09]</Text15>
            </Div9>
            <Div10>
                <Text14>Time to Burn</Text14>
                <Text15>[10]</Text15>
            </Div10>
            <Line src={line}/>
            <Line1 src={line}/>
            <Line2 src={line}/>
            <Line3 src={line}/>
            <Line4 src={line}/>
            <Line5 src={line}/>
            <Line6 src={line}/>
            <Line7 src={line}/>
            <Line8 src={line}/>
            <Line9 src={line}/>
            <Line10 src={line}/>
            <Line11 src={line}/>
        </WhiteRectangle>
        <FlexColumn>
            <Mesh src={Mesh2}/>
        </FlexColumn>
    </>;
}

const Text12 = styled.div`
  width: 759px;
  height: 28px;
  left: 44px;
  position: absolute;
  color: #0e1219;
  font-size: 32px;
  font-weight: 500;
  font-family: Syne;
  line-height: 32px;
  text-transform: uppercase;
`;
const Text13 = styled.div`
  width: 284px;
  height: 12px;
  position: absolute;
  color: #0e1219;
  font-size: 12px;
  font-family: Oxygen Mono;
  line-height: 14px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
const Text14 = styled.div`
  width: 853px;
  height: 28px;
  left: 47px;
  position: absolute;
  color: #0e1219;
  font-size: 32px;
  font-weight: 500;
  font-family: Syne;
  line-height: 32px;
  text-transform: uppercase;
`;
const Text15 = styled.div`
  width: 303.81px;
  height: 12px;
  position: absolute;
  color: #0e1219;
  font-size: 12px;
  font-family: Oxygen Mono;
  line-height: 14px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
const Text16 = styled.div`
  width: 853px;
  height: 25px;
  left: 47px;
  position: absolute;
  color: #0e1219;
  font-size: 32px;
  font-weight: 500;
  font-family: Syne;
  line-height: 32px;
  text-transform: uppercase;
`;
const Text17 = styled.div`
  width: 303.81px;
  height: 24.86px;
  position: absolute;
  color: #0e1219;
  font-size: 12px;
  font-family: Oxygen Mono;
  line-height: 14px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
const Text18 = styled.div`
  width: 702px;
  height: 25px;
  left: 47px;
  position: absolute;
  color: #0e1219;
  font-size: 32px;
  font-weight: 500;
  font-family: Syne;
  line-height: 32px;
  text-transform: uppercase;
`;
const WhiteRectangle = styled.div`
  width: 1920px;
  height: 1080px;
  position: absolute;
  background-color: #f7f7f7;
`;
const Text1 = styled.div`
  width: 817px;
  height: 220px;
  left: 63px;
  top: 140px;
  position: absolute;
  color: #0e1219;
  font-size: 84px;
  font-weight: 500;
  font-family: Syne;
  line-height: 76px;
  text-transform: uppercase;
`;
const Text2 = styled.div`
  width: 430px;
  height: 16px;
  left: 1430px;
  top: 160px;
  position: absolute;
  color: #0e1219;
  font-size: 16px;
  font-weight: 300;
  font-family: Archivo;
  line-height: 24px;
  text-align: right;
`;
const Text3 = styled.div`
  width: 430px;
  height: 16px;
  left: 1430px;
  top: 230px;
  position: absolute;
  color: #0e1219;
  font-size: 16px;
  font-weight: 300;
  font-family: Archivo;
  line-height: 24px;
  text-align: right;
`;
const Text4 = styled.div`
  width: 430px;
  height: 16px;
  left: 1430px;
  top: 300px;
  position: absolute;
  color: #0e1219;
  font-size: 16px;
  font-weight: 300;
  font-family: Archivo;
  line-height: 24px;
  text-align: right;
`;
const Text5 = styled.div`
  width: 430px;
  height: 16px;
  left: 1430px;
  top: 370px;
  position: absolute;
  color: #0e1219;
  font-size: 16px;
  font-weight: 300;
  font-family: Archivo;
  line-height: 24px;
  text-align: right;
`;
const Text6 = styled.div`
  width: 430px;
  height: 16px;
  left: 1430px;
  top: 440px;
  position: absolute;
  color: #0e1219;
  font-size: 16px;
  font-weight: 300;
  font-family: Archivo;
  line-height: 24px;
  text-align: right;
`;
const Text7 = styled.div`
  width: 430px;
  height: 16px;
  left: 1430px;
  top: 510px;
  position: absolute;
  color: #0e1219;
  font-size: 16px;
  font-weight: 300;
  font-family: Archivo;
  line-height: 24px;
  text-align: right;
`;
const Paragraph = styled.div`
  width: 430px;
  height: 16px;
  left: 1430px;
  top: 580px;
  position: absolute;
  color: #0e1219;
  font-size: 16px;
  font-weight: 300;
  font-family: Archivo;
  line-height: 24px;
  text-align: right;
`;
const Text8 = styled.div`
  width: 430px;
  height: 16px;
  left: 1430px;
  top: 650px;
  position: absolute;
  color: #0e1219;
  font-size: 16px;
  font-weight: 300;
  font-family: Archivo;
  line-height: 24px;
  text-align: right;
`;
const Text9 = styled.div`
  width: 430px;
  height: 16px;
  left: 1430px;
  top: 720px;
  position: absolute;
  color: #0e1219;
  font-size: 16px;
  font-weight: 300;
  font-family: Archivo;
  line-height: 24px;
  text-align: right;
`;
const Text10 = styled.div`
  width: 430px;
  height: 16px;
  left: 1430px;
  top: 790px;
  position: absolute;
  color: #0e1219;
  font-size: 16px;
  font-weight: 300;
  font-family: Archivo;
  line-height: 24px;
  text-align: right;
`;
const Text11 = styled.div`
  width: 330px;
  height: 13px;
  left: 1530px;
  top: 868px;
  position: absolute;
  color: #0e1219;
  font-size: 16px;
  font-weight: 700;
  font-family: Syne;
  line-height: 16px;
  text-align: right;
  letter-spacing: 3.2px;
  text-transform: uppercase;
`;
const Div = styled.div`
  width: 803px;
  height: 28px;
  left: 968px;
  top: 160px;
  position: absolute;
`;
const Div2 = styled.div`
  width: 803px;
  height: 28px;
  left: 968px;
  top: 230px;
  position: absolute;
`;
const Div3 = styled.div`
  width: 803px;
  height: 28px;
  left: 968px;
  top: 300px;
  position: absolute;
`;
const Div4 = styled.div`
  width: 803px;
  height: 28px;
  left: 968px;
  top: 370px;
  position: absolute;
`;
const Div5 = styled.div`
  width: 900px;
  height: 28px;
  left: 968px;
  top: 440px;
  position: absolute;
`;
const Div6 = styled.div`
  width: 900px;
  height: 28px;
  left: 968px;
  top: 510px;
  position: absolute;
`;
const Div7 = styled.div`
  width: 900px;
  height: 25px;
  left: 968px;
  top: 580px;
  position: absolute;
`;
const Div8 = styled.div`
  width: 749px;
  height: 25px;
  left: 968px;
  top: 650px;
  position: absolute;
`;
const Div9 = styled.div`
  width: 900px;
  height: 28px;
  left: 968px;
  top: 720px;
  position: absolute;
`;
const Div10 = styled.div`
  width: 900px;
  height: 28px;
  left: 968px;
  top: 790px;
  position: absolute;
`;
const Line = styled.img`
  width: 892px;
  height: 2px;
  left: 968px;
  top: 138px;
  position: absolute;
`;
const Line1 = styled.img`
  width: 892px;
  height: 2px;
  left: 968px;
  top: 208px;
  position: absolute;
`;
const Line2 = styled.img`
  width: 892px;
  height: 2px;
  left: 968px;
  top: 278px;
  position: absolute;
`;
const Line3 = styled.img`
  width: 892px;
  height: 2px;
  left: 968px;
  top: 348px;
  position: absolute;
`;
const Line4 = styled.img`
  width: 892px;
  height: 2px;
  left: 968px;
  top: 418px;
  position: absolute;
`;
const Line5 = styled.img`
  width: 892px;
  height: 2px;
  left: 968px;
  top: 488px;
  position: absolute;
`;
const Line6 = styled.img`
  width: 892px;
  height: 2px;
  left: 968px;
  top: 558px;
  position: absolute;
`;
const Line7 = styled.img`
  width: 892px;
  height: 2px;
  left: 968px;
  top: 628px;
  position: absolute;
`;
const Line8 = styled.img`
  width: 892px;
  height: 2px;
  left: 968px;
  top: 698px;
  position: absolute;
`;
const Line9 = styled.img`
  width: 892px;
  height: 2px;
  left: 968px;
  top: 768px;
  position: absolute;
`;
const Line10 = styled.img`
  width: 892px;
  height: 2px;
  left: 968px;
  top: 838px;
  position: absolute;
`;
const Line11 = styled.img`
  width: 892px;
  height: 2px;
  left: 968px;
  top: 908px;
  position: absolute;
`;
const FlexColumn = styled.div`
  top: 596.5px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/mSWUiIIxTQr7Enm3fEnR.svg");
`;
const Mesh = styled.img`
  height: 626.42px;
`;