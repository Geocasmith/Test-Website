import React from "react";
import './App.css';
import '@aws-amplify/ui-react/styles.css'
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
import boatImage from './Images/1.png';
import darkCloud from './Images/2.png';
import boatImage3 from './Images/3.png';
import boatImage4 from './Images/4.png';
import boatImage5 from './Images/5.png';
import waterImage from './Images/6.png';
import logoSmallSvg from './Images/Logo.svg';
import logoLargeSvg from './Images/LogoLarge.svg';
import logoSmallPng from './Images/Logo192.png';
import logoLargePng from './Images/Logo512.png';
import Mesh from './Images/Mesh.svg';
import Mesh2 from './Images/Mesh2.svg';

import {getOverrideProps} from "@aws-amplify/ui-react/internal";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";

function TopBar() {
    return <View>
        <Text
            fontFamily="Syne"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            textTransform="uppercase"
            lineHeight="14px"
            textAlign="center"
            display="flex"
            dir="column"
            justify-content="flex-start"
            letterSpacing="3.05px"
            width="133px"
            height="14px"
            position="absolute"
            top="52px"
            left="58px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Expertise"
        ></Text>
        <Text
            fontFamily="Syne"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            textTransform="uppercase"
            lineHeight="14px"
            textAlign="center"
            display="flex"
            dir="column"
            justify-content="flex-start"
            letterSpacing="3.05px"
            width="141px"
            height="14px"
            position="absolute"
            top="52px"
            left="363px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Portfolio"
        ></Text>
        <Image
            alt={"MenuLogo"}
            width="329px"
            height="18px"
            position="absolute"
            top="51px"
            left="795px"
            padding="0px 0px 0px 0px"
            src={logoSmallSvg}
        ></Image>
        <Text
            fontFamily="Syne"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            textTransform="uppercase"
            lineHeight="14px"
            textAlign="center"
            display="flex"
            dir="column"
            justify-content="flex-start"
            letterSpacing="3.05px"
            width="115px"
            height="14px"
            position="absolute"
            top="52px"
            left="1451px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Awards"
        ></Text>
        <Text
            fontFamily="Syne"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            textTransform="uppercase"
            lineHeight="14px"
            textAlign="center"
            display="flex"
            dir="column"
            justify-content="flex-start"
            letterSpacing="3.05px"
            width="166px"
            height="14px"
            position="absolute"
            top="52px"
            left="1701px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Contact Us"
        ></Text>
    </View>;
}

function Yacht() {
    return <>
        {/*<Box sx={{ flexGrow: 1 }}*/}
        {/*zIndex={1}>*/}
        {/*    <AppBar position="static">*/}
        {/*        <Toolbar>*/}
        {/*            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>*/}
        {/*                Expertise*/}

        {/*            </Typography>*/}
        {/*            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>*/}
        {/*                Portfolio*/}

        {/*            </Typography>*/}
        {/*            /!*App logo svg*!/*/}
        {/*            <Image src={logoSmallSvg} alt="App logo" width="50px" height="50px" />*/}
        {/*            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>*/}
        {/*                Awards*/}

        {/*            </Typography>*/}
        {/*            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>*/}
        {/*                Contact Us*/}

        {/*            </Typography>*/}

        {/*        </Toolbar>*/}
        {/*    </AppBar>*/}

        {/*</Box>*/}

        <Image
            alt={"BoatImage"}
            width="1920px"
            height="1080px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            src={boatImage}
        ></Image>
        <TopBar/>

        <View
            padding="0px 0px 0px 0px"
            width="1920px"
            height="200px"
            position="absolute"
            top="880px"
            left="0px"
        >
            <View
                width="1920px"
                height="200px"
                position="absolute"
                top="0px"
                left="0px"
                transformOrigin="top left"
                transform="rotate(0deg)"
                padding="0px 0px 0px 0px"
                backgroundImage="linear-gradient(rgba(14,18,25,0), rgba(14,18,25,1))"
            >
        {/*                        backgroundImage="linear-gradient(-90deg, rgba(14,18,25,0), rgba(14,18,25,1))"*/}
        <Text
            fontFamily="Oxygen Mono"
            fontSize="12px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            textTransform="uppercase"
            lineHeight="14px"
            textAlign="left"
            display="flex"
            dir="column"
            justify-content="flex-start"
            letterSpacing="1.05px"
            width="495px"
            height="26px"
            position="absolute"
            top="133px"
            left="60px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="+64 9 480 6800&#xA;info@bakewell-white.com"
        ></Text>
                <Image
                    alt={"LogoLarge"}
                    width="1800px"
                    height="97px"
                    position="absolute"
                    top="6px"
                    left="61px"
                    padding="0px 0px 0px 0px"
                    src={logoLargeSvg}
                ></Image>
        <Text
            fontFamily="Oxygen Mono"
            fontSize="12px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            textTransform="uppercase"
            lineHeight="14px"
            textAlign="right"
            display="flex"
            dir="column"
            justify-content="flex-start"
            letterSpacing="1.05px"
            width="495px"
            height="26px"
            position="absolute"
            top="133px"
            left="1660px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Est. 1994&#xA;auckland / new zealand&#xA;"

        ></Text>
        <Text
            fontFamily="Oxygen Mono"
            fontSize="12px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            textTransform="uppercase"
            lineHeight="14px"
            textAlign="center"
            display="flex"
            dir="column"
            justify-content="flex-start"
            letterSpacing="1.05px"
            width="568px"
            height="26px"
            position="absolute"
            top="133px"
            left="820px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Bakewell-white Yacht Design LTD&#xA;Pace with grace / © 2022"
        ></Text>
            </View>
        </View>
    </>;
}

function Sailboats() {
    return <>
        <Image
            alt={"Image"}
            width="1255px"
            height="640px"
            position="absolute"
            top="2249px"
            left="1118px"
            padding="0px 0px 0px 0px"
            src={boatImage5}
        ></Image>
        <Image
            alt={"Image"}
            width="1255px"
            height="640px"
            position="absolute"
            top="2415px"
            left="1046px"
            padding="0px 0px 0px 0px"
            src={boatImage4}
        ></Image>
        <Image
            alt={"Image"}
            width="1194px"
            height="582px"
            position="absolute"
            top="1319px"
            left="363px"
            padding="0px 0px 0px 0px"
            src={boatImage3}
        ></Image>
        <Image
            alt={"Image"}
            width="1255px"
            height="640px"
            position="absolute"
            top="2607px"
            left="968px"
            padding="0px 0px 0px 0px"
            src={boatImage3}
        ></Image>
        <Text
            fontFamily="Archivo"
            fontSize="16px"
            fontWeight="300"
            color="rgba(247,247,247,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="430px"
            height="88px"
            position="absolute"
            top="2739px"
            left="102px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu in venenatis id laoreet enim. Interdum in orci vitae feugiat quam urna. Pretium netus nec ante massa nulla odio nunc posuere sit. Nec justo, leo eget ipsum sollicitudin aliquet.&#xA;"
        ></Text>
        <View
            padding="0px 0px 0px 0px"
            width="320px"
            height="106px"
            position="absolute"
            top="3055px"
            left="60px"
        >
            <View
                padding="0px 0px 0px 0px"
                width="61px"
                height="16px"
                position="absolute"
                top="65px"
                left="130px"
            >
                <Icon
                    ariaLabel={"Circle"}
                    width="60px"
                    height="0px"
                    viewBox={{ minX: 0, minY: 0, width: 60, height: 1 }}
                    paths={[
                        {
                            d: "M1 -2C0.447715 -2 0 -1.55228 0 -1C0 -0.447715 0.447715 0 1 0L1 -2ZM59 0C59.5523 0 60 -0.447715 60 -1C60 -1.55228 59.5523 -2 59 -2L59 0ZM1 0L59 0L59 -2L1 -2L1 0Z",
                            stroke: "rgba(247,247,247,1)",
                            fillRule: "nonzero",
                            strokeWidth: 2,
                        },
                    ]}
                    position="absolute"
                    top="9px"
                    left="0px"
                ></Icon>
                <Icon
                    ariaLabel={"Circle"}
                    width="8px"
                    height="16px"
                    viewBox={{ minX: 0, minY: 0, width: 8, height: 16 }}
                    paths={[
                        {
                            d: "M0.707107 -0.707107C0.316583 -1.09763 -0.316583 -1.09763 -0.707107 -0.707107C-1.09763 -0.316583 -1.09763 0.316583 -0.707107 0.707107L0.707107 -0.707107ZM8 8L8.70711 8.70711L9.41421 8L8.70711 7.29289L8 8ZM-0.707107 15.2929C-1.09763 15.6834 -1.09763 16.3166 -0.707107 16.7071C-0.316583 17.0976 0.316583 17.0976 0.707107 16.7071L-0.707107 15.2929ZM-0.707107 0.707107L7.29289 8.70711L8.70711 7.29289L0.707107 -0.707107L-0.707107 0.707107ZM7.29289 7.29289L-0.707107 15.2929L0.707107 16.7071L8.70711 8.70711L7.29289 7.29289Z",
                            stroke: "rgba(247,247,247,1)",
                            fillRule: "nonzero",
                            strokeWidth: 2,
                        },
                    ]}
                    position="absolute"
                    top="0px"
                    left="53px"
                ></Icon>
            </View>
            <Icon
                ariaLabel={"Circle"}
                width="320px"
                height="106px"
                viewBox={{ minX: 0, minY: 0, width: 320, height: 106 }}
                paths={[
                    {
                        d: "M318 53C318 59.4369 314.063 65.892 306.193 72.0554C298.347 78.2001 286.87 83.8209 272.508 88.5781C243.807 98.0855 204.029 104 160 104L160 108C204.337 108 244.559 102.05 273.766 92.3752C288.359 87.5413 300.313 81.7416 308.66 75.2046C316.983 68.6864 322 61.1987 322 53L318 53ZM160 104C115.971 104 76.1935 98.0855 47.4918 88.5781C33.1304 83.8209 21.6527 78.2001 13.8068 72.0554C5.93681 65.892 2 59.4369 2 53L-2 53C-2 61.1987 3.01749 68.6864 11.3404 75.2046C19.6874 81.7416 31.6412 87.5413 46.234 92.3752C75.4409 102.05 115.663 108 160 108L160 104ZM2 53C2 46.5631 5.93681 40.108 13.8068 33.9446C21.6527 27.7999 33.1304 22.1791 47.4918 17.4219C76.1935 7.91446 115.971 2 160 2L160 -2C115.663 -2 75.4409 3.95 46.234 13.6248C31.6412 18.4587 19.6874 24.2584 11.3404 30.7954C3.01749 37.3136 -2 44.8013 -2 53L2 53ZM160 2C204.029 2 243.807 7.91446 272.508 17.4219C286.87 22.1791 298.347 27.7999 306.193 33.9446C314.063 40.108 318 46.5631 318 53L322 53C322 44.8013 316.983 37.3136 308.66 30.7954C300.313 24.2584 288.359 18.4587 273.766 13.6248C244.559 3.95 204.337 -2 160 -2L160 2Z",
                        stroke: "rgba(247,247,247,1)",
                        fillRule: "nonzero",
                        strokeWidth: 2,
                    },
                ]}
                position="absolute"
                top="0px"
                left="0px"
            ></Icon>
            <Text
                fontFamily="Syne"
                fontSize="16px"
                fontWeight="700"
                color="rgba(247,247,247,1)"
                textTransform="uppercase"
                lineHeight="16px"
                textAlign="center"
                display="flex"
                dir="column"
                justify-content="flex-start"
                letterSpacing="3.05px"
                width="214px"
                height="13px"
                position="absolute"
                top="39px"
                left="53px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="See all designs"
            ></Text>
        </View>
    </>;
}

function DarkCloud() {
    return <>
        <Image
            alt={"Image"}
            width="1920px"
            height="1080px"
            position="absolute"
            top="1080px"
            left="0px"
            padding="0px 0px 0px 0px"
            src={darkCloud}
        ></Image>
        <Image
            alt={"SailImageFront"}
            width="1193px"
            height="626px"
            position="absolute"
            top="1295px"
            left="363px"
            padding="0px 0px 0px 0px"
            src={darkCloud}
            backgroundImage={darkCloud}
        ></Image>
        <Text

            fontFamily="Syne"
            fontSize="20px"
            fontWeight="600"
            color="rgba(247,247,247,1)"
            lineHeight="28px"
            textAlign="center"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="696px"
            height="77px"
            position="absolute"
            top="1423px"
            left="612px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="We can offer a complete design service to all vessels, power and sail. Whether it is conceptual design work or full naval architecture and engineering, no job is too big or too small for our team."

        ></Text>
        <Text
            fontFamily="Archivo"
            fontSize="16px"
            fontWeight="300"
            color="rgba(247,247,247,1)"
            lineHeight="24px"
            textAlign="right"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="281px"
            height="137px"
            position="absolute"
            top="1542px"
            left="667px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="We believe that success is to a large part a matter of design process, and a good designer will have a design process that will produce a successful outcome whether it be a yacht, a powerboat, an aeroplane, or a ballpoint pen."

        ></Text>
        <Text
            fontFamily="Archivo"
            fontSize="16px"
            fontWeight="300"
            color="rgba(247,247,247,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="285px"
            height="236px"
            position="absolute"
            top="1542px"
            left="968px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="We undertake a wide variety of craft from radio yachts, to racing yachts, offshore powerboats, to 90m motoryachts, pilotboats, kayaks, Arabian dhows, cargo barges and fishing boats. As a result we are exposed to a wide variety of conditions, design problems and novel solutions, and if we were restricted to designing only one type of craft then we would not see this rich variety of thinking."

        ></Text>
        <Text
            fontFamily="Syne"
            fontSize="84px"
            fontWeight="500"
            color="rgba(247,247,247,1)"
            textTransform="uppercase"
            lineHeight="76px"
            textAlign="left"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="823px"
            height="145px"
            position="absolute"
            top="1171px"
            left="58px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="we are an Award-winning"
        ></Text>
        <Text
            fontFamily="Syne"
            fontSize="84px"
            fontWeight="500"
            color="rgba(247,247,247,1)"
            textTransform="uppercase"
            lineHeight="76px"
            textAlign="right"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="878px"
            height="144px"
            position="absolute"
            top="1880px"
            left="982px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Boutique design studio"
        ></Text>

        <SeeExpertise />
    </>;
}

function SeeExpertise() {
    return <View
        padding="0px 0px 0px 0px"
        width="320px"
        height="106px"
        position="absolute"
        top="1557px"
        left="1396px"
    >
        <View
            padding="0px 0px 0px 0px"
            width="61px"
            height="16px"
            position="absolute"
            top="66px"
            left="130px"
        >
            <Icon
                ariaLabel={"Circle"}
                width="60px"
                height="0px"
                viewBox={{minX: 0, minY: 0, width: 60, height: 1}}
                paths={[
                    {
                        d: "M1 -2C0.447715 -2 0 -1.55228 0 -1C0 -0.447715 0.447715 0 1 0L1 -2ZM59 0C59.5523 0 60 -0.447715 60 -1C60 -1.55228 59.5523 -2 59 -2L59 0ZM1 0L59 0L59 -2L1 -2L1 0Z",
                        stroke: "rgba(247,247,247,1)",
                        fillRule: "nonzero",
                        strokeWidth: 2,
                    },
                ]}
                position="absolute"
                top="9px"
                left="0px"
            ></Icon>
            <Icon
                ariaLabel={"Circle"}
                width="8px"
                height="16px"
                viewBox={{minX: 0, minY: 0, width: 8, height: 16}}
                paths={[
                    {
                        d: "M0.707107 -0.707107C0.316583 -1.09763 -0.316583 -1.09763 -0.707107 -0.707107C-1.09763 -0.316583 -1.09763 0.316583 -0.707107 0.707107L0.707107 -0.707107ZM8 8L8.70711 8.70711L9.41421 8L8.70711 7.29289L8 8ZM-0.707107 15.2929C-1.09763 15.6834 -1.09763 16.3166 -0.707107 16.7071C-0.316583 17.0976 0.316583 17.0976 0.707107 16.7071L-0.707107 15.2929ZM-0.707107 0.707107L7.29289 8.70711L8.70711 7.29289L0.707107 -0.707107L-0.707107 0.707107ZM7.29289 7.29289L-0.707107 15.2929L0.707107 16.7071L8.70711 8.70711L7.29289 7.29289Z",
                        stroke: "rgba(247,247,247,1)",
                        fillRule: "nonzero",
                        strokeWidth: 2,
                    },
                ]}
                position="absolute"
                top="0px"
                left="53px"
            ></Icon>
        </View>
        <Icon
            ariaLabel={"circle"}
            width="320px"
            height="106px"
            viewBox={{minX: 0, minY: 0, width: 320, height: 106}}
            paths={[
                {
                    d: "M318 53C318 59.4369 314.063 65.892 306.193 72.0554C298.347 78.2001 286.87 83.8209 272.508 88.5781C243.807 98.0855 204.029 104 160 104L160 108C204.337 108 244.559 102.05 273.766 92.3752C288.359 87.5413 300.313 81.7416 308.66 75.2046C316.983 68.6864 322 61.1987 322 53L318 53ZM160 104C115.971 104 76.1935 98.0855 47.4918 88.5781C33.1304 83.8209 21.6527 78.2001 13.8068 72.0554C5.93681 65.892 2 59.4369 2 53L-2 53C-2 61.1987 3.01749 68.6864 11.3404 75.2046C19.6874 81.7416 31.6412 87.5413 46.234 92.3752C75.4409 102.05 115.663 108 160 108L160 104ZM2 53C2 46.5631 5.93681 40.108 13.8068 33.9446C21.6527 27.7999 33.1304 22.1791 47.4918 17.4219C76.1935 7.91446 115.971 2 160 2L160 -2C115.663 -2 75.4409 3.95 46.234 13.6248C31.6412 18.4587 19.6874 24.2584 11.3404 30.7954C3.01749 37.3136 -2 44.8013 -2 53L2 53ZM160 2C204.029 2 243.807 7.91446 272.508 17.4219C286.87 22.1791 298.347 27.7999 306.193 33.9446C314.063 40.108 318 46.5631 318 53L322 53C322 44.8013 316.983 37.3136 308.66 30.7954C300.313 24.2584 288.359 18.4587 273.766 13.6248C244.559 3.95 204.337 -2 160 -2L160 2Z",
                    stroke: "rgba(247,247,247,1)",
                    fillRule: "nonzero",
                    strokeWidth: 2,
                },
            ]}
            position="absolute"
            top="0px"
            left="0px"
        ></Icon>
        <Text
            fontFamily="Syne"
            fontSize="16px"
            fontWeight="700"
            color="rgba(247,247,247,1)"
            textTransform="uppercase"
            lineHeight="16px"
            textAlign="center"
            display="flex"
            dir="column"
            justify-content="flex-start"
            letterSpacing="3.05px"
            width="184px"
            height="11px"
            position="absolute"
            top="39px"
            left="68px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="See expertise"
        ></Text>
    </View>;
}

function Designs() {
    return <>
        <Text
            fontFamily="Syne"
            fontSize="16px"
            fontWeight="700"
            color="rgba(247,247,247,1)"
            textTransform="uppercase"
            lineHeight="16px"
            textAlign="right"
            display="flex"
            dir="column"
            justify-content="flex-start"
            letterSpacing="3.05px"
            width="330px"
            height="13px"
            position="absolute"
            top="2650px"
            left="863px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="view project"
        ></Text>
        <Text
            fontFamily="Syne"
            fontSize="16px"
            fontWeight="700"
            color="rgba(14,18,25,1)"
            textTransform="uppercase"
            lineHeight="16px"
            textAlign="right"
            display="flex"
            dir="column"
            justify-content="flex-start"
            letterSpacing="3.05px"
            width="330px"
            height="13px"
            position="absolute"
            top="4115px"
            left="1530px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="view More"
        ></Text>
        <Text
            fontFamily="Archivo"
            fontSize="16px"
            fontWeight="300"
            color="rgba(14,18,25,1)"
            lineHeight="24px"
            textAlign="right"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="430px"
            height="16px"
            position="absolute"
            top="3407px"
            left="1430px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="29m DSS Super-Maxi Race Yatch"
        ></Text>
        <Text
            fontFamily="Archivo"
            fontSize="16px"
            fontWeight="300"
            color="rgba(14,18,25,1)"
            lineHeight="24px"
            textAlign="right"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="430px"
            height="16px"
            position="absolute"
            top="3477px"
            left="1430px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="YD 37.11M Club Racer"
        ></Text>
        <Text
            fontFamily="Archivo"
            fontSize="16px"
            fontWeight="300"
            color="rgba(14,18,25,1)"
            lineHeight="24px"
            textAlign="right"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="430px"
            height="16px"
            position="absolute"
            top="3547px"
            left="1430px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="13.7M IRC Race Yacht"
        ></Text>
        <Text
            fontFamily="Archivo"
            fontSize="16px"
            fontWeight="300"
            color="rgba(14,18,25,1)"
            lineHeight="24px"
            textAlign="right"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="430px"
            height="16px"
            position="absolute"
            top="3617px"
            left="1430px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="11.3M IRC Race Yacht"
        ></Text>
        <Text
            fontFamily="Archivo"
            fontSize="16px"
            fontWeight="300"
            color="rgba(14,18,25,1)"
            lineHeight="24px"
            textAlign="right"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="430px"
            height="16px"
            position="absolute"
            top="3687px"
            left="1430px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="30m Super-Maxi"
        ></Text>
        <Text
            fontFamily="Archivo"
            fontSize="16px"
            fontWeight="300"
            color="rgba(14,18,25,1)"
            lineHeight="24px"
            textAlign="right"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="430px"
            height="16px"
            position="absolute"
            top="3757px"
            left="1430px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="15.85m Canting Keel Racer/Cruiser"
        ></Text>
        <Text
            fontFamily="Archivo"
            fontSize="16px"
            fontWeight="300"
            color="rgba(14,18,25,1)"
            lineHeight="24px"
            textAlign="right"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="430px"
            height="16px"
            position="absolute"
            top="3827px"
            left="1430px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="12m Production One Design Racer / Cruiser"
        ></Text>
        <Text
            fontFamily="Archivo"
            fontSize="16px"
            fontWeight="300"
            color="rgba(14,18,25,1)"
            lineHeight="24px"
            textAlign="right"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="430px"
            height="16px"
            position="absolute"
            top="3897px"
            left="1430px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="15.85m TP52 Carbon Race Yacht"
        ></Text>
        <Text
            fontFamily="Archivo"
            fontSize="16px"
            fontWeight="300"
            color="rgba(14,18,25,1)"
            lineHeight="24px"
            textAlign="right"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="430px"
            height="16px"
            position="absolute"
            top="3967px"
            left="1430px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Mini 650 Carbon Race Yacht"
        ></Text>
        <Text
            fontFamily="Archivo"
            fontSize="16px"
            fontWeight="300"
            color="rgba(14,18,25,1)"
            lineHeight="24px"
            textAlign="right"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="430px"
            height="16px"
            position="absolute"
            top="4037px"
            left="1430px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="12.5m Cruiser / Racer"
        ></Text>
        <View
            padding="0px 0px 0px 0px"
            width="1049px"
            height="28px"
            position="absolute"
            top="2523px"
            left="60px"
        >
            <Text
                fontFamily="Syne"
                fontSize="32px"
                fontWeight="500"
                color="rgba(247,247,247,1)"
                textTransform="uppercase"
                lineHeight="32px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                width="1007px"
                height="28px"
                position="absolute"
                top="0px"
                left="42px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="case study"
            ></Text>
            <Text
                fontFamily="Oxygen Mono"
                fontSize="12px"
                fontWeight="400"
                color="rgba(247,247,247,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                letterSpacing="1.05px"
                width="284px"
                height="12px"
                position="absolute"
                top="3px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="[01]"
            ></Text>
        </View>
        <View
            padding="0px 0px 0px 0px"
            width="1049px"
            height="28px"
            position="absolute"
            top="2588px"
            left="60px"
        >
            <Text
                fontFamily="Syne"
                fontSize="32px"
                fontWeight="500"
                color="rgba(247,247,247,1)"
                textTransform="uppercase"
                lineHeight="32px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                width="1007px"
                height="28px"
                position="absolute"
                top="0px"
                left="42px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="case study"
            ></Text>
            <Text
                fontFamily="Oxygen Mono"
                fontSize="12px"
                fontWeight="400"
                color="rgba(247,247,247,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                letterSpacing="1.05px"
                width="284px"
                height="12px"
                position="absolute"
                top="3px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="[02]"
            ></Text>
        </View>
        <View
            padding="0px 0px 0px 0px"
            width="803px"
            height="28px"
            position="absolute"
            top="3407px"
            left="968px"
        >
            <Text
                fontFamily="Syne"
                fontSize="32px"
                fontWeight="500"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="32px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                width="759px"
                height="28px"
                position="absolute"
                top="0px"
                left="44px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="CQS"
            ></Text>
            <Text
                fontFamily="Oxygen Mono"
                fontSize="12px"
                fontWeight="400"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                letterSpacing="1.05px"
                width="284px"
                height="12px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="[01]"
            ></Text>
        </View>
        <View
            padding="0px 0px 0px 0px"
            width="803px"
            height="28px"
            position="absolute"
            top="3477px"
            left="968px"
        >
            <Text
                fontFamily="Syne"
                fontSize="32px"
                fontWeight="500"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="32px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                width="759px"
                height="28px"
                position="absolute"
                top="0px"
                left="44px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Anarchy"
            ></Text>
            <Text
                fontFamily="Oxygen Mono"
                fontSize="12px"
                fontWeight="400"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                letterSpacing="1.05px"
                width="284px"
                height="12px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="[02]"
            ></Text>
        </View>
        <View
            padding="0px 0px 0px 0px"
            width="803px"
            height="28px"
            position="absolute"
            top="3547px"
            left="968px"
        >
            <Text
                fontFamily="Syne"
                fontSize="32px"
                fontWeight="500"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="32px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                width="759px"
                height="28px"
                position="absolute"
                top="0px"
                left="44px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="A Fork in the Road"
            ></Text>
            <Text
                fontFamily="Oxygen Mono"
                fontSize="12px"
                fontWeight="400"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                letterSpacing="1.05px"
                width="284px"
                height="12px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="[03]"
            ></Text>
        </View>
        <View
            padding="0px 0px 0px 0px"
            width="803px"
            height="28px"
            position="absolute"
            top="3617px"
            left="968px"
        >
            <Text
                fontFamily="Syne"
                fontSize="32px"
                fontWeight="500"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="32px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                width="759px"
                height="28px"
                position="absolute"
                top="0px"
                left="44px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="General Lee"
            ></Text>
            <Text
                fontFamily="Oxygen Mono"
                fontSize="12px"
                fontWeight="400"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                letterSpacing="1.05px"
                width="284px"
                height="12px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="[04]"
            ></Text>
        </View>
        <View
            padding="0px 0px 0px 0px"
            width="900px"
            height="28px"
            position="absolute"
            top="3687px"
            left="968px"
        >
            <Text
                fontFamily="Syne"
                fontSize="32px"
                fontWeight="500"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="32px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                width="853px"
                height="28px"
                position="absolute"
                top="0px"
                left="47px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Zana/Konica Minolta/Lahana"
            ></Text>
            <Text
                fontFamily="Oxygen Mono"
                fontSize="12px"
                fontWeight="400"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                letterSpacing="1.05px"
                width="303.81px"
                height="12px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="[05]"
            ></Text>
        </View>
        <View
            padding="0px 0px 0px 0px"
            width="900px"
            height="28px"
            position="absolute"
            top="3757px"
            left="968px"
        >
            <Text
                fontFamily="Syne"
                fontSize="32px"
                fontWeight="500"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="32px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                width="853px"
                height="28px"
                position="absolute"
                top="0px"
                left="47px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Wired"
            ></Text>
            <Text
                fontFamily="Oxygen Mono"
                fontSize="12px"
                fontWeight="400"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                letterSpacing="1.05px"
                width="303.81px"
                height="12px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="[06]"
            ></Text>
        </View>
        <View
            padding="0px 0px 0px 0px"
            width="900px"
            height="25px"
            position="absolute"
            top="3827px"
            left="968px"
        >
            <Text
                fontFamily="Syne"
                fontSize="32px"
                fontWeight="500"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="32px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                width="853px"
                height="25px"
                position="absolute"
                top="0px"
                left="47px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Jazz Player"
            ></Text>
            <Text
                fontFamily="Oxygen Mono"
                fontSize="12px"
                fontWeight="400"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                letterSpacing="1.05px"
                width="303.81px"
                height="24.86px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="[07]"
            ></Text>
        </View>
        <View
            padding="0px 0px 0px 0px"
            width="749px"
            height="25px"
            position="absolute"
            top="3897px"
            left="968px"
        >
            <Text
                fontFamily="Syne"
                fontSize="32px"
                fontWeight="500"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="32px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                width="702px"
                height="25px"
                position="absolute"
                top="0px"
                left="47px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Braveheart /Valkyrie"
            ></Text>
            <Text
                fontFamily="Oxygen Mono"
                fontSize="12px"
                fontWeight="400"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                letterSpacing="1.05px"
                width="303.81px"
                height="24.86px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="[08]"
            ></Text>
        </View>
        <View
            padding="0px 0px 0px 0px"
            width="900px"
            height="28px"
            position="absolute"
            top="3967px"
            left="968px"
        >
            <Text
                fontFamily="Syne"
                fontSize="32px"
                fontWeight="500"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="32px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                width="853px"
                height="28px"
                position="absolute"
                top="0px"
                left="47px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="NZL-403"
            ></Text>
            <Text
                fontFamily="Oxygen Mono"
                fontSize="12px"
                fontWeight="400"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                letterSpacing="1.05px"
                width="303.81px"
                height="12px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="[09]"
            ></Text>
        </View>
        <View
            padding="0px 0px 0px 0px"
            width="900px"
            height="28px"
            position="absolute"
            top="4037px"
            left="968px"
        >
            <Text
                fontFamily="Syne"
                fontSize="32px"
                fontWeight="500"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="32px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                width="853px"
                height="28px"
                position="absolute"
                top="0px"
                left="47px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Time to Burn"></Text>
            <Text
                fontFamily="Oxygen Mono"
                fontSize="12px"
                fontWeight="400"
                color="rgba(14,18,25,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                letterSpacing="1.05px"
                width="303.81px"
                height="12px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="[10]"
            ></Text>
        </View>
        <View
            padding="0px 0px 0px 0px"
            width="1049px"
            height="54px"
            position="absolute"
            top="2653px"
            left="60px"
        >
            <Text
                fontFamily="Syne"
                fontSize="64px"
                fontWeight="500"
                color="rgba(247,247,247,1)"
                textTransform="uppercase"
                lineHeight="64px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                width="1007px"
                height="54px"
                position="absolute"
                top="0px"
                left="42px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="case study"
            ></Text>
            <Text
                fontFamily="Oxygen Mono"
                fontSize="12px"
                fontWeight="400"
                color="rgba(247,247,247,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="flex"
                dir="column"
                justify-content="flex-start"
                letterSpacing="1.05px"
                width="284px"
                height="12px"
                position="absolute"
                top="12px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="[03]"
            ></Text>
        </View>
        <Text
            fontFamily="Syne"
            fontSize="84px"
            fontWeight="500"
            color="rgba(247,247,247,1)"
            textTransform="uppercase"
            lineHeight="76px"
            textAlign="left"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="616px"
            height="144px"
            position="absolute"
            top="2249px"
            left="60px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Selected Works"
        ></Text>
        <Lines/>



    </>;
}

function Lines() {
    return <>
        <Icon
            ariaLabel={"Line"}
            width="892px"
            height="1px"
            viewBox={{minX: 0, minY: 0, width: 892, height: 1}}
            paths={[
                {
                    d: "M0 0L892 0L892 -2L0 -2L0 0Z",
                    stroke: "rgba(14,18,25,1)",
                    fillRule: "nonzero",
                    strokeWidth: 2,
                },
            ]}
            position="absolute"
            top="72.87%"
            bottom="27.13%"
            left="50.42%"
            right="3.13%"
        ></Icon>
        <Icon
            ariaLabel={"Line"}
            width="892px"
            height="1px"
            viewBox={{minX: 0, minY: 0, width: 892, height: 1}}
            paths={[
                {
                    d: "M0 0L892 0L892 -2L0 -2L0 0Z",
                    stroke: "rgba(14,18,25,1)",
                    fillRule: "nonzero",
                    strokeWidth: 2,
                },
            ]}
            position="absolute"
            top="74.38%"
            bottom="25.62%"
            left="50.42%"
            right="3.13%"
        ></Icon>
        <Icon
            ariaLabel={"Line"}
            width="892px"
            height="1px"
            viewBox={{minX: 0, minY: 0, width: 892, height: 1}}
            paths={[
                {
                    d: "M0 0L892 0L892 -2L0 -2L0 0Z",
                    stroke: "rgba(14,18,25,1)",
                    fillRule: "nonzero",
                    strokeWidth: 2,
                },
            ]}
            position="absolute"
            top="75.88%"
            bottom="24.12%"
            left="50.42%"
            right="3.13%"
        ></Icon>
        <Icon
            ariaLabel={"Line"}
            width="892px"
            height="1px"
            viewBox={{minX: 0, minY: 0, width: 892, height: 1}}
            paths={[
                {
                    d: "M0 0L892 0L892 -2L0 -2L0 0Z",
                    stroke: "rgba(14,18,25,1)",
                    fillRule: "nonzero",
                    strokeWidth: 2,
                },
            ]}
            position="absolute"
            top="77.39%"
            bottom="22.61%"
            left="50.42%"
            right="3.13%"
        ></Icon>
        <Icon
            ariaLabel={"Line"}
            width="892px"
            height="1px"
            viewBox={{minX: 0, minY: 0, width: 892, height: 1}}
            paths={[
                {
                    d: "M0 0L892 0L892 -2L0 -2L0 0Z",
                    stroke: "rgba(14,18,25,1)",
                    fillRule: "nonzero",
                    strokeWidth: 2,
                },
            ]}
            position="absolute"
            top="78.89%"
            bottom="21.11%"
            left="50.42%"
            right="3.13%"
        ></Icon>
        <Icon
            ariaLabel={"Line"}
            width="892px"
            height="1px"
            viewBox={{minX: 0, minY: 0, width: 892, height: 1}}
            paths={[
                {
                    d: "M0 0L892 0L892 -2L0 -2L0 0Z",
                    stroke: "rgba(14,18,25,1)",
                    fillRule: "nonzero",
                    strokeWidth: 2,
                },
            ]}
            position="absolute"
            top="80.4%"
            bottom="19.6%"
            left="50.42%"
            right="3.13%"
        ></Icon>
        <Icon
            ariaLabel={"Line"}
            width="892px"
            height="1px"
            viewBox={{minX: 0, minY: 0, width: 892, height: 1}}
            paths={[
                {
                    d: "M0 0L892 0L892 -2L0 -2L0 0Z",
                    stroke: "rgba(14,18,25,1)",
                    fillRule: "nonzero",
                    strokeWidth: 2,
                },
            ]}
            position="absolute"
            top="81.91%"
            bottom="18.09%"
            left="50.42%"
            right="3.13%"
        ></Icon>
        <Icon
            ariaLabel={"Line"}
            width="892px"
            height="1px"
            viewBox={{minX: 0, minY: 0, width: 892, height: 1}}
            paths={[
                {
                    d: "M0 0L892 0L892 -2L0 -2L0 0Z",
                    stroke: "rgba(14,18,25,1)",
                    fillRule: "nonzero",
                    strokeWidth: 2,
                },
            ]}
            position="absolute"
            top="83.41%"
            bottom="16.59%"
            left="50.42%"
            right="3.13%"
        ></Icon>
        <Icon
            ariaLabel={"Line"}
            width="892px"
            height="1px"
            viewBox={{minX: 0, minY: 0, width: 892, height: 1}}
            paths={[
                {
                    d: "M0 0L892 0L892 -2L0 -2L0 0Z",
                    stroke: "rgba(14,18,25,1)",
                    fillRule: "nonzero",
                    strokeWidth: 2,
                },
            ]}
            position="absolute"
            top="84.92%"
            bottom="15.08%"
            left="50.42%"
            right="3.13%"
        ></Icon>
        <Icon
            ariaLabel={"Line"}
            width="892px"
            height="1px"
            viewBox={{minX: 0, minY: 0, width: 892, height: 1}}
            paths={[
                {
                    d: "M0 0L892 0L892 -2L0 -2L0 0Z",
                    stroke: "rgba(14,18,25,1)",
                    fillRule: "nonzero",
                    strokeWidth: 2,
                },
            ]}
            position="absolute"
            top="86.42%"
            bottom="13.58%"
            left="50.42%"
            right="3.13%"
        ></Icon>
        <Icon
            ariaLabel={"Line"}
            width="892px"
            height="1px"
            viewBox={{minX: 0, minY: 0, width: 892, height: 1}}
            paths={[
                {
                    d: "M0 0L892 0L892 -2L0 -2L0 0Z",
                    stroke: "rgba(14,18,25,1)",
                    fillRule: "nonzero",
                    strokeWidth: 2,
                },
            ]}
            position="absolute"
            top="87.93%"
            bottom="12.07%"
            left="50.42%"
            right="3.13%"
        ></Icon>
        <Icon
            ariaLabel={"Line"}
            width="892px"
            height="1px"
            viewBox={{minX: 0, minY: 0, width: 892, height: 1}}
            paths={[
                {
                    d: "M0 0L892 0L892 -2L0 -2L0 0Z",
                    stroke: "rgba(14,18,25,1)",
                    fillRule: "nonzero",
                    strokeWidth: 2,
                },
            ]}
            position="absolute"
            top="89.44%"
            bottom="10.56%"
            left="50.42%"
            right="3.13%"
        ></Icon>
    </>;
}

function ContactUs() {
    return <View
        padding="0px 0px 0px 0px"
        width="320px"
        height="106px"
        position="absolute"
        top="4482px"
        left="808px"
    >
        <View
            padding="0px 0px 0px 0px"
            width="61px"
            height="16px"
            position="absolute"
            top="66px"
            left="130px"
        >
            <Icon
                ariaLabel={"Circle"}
                width="60px"
                height="0px"
                viewBox={{minX: 0, minY: 0, width: 60, height: 1}}
                paths={[
                    {
                        d: "M1 -2C0.447715 -2 0 -1.55228 0 -1C0 -0.447715 0.447715 0 1 0L1 -2ZM59 0C59.5523 0 60 -0.447715 60 -1C60 -1.55228 59.5523 -2 59 -2L59 0ZM1 0L59 0L59 -2L1 -2L1 0Z",
                        stroke: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                        strokeWidth: 2,
                    },
                ]}
                position="absolute"
                top="9px"
                left="0px"
            ></Icon>
            <Icon
                ariaLabel={"Circle"}
                width="8px"
                height="16px"
                viewBox={{minX: 0, minY: 0, width: 8, height: 16}}
                paths={[
                    {
                        d: "M0.707107 -0.707107C0.316583 -1.09763 -0.316583 -1.09763 -0.707107 -0.707107C-1.09763 -0.316583 -1.09763 0.316583 -0.707107 0.707107L0.707107 -0.707107ZM8 8L8.70711 8.70711L9.41421 8L8.70711 7.29289L8 8ZM-0.707107 15.2929C-1.09763 15.6834 -1.09763 16.3166 -0.707107 16.7071C-0.316583 17.0976 0.316583 17.0976 0.707107 16.7071L-0.707107 15.2929ZM-0.707107 0.707107L7.29289 8.70711L8.70711 7.29289L0.707107 -0.707107L-0.707107 0.707107ZM7.29289 7.29289L-0.707107 15.2929L0.707107 16.7071L8.70711 8.70711L7.29289 7.29289Z",
                        stroke: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                        strokeWidth: 2,
                    },
                ]}
                position="absolute"
                top="0px"
                left="53px"
            ></Icon>
        </View>
        <Icon
            ariaLabel={"Circle"}
            width="320px"
            height="106px"
            viewBox={{minX: 0, minY: 0, width: 320, height: 106}}
            paths={[
                {
                    d: "M318 53C318 59.4369 314.063 65.892 306.193 72.0554C298.347 78.2001 286.87 83.8209 272.508 88.5781C243.807 98.0855 204.029 104 160 104L160 108C204.337 108 244.559 102.05 273.766 92.3752C288.359 87.5413 300.313 81.7416 308.66 75.2046C316.983 68.6864 322 61.1987 322 53L318 53ZM160 104C115.971 104 76.1935 98.0855 47.4918 88.5781C33.1304 83.8209 21.6527 78.2001 13.8068 72.0554C5.93681 65.892 2 59.4369 2 53L-2 53C-2 61.1987 3.01749 68.6864 11.3404 75.2046C19.6874 81.7416 31.6412 87.5413 46.234 92.3752C75.4409 102.05 115.663 108 160 108L160 104ZM2 53C2 46.5631 5.93681 40.108 13.8068 33.9446C21.6527 27.7999 33.1304 22.1791 47.4918 17.4219C76.1935 7.91446 115.971 2 160 2L160 -2C115.663 -2 75.4409 3.95 46.234 13.6248C31.6412 18.4587 19.6874 24.2584 11.3404 30.7954C3.01749 37.3136 -2 44.8013 -2 53L2 53ZM160 2C204.029 2 243.807 7.91446 272.508 17.4219C286.87 22.1791 298.347 27.7999 306.193 33.9446C314.063 40.108 318 46.5631 318 53L322 53C322 44.8013 316.983 37.3136 308.66 30.7954C300.313 24.2584 288.359 18.4587 273.766 13.6248C244.559 3.95 204.337 -2 160 -2L160 2Z",
                    stroke: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                    strokeWidth: 2,
                },
            ]}
            position="absolute"
            top="0px"
            left="0px"
        ></Icon>
        <Text
            fontFamily="Syne"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            textTransform="uppercase"
            lineHeight="16px"
            textAlign="center"
            display="flex"
            dir="column"
            justify-content="flex-start"
            letterSpacing="3.05px"
            width="214px"
            height="13px"
            position="absolute"
            top="39px"
            left="53px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Contact Us"
        ></Text>
    </View>;
}

function Footer() {
    return <>
        <Image
            alt={"Image"}
            width="1919px"
            height="321px"
            position="absolute"
            top="4327px"
            left="0px"
            padding="0px 0px 0px 0px"
            src={waterImage}
        ></Image>
        <Text
            fontFamily="Syne"
            fontSize="84px"
            fontWeight="500"
            color="rgba(14,18,25,1)"
            textTransform="uppercase"
            lineHeight="76px"
            textAlign="left"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="817px"
            height="220px"
            position="absolute"
            top="3387px"
            left="63px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="award-winning designs"
        ></Text>
        <Text
            fontFamily="Syne"
            fontSize="84px"
            fontWeight="500"
            color="rgba(255,255,255,1)"
            textTransform="uppercase"
            lineHeight="76px"
            textAlign="center"
            display="flex"
            dir="column"
            justify-content="flex-start"
            width="754px"
            height="65px"
            position="absolute"
            top="4387px"
            left="591px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Get in touch"
        ></Text>
        <Text
            fontFamily="Oxygen Mono"
            fontSize="12px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            textTransform="uppercase"
            lineHeight="14px"
            textAlign="right"
            display="flex"
            dir="column"
            justify-content="flex-start"
            letterSpacing="1.05px"
            width="273px"
            height="12px"
            position="absolute"
            top="4387px"
            left="1587px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Privacy Policy"
        ></Text>
        <Text
            fontFamily="Oxygen Mono"
            fontSize="12px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            textTransform="uppercase"
            lineHeight="14px"
            textAlign="left"
            display="flex"
            dir="column"
            justify-content="flex-start"
            letterSpacing="1.05px"
            width="420px"
            height="11px"
            position="absolute"
            top="4387px"
            left="83px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="info@bakewell-white.com"
        ></Text>
        <Text
            fontFamily="Oxygen Mono"
            fontSize="12px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            textTransform="uppercase"
            lineHeight="14px"
            textAlign="left"
            display="flex"
            dir="column"
            justify-content="flex-start"
            letterSpacing="1.05px"
            width="420px"
            height="12px"
            position="absolute"
            top="4418px"
            left="83px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="+64 9 480 6800"
        ></Text>
        <Text
            fontFamily="Oxygen Mono"
            fontSize="12px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            textTransform="uppercase"
            lineHeight="14px"
            textAlign="left"
            display="flex"
            dir="column"
            justify-content="flex-start"
            letterSpacing="1.05px"
            width="420px"
            height="11px"
            position="absolute"
            top="4450px"
            left="83px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="EST. 1994"
        ></Text>
        <Text
            fontFamily="Oxygen Mono"
            fontSize="12px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            textTransform="uppercase"
            lineHeight="14px"
            textAlign="right"
            display="flex"
            dir="column"
            justify-content="flex-start"
            letterSpacing="1.05px"
            width="273px"
            height="12px"
            position="absolute"
            top="4418px"
            left="1587px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Facebook"
        ></Text>
        <Text
            fontFamily="Oxygen Mono"
            fontSize="12px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            textTransform="uppercase"
            lineHeight="14px"
            textAlign="right"
            display="flex"
            dir="column"
            justify-content="flex-start"
            letterSpacing="1.05px"
            width="273px"
            height="12px"
            position="absolute"
            top="4449px"
            left="1587px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Linkedin"
        ></Text>
        <ContactUs/>
    </>;
}

/* eslint-disable */
function App() {

    return (
        <View
            width="1920px"
            height="4648px"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(84,100,109,1)"
        >

            <View
                width="1920px"
                height="1080px"
                position="absolute"
                top="3247px"
                left="0px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(247,247,247,1)"
            ></View>
            <Icon
                ariaLabel={"Icon"}
                width="1920px"
                height="580px"
                viewBox={{minX: 0, minY: 0, width: 1920, height: 580}}
                paths={[{d: "M0 0L1920 0L1920 580L0 580L0 0Z", fillRule: "nonzero"}]}
                position="absolute"
                top="2740px"
                left="0px"
                transformOrigin="top left"
                transform="rotate(0deg)"
            ></Icon>
            <View
                width="1920px"
                height="1080px"
                position="absolute"
                top="2160px"
                left="0px"
                transformOrigin="top left"
                transform="rotate(0deg)"
                padding="0px 0px 0px 0px"
                backgroundImage="linear-gradient(-90deg, rgba(14,18,25,1), rgba(14,18,25,0), rgba(14,18,25,0), rgba(14,18,25,1))"
            ></View>
            <View
                padding="0px 0px 0px 0px"
                width="1920px"
                height="1086px"
                position="absolute"
                top="1233px"
                left="0px"
                transformOrigin="top left"
                transform="rotate(0deg)"
            ></View>


            <Sailboats/>
            <Yacht/>
            <DarkCloud/>
            <View
                padding="0px 0px 0px 0px"
                width="1920px"
                height="200px"
                position="absolute"
                top="880px"
                left="0px"
            >

                <View
                    width="1800px"
                    height="97px"
                    position="absolute"
                    top="6px"
                    left="60px"
                    overflow="hidden"
                    padding="0px 0px 0px 0px"
                >
                    <View
                        padding="0px 0px 0px 0px"
                        width="1800.12px"
                        height="96.74px"
                        position="absolute"
                        top="0.26px"
                        left="0.09px"
                    >


                    </View>
                </View>
            </View>

            <Designs/>


            <Lines/>


            <Footer/>


        </View>
            );

}

export default App;

// import React from "react";
// import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
// import boatImage from './1.png';
// import darkCloud from './2.png';
// import boatImage3 from './3.png';
// import boatImage4 from './4.png';
// import boatImage5 from './5.png';
//
// function App() {
//
//     return (
//         <View
//             width="1920px"
//             height="4648px"
//             overflow="hidden"
//             position="relative"
//             padding="0px 0px 0px 0px"
//             backgroundColor="rgba(84,100,109,1)"
//         >
//           <Image
//               width="1920px"
//               height="1080px"
//               position="absolute"
//               top="1080px"
//               left="0px"
//               padding="0px 0px 0px 0px"
//               style={{ tintColor: 'gray' }}
//               src={darkCloud}
//
//           ></Image>
//           <View
//               width="1920px"
//               height="1080px"
//               position="absolute"
//               top="3247px"
//               left="0px"
//               padding="0px 0px 0px 0px"
//               backgroundColor="rgba(247,247,247,1)"
//           ></View>
//           <Icon
//               width="1920px"
//               height="580px"
//               viewBox={{ minX: 0, minY: 0, width: 1920, height: 580 }}
//               paths={[{ d: "M0 0L1920 0L1920 580L0 580L0 0Z", fillRule: "nonzero" }]}
//               position="absolute"
//               top="2740px"
//               left="0px"
//               transformOrigin="top left"
//               transform="rotate(0deg)"
//           ></Icon>
//           <View
//               width="1920px"
//               height="1080px"
//               position="absolute"
//               top="2160px"
//               left="0px"
//               transformOrigin="top left"
//               transform="rotate(0deg)"
//               padding="0px 0px 0px 0px"
//               backgroundImage="linear-gradient(-90deg, rgba(14,18,25,1), rgba(14,18,25,0), rgba(14,18,25,0), rgba(14,18,25,1))"
//           ></View>
//           <View
//               padding="0px 0px 0px 0px"
//               width="1920px"
//               height="1086px"
//               position="absolute"
//               top="1233px"
//               left="0px"
//               transformOrigin="top left"
//               transform="rotate(0deg)"
//           >
//             <Icon
//                 width="1919.0648193359375px"
//                 height="254.951171875px"
//                 viewBox={{
//                   minX: 0,
//                   minY: 0,
//                   width: 1919.0648193359375,
//                   height: 254.951171875,
//                 }}
//                 paths={[
//                   {
//                     d: "M-0.281871 0.412975C248.849 170.454 604.212 255.451 959.532 255.451C1314.85 255.451 1670.22 170.454 1919.35 0.412975L1918.78 -0.412975C1669.87 169.481 1314.72 254.451 959.532 254.451C604.343 254.451 249.197 169.481 0.281871 -0.412975L-0.281871 0.412975Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="0%"
//                 bottom="76.52%"
//                 left="0.02%"
//                 right="0.02%"
//             ></Icon>
//             <Icon
//                 width="1919.0648193359375px"
//                 height="223.082275390625px"
//                 viewBox={{
//                   minX: 0,
//                   minY: 0,
//                   width: 1919.0648193359375,
//                   height: 223.082275390625,
//                 }}
//                 paths={[
//                   {
//                     d: "M-0.25637 0.429272C248.869 149.212 604.222 223.582 959.532 223.582C1314.84 223.582 1670.2 149.212 1919.32 0.429272L1918.81 -0.429272C1669.89 148.231 1314.73 222.582 959.532 222.582C604.333 222.582 249.176 148.231 0.25637 -0.429272L-0.25637 0.429272Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="6.25%"
//                 bottom="73.21%"
//                 left="0.02%"
//                 right="0.02%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1919.0648193359375px"
//                 height="191.2135009765625px"
//                 viewBox={{
//                   minX: 0,
//                   minY: 0,
//                   width: 1919.0648193359375,
//                   height: 191.2135009765625,
//                 }}
//                 paths={[
//                   {
//                     d: "M-0.227835 0.445074C248.89 127.97 604.232 191.713 959.532 191.713C1314.83 191.713 1670.17 127.97 1919.29 0.445074L1918.84 -0.445074C1669.91 126.982 1314.74 190.713 959.532 190.713C604.323 190.713 249.155 126.982 0.227835 -0.445074L-0.227835 0.445074Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="12.5%"
//                 bottom="69.89%"
//                 left="0.02%"
//                 right="0.02%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1919.0648193359375px"
//                 height="159.314453125px"
//                 viewBox={{
//                   minX: 0,
//                   minY: 0,
//                   width: 1919.0648193359375,
//                   height: 159.314453125,
//                 }}
//                 paths={[
//                   {
//                     d: "M-0.196157 0.459916C248.912 106.706 604.241 159.814 959.532 159.814C1314.82 159.814 1670.15 106.706 1919.26 0.459916L1918.87 -0.459916C1669.93 105.713 1314.75 158.814 959.532 158.814C604.314 158.814 249.134 105.713 0.196157 -0.459916L-0.196157 0.459916Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="18.75%"
//                 bottom="66.58%"
//                 left="0.02%"
//                 right="0.02%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1919.0648193359375px"
//                 height="127.45166015625px"
//                 viewBox={{
//                   minX: 0,
//                   minY: 0,
//                   width: 1919.0648193359375,
//                   height: 127.45166015625,
//                 }}
//                 paths={[
//                   {
//                     d: "M-0.161462 0.473212C248.934 85.4657 604.25 127.952 959.532 127.952C1314.82 127.952 1670.13 85.4657 1919.23 0.473212L1918.9 -0.473212C1669.95 84.4698 1314.76 126.952 959.532 126.952C604.306 126.952 249.112 84.4698 0.161462 -0.473212L-0.161462 0.473212Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="25%"
//                 bottom="63.26%"
//                 left="0.02%"
//                 right="0.02%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1919.0648193359375px"
//                 height="95.5887451171875px"
//                 viewBox={{
//                   minX: 0,
//                   minY: 0,
//                   width: 1919.0648193359375,
//                   height: 95.5887451171875,
//                 }}
//                 paths={[
//                   {
//                     d: "M-0.123957 0.484391C248.956 64.2248 604.257 96.0887 959.532 96.0887C1314.81 96.0887 1670.11 64.2248 1919.19 0.484391L1918.94 -0.484391C1669.97 63.2268 1314.77 95.0887 959.532 95.0887C604.298 95.0887 249.09 63.2268 0.123957 -0.484391L-0.123957 0.484391Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="31.25%"
//                 bottom="59.95%"
//                 left="0.02%"
//                 right="0.02%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1919.0648193359375px"
//                 height="63.725830078125px"
//                 viewBox={{
//                   minX: 0,
//                   minY: 0,
//                   width: 1919.0648193359375,
//                   height: 63.725830078125,
//                 }}
//                 paths={[
//                   {
//                     d: "M-0.0840862 0.492879C498.017 85.4701 1421.05 85.4701 1919.15 0.492879L1918.98 -0.492879C1420.99 84.4654 498.074 84.4654 0.0840862 -0.492879L-0.0840862 0.492879Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="37.5%"
//                 bottom="56.63%"
//                 left="0.02%"
//                 right="0.02%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1919.0648193359375px"
//                 height="31.8629150390625px"
//                 viewBox={{
//                   minX: 0,
//                   minY: 0,
//                   width: 1919.0648193359375,
//                   height: 31.8629150390625,
//                 }}
//                 paths={[
//                   {
//                     d: "M-0.0424962 0.498191C498.032 42.9845 1421.03 42.9845 1919.11 0.498191L1919.02 -0.498191C1421 41.9833 498.06 41.9833 0.0424962 -0.498191L-0.0424962 0.498191Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="43.75%"
//                 bottom="53.32%"
//                 left="0.02%"
//                 right="0.02%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1919.0648193359375px"
//                 height="1px"
//                 viewBox={{ minX: 0, minY: 0, width: 1919.0648193359375, height: 1 }}
//                 paths={[
//                   {
//                     d: "M0 0.5L1919.06 0.5L1919.06 -0.5L0 -0.5L0 0.5Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="50%"
//                 bottom="50%"
//                 left="0.02%"
//                 right="0.02%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1919.0648193359375px"
//                 height="31.8629150390625px"
//                 viewBox={{
//                   minX: 0,
//                   minY: 0,
//                   width: 1919.0648193359375,
//                   height: 31.8629150390625,
//                 }}
//                 paths={[
//                   {
//                     d: "M0.0424962 32.3611C498.06 -10.1204 1421 -10.1204 1919.02 32.3611L1919.11 31.3647C1421.03 -11.1216 498.032 -11.1216 -0.0424962 31.3647L0.0424962 32.3611Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="53.32%"
//                 bottom="43.75%"
//                 left="0.02%"
//                 right="0.02%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1919.0648193359375px"
//                 height="63.725830078125px"
//                 viewBox={{
//                   minX: 0,
//                   minY: 0,
//                   width: 1919.0648193359375,
//                   height: 63.725830078125,
//                 }}
//                 paths={[
//                   {
//                     d: "M0.0840862 64.2187C498.074 -20.7396 1420.99 -20.7396 1918.98 64.2187L1919.15 63.2329C1421.05 -21.7443 498.017 -21.7443 -0.0840862 63.2329L0.0840862 64.2187Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="56.63%"
//                 bottom="37.5%"
//                 left="0.02%"
//                 right="0.02%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1919.0648193359375px"
//                 height="95.5887451171875px"
//                 viewBox={{
//                   minX: 0,
//                   minY: 0,
//                   width: 1919.0648193359375,
//                   height: 95.5887451171875,
//                 }}
//                 paths={[
//                   {
//                     d: "M0.123957 96.0731C249.09 32.3619 604.298 0.5 959.532 0.5C1314.77 0.5 1669.97 32.3619 1918.94 96.0731L1919.19 95.1043C1670.11 31.3639 1314.81 -0.5 959.532 -0.5C604.257 -0.5 248.956 31.3639 -0.123957 95.1043L0.123957 96.0731Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="59.95%"
//                 bottom="31.25%"
//                 left="0.02%"
//                 right="0.02%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1919.0648193359375px"
//                 height="127.45166015625px"
//                 viewBox={{
//                   minX: 0,
//                   minY: 0,
//                   width: 1919.0648193359375,
//                   height: 127.45166015625,
//                 }}
//                 paths={[
//                   {
//                     d: "M0.161462 127.925C249.112 42.9818 604.306 0.5 959.532 0.5C1314.76 0.5 1669.95 42.9818 1918.9 127.925L1919.23 126.978C1670.13 41.9859 1314.82 -0.5 959.532 -0.5C604.25 -0.5 248.934 41.9859 -0.161462 126.978L0.161462 127.925Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="63.26%"
//                 bottom="25%"
//                 left="0.02%"
//                 right="0.02%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1919.0648193359375px"
//                 height="159.344482421875px"
//                 viewBox={{
//                   minX: 0,
//                   minY: 0,
//                   width: 1919.0648193359375,
//                   height: 159.344482421875,
//                 }}
//                 paths={[
//                   {
//                     d: "M0.196188 159.804C249.134 53.6111 604.314 0.5 959.532 0.5C1314.75 0.5 1669.93 53.6111 1918.87 159.804L1919.26 158.885C1670.15 52.6186 1314.82 -0.5 959.532 -0.5C604.241 -0.5 248.912 52.6186 -0.196188 158.885L0.196188 159.804Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="66.58%"
//                 bottom="18.75%"
//                 left="0.02%"
//                 right="0.02%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1919.0648193359375px"
//                 height="191.2135009765625px"
//                 viewBox={{
//                   minX: 0,
//                   minY: 0,
//                   width: 1919.0648193359375,
//                   height: 191.2135009765625,
//                 }}
//                 paths={[
//                   {
//                     d: "M0.227835 191.659C249.155 64.2318 604.323 0.5 959.532 0.5C1314.74 0.5 1669.91 64.2318 1918.84 191.659L1919.29 190.768C1670.17 63.2439 1314.83 -0.5 959.532 -0.5C604.232 -0.5 248.89 63.2439 -0.227835 190.768L0.227835 191.659Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="69.89%"
//                 bottom="12.5%"
//                 left="0.02%"
//                 right="0.02%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1919.0648193359375px"
//                 height="223.0823974609375px"
//                 viewBox={{
//                   minX: 0,
//                   minY: 0,
//                   width: 1919.0648193359375,
//                   height: 223.0823974609375,
//                 }}
//                 paths={[
//                   {
//                     d: "M0.25637 223.512C249.176 74.8515 604.333 0.499988 959.532 0.499988C1314.73 0.499988 1669.89 74.8515 1918.81 223.512L1919.32 222.653C1670.2 73.8701 1314.84 -0.500012 959.532 -0.500012C604.222 -0.500012 248.869 73.8701 -0.25637 222.653L0.25637 223.512Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="73.21%"
//                 bottom="6.25%"
//                 left="0.02%"
//                 right="0.02%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1919.0648193359375px"
//                 height="254.9512939453125px"
//                 viewBox={{
//                   minX: 0,
//                   minY: 0,
//                   width: 1919.0648193359375,
//                   height: 254.9512939453125,
//                 }}
//                 paths={[
//                   {
//                     d: "M0.281871 255.364C249.197 85.4703 604.343 0.500006 959.532 0.500006C1314.72 0.500006 1669.87 85.4703 1918.78 255.364L1919.35 254.538C1670.22 84.4972 1314.85 -0.499994 959.532 -0.499994C604.212 -0.499994 248.849 84.4972 -0.281871 254.538L0.281871 255.364Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="76.52%"
//                 bottom="0%"
//                 left="0.02%"
//                 right="0.02%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1px"
//                 height="1083.739501953125px"
//                 viewBox={{ minX: 0, minY: 0, width: 1, height: 1083.739501953125 }}
//                 paths={[
//                   {
//                     d: "M-0.5 0L-0.5 1083.74L0.5 1083.74L0.5 0L-0.5 0Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="0.1%"
//                 bottom="0.1%"
//                 left="100%"
//                 right="0%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1px"
//                 height="964.2235107421875px"
//                 viewBox={{ minX: 0, minY: 0, width: 1, height: 964.2235107421875 }}
//                 paths={[
//                   {
//                     d: "M-0.5 0L-0.5 964.224L0.5 964.224L0.5 0L-0.5 0Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="5.61%"
//                 bottom="5.61%"
//                 left="94.88%"
//                 right="5.12%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1px"
//                 height="860.658935546875px"
//                 viewBox={{ minX: 0, minY: 0, width: 1, height: 860.658935546875 }}
//                 paths={[
//                   {
//                     d: "M-0.5 0L-0.5 860.659L0.5 860.659L0.5 0L-0.5 0Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="10.37%"
//                 bottom="10.37%"
//                 left="89.31%"
//                 right="10.69%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1px"
//                 height="773.01416015625px"
//                 viewBox={{ minX: 0, minY: 0, width: 1, height: 773.01416015625 }}
//                 paths={[
//                   {
//                     d: "M-0.5 0L-0.5 773.014L0.5 773.014L0.5 0L-0.5 0Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="14.41%"
//                 bottom="14.41%"
//                 left="83.35%"
//                 right="16.65%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1px"
//                 height="701.304443359375px"
//                 viewBox={{ minX: 0, minY: 0, width: 1, height: 701.304443359375 }}
//                 paths={[
//                   {
//                     d: "M-0.5 0L-0.5 701.304L0.5 701.304L0.5 0L-0.5 0Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="17.71%"
//                 bottom="17.71%"
//                 left="77.07%"
//                 right="22.93%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1px"
//                 height="645.54638671875px"
//                 viewBox={{ minX: 0, minY: 0, width: 1, height: 645.54638671875 }}
//                 paths={[
//                   {
//                     d: "M-0.5 0L-0.5 645.546L0.5 645.546L0.5 0L-0.5 0Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="20.28%"
//                 bottom="20.28%"
//                 left="70.53%"
//                 right="29.47%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1px"
//                 height="605.707763671875px"
//                 viewBox={{ minX: 0, minY: 0, width: 1, height: 605.707763671875 }}
//                 paths={[
//                   {
//                     d: "M-0.5 0L-0.5 605.708L0.5 605.708L0.5 0L-0.5 0Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="22.11%"
//                 bottom="22.11%"
//                 left="63.79%"
//                 right="36.21%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1px"
//                 height="581.8046875px"
//                 viewBox={{ minX: 0, minY: 0, width: 1, height: 581.8046875 }}
//                 paths={[
//                   {
//                     d: "M-0.5 0L-0.5 581.805L0.5 581.805L0.5 0L-0.5 0Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="23.21%"
//                 bottom="23.21%"
//                 left="56.93%"
//                 right="43.07%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1px"
//                 height="573.836669921875px"
//                 viewBox={{ minX: 0, minY: 0, width: 1, height: 573.836669921875 }}
//                 paths={[
//                   {
//                     d: "M-0.5 0L-0.5 573.837L0.5 573.837L0.5 0L-0.5 0Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="23.58%"
//                 bottom="23.58%"
//                 left="50%"
//                 right="50%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1px"
//                 height="581.8046875px"
//                 viewBox={{ minX: 0, minY: 0, width: 1, height: 581.8046875 }}
//                 paths={[
//                   {
//                     d: "M-0.5 0L-0.5 581.805L0.5 581.805L0.5 0L-0.5 0Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="23.21%"
//                 bottom="23.21%"
//                 left="43.07%"
//                 right="56.93%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1px"
//                 height="605.707763671875px"
//                 viewBox={{ minX: 0, minY: 0, width: 1, height: 605.707763671875 }}
//                 paths={[
//                   {
//                     d: "M-0.5 0L-0.5 605.708L0.5 605.708L0.5 0L-0.5 0Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="22.11%"
//                 bottom="22.11%"
//                 left="36.21%"
//                 right="63.79%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1px"
//                 height="645.54638671875px"
//                 viewBox={{ minX: 0, minY: 0, width: 1, height: 645.54638671875 }}
//                 paths={[
//                   {
//                     d: "M-0.5 0L-0.5 645.546L0.5 645.546L0.5 0L-0.5 0Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="20.28%"
//                 bottom="20.28%"
//                 left="29.47%"
//                 right="70.53%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1px"
//                 height="701.304443359375px"
//                 viewBox={{ minX: 0, minY: 0, width: 1, height: 701.304443359375 }}
//                 paths={[
//                   {
//                     d: "M-0.5 0L-0.5 701.304L0.5 701.304L0.5 0L-0.5 0Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="17.71%"
//                 bottom="17.71%"
//                 left="22.93%"
//                 right="77.07%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1px"
//                 height="773.01416015625px"
//                 viewBox={{ minX: 0, minY: 0, width: 1, height: 773.01416015625 }}
//                 paths={[
//                   {
//                     d: "M-0.5 0L-0.5 773.014L0.5 773.014L0.5 0L-0.5 0Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="14.41%"
//                 bottom="14.41%"
//                 left="16.65%"
//                 right="83.35%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1px"
//                 height="860.658935546875px"
//                 viewBox={{ minX: 0, minY: 0, width: 1, height: 860.658935546875 }}
//                 paths={[
//                   {
//                     d: "M-0.5 0L-0.5 860.659L0.5 860.659L0.5 0L-0.5 0Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="10.37%"
//                 bottom="10.37%"
//                 left="10.69%"
//                 right="89.31%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1px"
//                 height="964.2235107421875px"
//                 viewBox={{ minX: 0, minY: 0, width: 1, height: 964.2235107421875 }}
//                 paths={[
//                   {
//                     d: "M-0.5 0L-0.5 964.224L0.5 964.224L0.5 0L-0.5 0Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="5.61%"
//                 bottom="5.61%"
//                 left="5.12%"
//                 right="94.88%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//             <Icon
//                 width="1px"
//                 height="1083.739501953125px"
//                 viewBox={{ minX: 0, minY: 0, width: 1, height: 1083.739501953125 }}
//                 paths={[
//                   {
//                     d: "M-0.5 0L-0.5 1083.74L0.5 1083.74L0.5 0L-0.5 0Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 1,
//                   },
//                 ]}
//                 position="absolute"
//                 top="0.1%"
//                 bottom="0.1%"
//                 left="0%"
//                 right="100%"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//             ></Icon>
//           </View>
//           <Image
//               width="1255px"
//               height="640px"
//               position="absolute"
//               top="2249px"
//               left="1118px"
//               padding="0px 0px 0px 0px"
//               src={boatImage5}
//           ></Image>
//           <Image
//               width="1255px"
//               height="640px"
//               position="absolute"
//               top="2415px"
//               left="1046px"
//               padding="0px 0px 0px 0px"
//               src={boatImage4}
//           ></Image>
//           <Image
//               width="1194px"
//               height="582px"
//               position="absolute"
//               top="1319px"
//               left="363px"
//               padding="0px 0px 0px 0px"
//           ></Image>
//           <Image
//               width="1920px"
//               height="1080px"
//               position="absolute"
//               top="0px"
//               left="0px"
//               padding="0px 0px 0px 0px"
//               src={boatImage}
//           ></Image>
//           <Image
//               width="1193px"
//               height="626px"
//               position="absolute"
//               top="1295px"
//               left="363px"
//               padding="0px 0px 0px 0px"
//               src={darkCloud}
//               backgroundImage={darkCloud}
//           ></Image>
//           <Text
//               fontFamily="Syne"
//               fontSize="20px"
//               fontWeight="600"
//               color="rgba(247,247,247,1)"
//               lineHeight="28px"
//               textAlign="center"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               width="696px"
//               height="77px"
//               position="absolute"
//               top="1423px"
//               left="612px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="We can offer a complete design service to all vessels, power and sail. Whether it is conceptual design work or full naval architecture and engineering, no job is too big or too small for our team."
//           ></Text>
//           <Text
//               fontFamily="Archivo"
//               fontSize="16px"
//               fontWeight="300"
//               color="rgba(247,247,247,1)"
//               lineHeight="24px"
//               textAlign="right"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               width="281px"
//               height="137px"
//               position="absolute"
//               top="1542px"
//               left="667px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="We believe that success is to a large part a matter of design process, and a good designer will have a design process that will produce a successful outcome whether it be a yacht, a powerboat, an aeroplane, or a ballpoint pen."
//           ></Text>
//           <Text
//               fontFamily="Archivo"
//               fontSize="16px"
//               fontWeight="300"
//               color="rgba(247,247,247,1)"
//               lineHeight="24px"
//               textAlign="left"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               width="285px"
//               height="236px"
//               position="absolute"
//               top="1542px"
//               left="968px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="We undertake a wide variety of craft from radio yachts, to racing yachts, offshore powerboats, to 90m motoryachts, pilotboats, kayaks, Arabian dhows, cargo barges and fishing boats. As a result we are exposed to a wide variety of conditions, design problems and novel solutions, and if we were restricted to designing only one type of craft then we would not see this rich variety of thinking."
//
//           ></Text>
//           <Text
//               fontFamily="Syne"
//               fontSize="84px"
//               fontWeight="500"
//               color="rgba(247,247,247,1)"
//               textTransform="uppercase"
//               lineHeight="76px"
//               textAlign="left"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               width="823px"
//               height="145px"
//               position="absolute"
//               top="1171px"
//               left="58px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="we are an Award-winning"
//           ></Text>
//           <Text
//               fontFamily="Syne"
//               fontSize="84px"
//               fontWeight="500"
//               color="rgba(247,247,247,1)"
//               textTransform="uppercase"
//               lineHeight="76px"
//               textAlign="right"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               width="878px"
//               height="144px"
//               position="absolute"
//               top="1880px"
//               left="982px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="Boutique design studio"
//           ></Text>
//           <View
//               padding="0px 0px 0px 0px"
//               width="1920px"
//               height="200px"
//               position="absolute"
//               top="880px"
//               left="0px"
//           >
//             <View
//                 width="1920px"
//                 height="200px"
//                 position="absolute"
//                 top="0px"
//                 left="0px"
//                 transformOrigin="top left"
//                 transform="rotate(0deg)"
//                 padding="0px 0px 0px 0px"
//                 backgroundImage="linear-gradient(-90deg, rgba(14,18,25,0), rgba(14,18,25,1))"
//             ></View>
//             <View
//                 width="1800px"
//                 height="97px"
//                 position="absolute"
//                 top="6px"
//                 left="60px"
//                 overflow="hidden"
//                 padding="0px 0px 0px 0px"
//             >
//               <View
//                   padding="0px 0px 0px 0px"
//                   width="1800.12px"
//                   height="96.74px"
//                   position="absolute"
//                   top="0.26px"
//                   left="0.09px"
//               >
//                 <Icon
//                     width="127.868896484375px"
//                     height="96.33251953125px"
//                     viewBox={{
//                       minX: 0,
//                       minY: 0,
//                       width: 127.868896484375,
//                       height: 96.33251953125,
//                     }}
//                     paths={[
//                       {
//                         d: "M6.62543 96.0757L3.87803 95.1C2.89784 94.6956 2.03872 94.0409 1.38503 93.2001L0.0113165 90.684L0.0113165 41.4394C0.927114 38.2043 2.65695 36.3044 5.09908 36.3044L90.7262 36.3044C93.654 35.9402 96.4307 34.7873 98.7648 32.9666C100.176 31.5834 101.119 29.7867 101.461 27.8316C101.741 26.1316 101.741 24.3967 101.461 22.6967C100.924 20.3827 99.7018 18.2885 97.9569 16.6925C96.212 15.0966 94.0272 14.0744 91.6928 13.7618L5.91314 13.7618L1.84291 11.6051C1.11682 10.7071 0.564524 9.6794 0.214832 8.57543C-0.0716106 7.44683 -0.0716106 6.26359 0.214832 5.13499C0.539731 3.90269 1.18133 2.77885 2.07473 1.87716C2.96813 0.975469 4.08163 0.327915 5.3026 0L94.2876 0C97.266 0.707544 100.164 1.72278 102.937 3.02965C105.745 4.38115 108.295 6.22396 110.467 8.47272C112.781 11.202 114.513 14.3834 115.554 17.8184C116.615 21.2561 116.859 24.8974 116.267 28.4479C115.416 32.6697 113.526 36.6076 110.772 39.8989C113.953 41.3716 116.902 43.3095 119.523 45.6501C122.074 47.9364 124.149 50.7118 125.628 53.8147C126.377 55.9168 126.939 58.082 127.307 60.2848C127.704 62.5215 127.891 64.7909 127.867 67.063C127.724 71.0292 126.735 74.9177 124.967 78.4627C123.081 82.2021 120.406 85.4796 117.132 88.0651C113.68 90.6456 109.805 92.5924 105.684 93.8163C101.561 95.0338 97.3384 95.8759 93.0665 96.3324L6.62543 96.0757ZM105.582 78.2573C107.114 77.4469 108.478 76.349 109.602 75.0222C110.752 73.7706 111.65 72.3058 112.247 70.7088L112.96 62.1848C112.719 60.7123 112.164 59.3104 111.332 58.0767C110.425 56.7862 109.347 55.6285 108.126 54.6363C106.146 53.2044 103.946 52.1114 101.614 51.4013C99.2152 50.6661 96.7391 50.218 94.2367 50.0662L14.5623 50.0662L14.5623 81.7491L94.6946 81.7491C96.6026 81.599 98.4835 81.2021 100.291 80.568C102.021 79.9005 103.802 79.1302 105.582 78.2573Z",
//                         fill: "rgba(255,255,255,1)",
//                         fillRule: "nonzero",
//                       },
//                     ]}
//                     position="absolute"
//                     top="0%"
//                     bottom="0.42%"
//                     left="0%"
//                     right="92.9%"
//                 ></Icon>
//                 <Icon
//                     width="127.99169921875px"
//                     height="96.2568359375px"
//                     viewBox={{
//                       minX: 0,
//                       minY: 0,
//                       width: 127.99169921875,
//                       height: 96.2568359375,
//                     }}
//                     paths={[
//                       {
//                         d: "M120.58 96.2569C119.598 96.0411 118.63 95.7667 117.68 95.4353C116.717 95.0867 115.835 94.5453 115.085 93.8434L97.8376 68.4766L30.0177 68.4766L12.3123 94.1516C7.78416 96.6677 4.22272 96.3596 1.57708 93.2273C0.866332 92.4075 0.375845 91.4174 0.152517 90.3517C-0.0508389 89.2831 -0.0508389 88.1852 0.152517 87.1166L19.3843 58.0012C19.8597 56.6475 20.8327 55.5301 22.1017 54.8801C23.3706 54.2302 24.8387 54.0975 26.2019 54.5094L88.0691 54.5094L57.5425 11.2214C56.6307 9.65847 56.3288 7.80867 56.6957 6.03313C57.0626 4.25759 58.0719 2.6838 59.5267 1.61899C60.9396 0.443181 62.7517 -0.128991 64.5766 0.0244944C66.4015 0.17798 68.0947 1.04498 69.2952 2.44059L126.94 84.6005C127.628 85.7835 127.992 87.1308 127.992 88.5031C127.992 89.8753 127.628 91.2226 126.94 92.4057C125.891 93.7002 124.593 94.7659 123.124 95.538C122.564 95.8461 121.648 96.0515 120.58 96.2569Z",
//                         fill: "rgba(255,255,255,1)",
//                         fillRule: "nonzero",
//                       },
//                     ]}
//                     position="absolute"
//                     top="0.5%"
//                     bottom="0%"
//                     left="7.11%"
//                     right="85.78%"
//                 ></Icon>
//                 <Icon
//                     width="127.9892578125px"
//                     height="95.254150390625px"
//                     viewBox={{
//                       minX: 0,
//                       minY: 0,
//                       width: 127.9892578125,
//                       height: 95.254150390625,
//                     }}
//                     paths={[
//                       {
//                         d: "M6.51233 95.2541C4.54331 94.903 2.75006 93.8894 1.42457 92.3785L0 89.8623L0 5.23769C0.693107 3.73362 1.78958 2.45545 3.16533 1.54792C4.54108 0.640387 6.14114 0.139751 7.78427 0.102702C8.8951 0.183991 9.97655 0.500318 10.9583 1.03114C11.94 1.56195 12.8001 2.29537 13.4825 3.18369L14.6019 5.3404L14.6019 89.8623C13.7431 91.8146 12.3025 93.448 10.4808 94.5352L6.51233 95.2541ZM119.613 95.2541L29.7125 49.5013C28.9823 48.8688 28.4092 48.0724 28.0392 47.1759C27.6692 46.2794 27.5125 45.3079 27.5817 44.3392C27.651 43.3706 27.9443 42.4318 28.438 41.5983C28.9317 40.7647 29.6122 40.0596 30.4248 39.5394L121.14 0C122.993 0.093146 124.735 0.923295 125.984 2.30895C127.233 3.6946 127.888 5.52301 127.805 7.39438C127.935 8.40868 127.763 9.43933 127.31 10.3542C126.857 11.2691 126.143 12.0265 125.261 12.5294L52.2513 45.4447L127.092 84.9328C127.916 86.3487 128.185 88.0247 127.846 89.6308C127.507 91.2369 126.585 92.6568 125.261 93.6109C123.572 94.691 121.612 95.2612 119.613 95.2541L119.613 95.2541Z",
//                         fill: "rgba(255,255,255,1)",
//                         fillRule: "nonzero",
//                       },
//                     ]}
//                     position="absolute"
//                     top="0.85%"
//                     bottom="0.69%"
//                     left="14.62%"
//                     right="78.27%"
//                     {...getOverrideProps(overrides, "Vector5115")}
//                 ></Icon>
//                 <Icon
//                     width="128.37353515625px"
//                     height="95.1513671875px"
//                     viewBox={{
//                       minX: 0,
//                       minY: 0,
//                       width: 128.37353515625,
//                       height: 95.1513671875,
//                     }}
//                     paths={[
//                       {
//                         d: "M6.66496 14.0699L2.28948 12.0159C1.51303 11.0676 0.943931 9.96435 0.619512 8.77852C0.295094 7.59269 0.222708 6.35105 0.40703 5.13499C1.01096 3.78981 1.93585 2.61668 3.09896 1.72057C4.26206 0.82446 5.6271 0.233312 7.07199 0L121.699 0C122.619 0.0394508 123.523 0.262542 124.357 0.656389C125.191 1.05024 125.94 1.60703 126.559 2.29459C127.179 2.98215 127.658 3.78685 127.968 4.66219C128.277 5.53752 128.412 6.46614 128.364 7.39438C128.215 8.3344 127.942 9.24984 127.55 10.1159C127.116 10.9852 126.53 11.7681 125.82 12.4267L122.005 14.1726L6.66496 14.0699ZM6.66496 95.1514C5.74916 94.8433 4.78252 94.5352 3.9176 94.1758C2.93741 93.7714 2.07826 93.1166 1.42457 92.2758L0 89.7597L0 43.0826C0.455128 41.613 1.33076 40.312 2.51671 39.3435C3.70266 38.375 5.14594 37.7821 6.66496 37.6395L110.811 37.6395L114.933 39.8475C115.664 40.7499 116.233 41.7755 116.612 42.8772C116.977 44.082 116.977 45.3696 116.612 46.5744L114.78 49.8094C114.038 50.2599 113.274 50.6712 112.49 51.0418C111.676 51.4358 110.823 51.7455 109.947 51.9661L14.7545 51.9661L14.7545 80.8248L121.597 80.8248C122.507 80.896 123.394 81.1482 124.207 81.5667C125.02 81.9852 125.742 82.5619 126.333 83.2635C126.925 83.9651 127.372 84.7777 127.651 85.6547C127.93 86.5316 128.034 87.4555 127.957 88.3732C127.711 90.1435 126.878 91.7773 125.593 93.0082C124.309 94.2392 122.65 94.9946 120.885 95.1514L6.66496 95.1514Z",
//                         fill: "rgba(255,255,255,1)",
//                         fillRule: "nonzero",
//                       },
//                     ]}
//                     position="absolute"
//                     top="0.96%"
//                     bottom="0.69%"
//                     left="22.13%"
//                     right="70.74%"
//                 ></Icon>
//                 <Icon
//                     width="156.541015625px"
//                     height="95.4638671875px"
//                     viewBox={{
//                       minX: 0,
//                       minY: 0,
//                       width: 156.541015625,
//                       height: 95.4638671875,
//                     }}
//                     paths={[
//                       {
//                         d: "M43.6272 95.4265C41.6582 95.0754 39.8649 94.0619 38.5394 92.5509L0.126777 9.05598C-0.132145 7.64509 0.00727917 6.18915 0.529072 4.8544C1.05086 3.51965 1.934 2.35988 3.07769 1.50754C4.85171 0.530256 6.85931 0.0681402 8.87774 0.172447C9.82249 0.343816 10.7236 0.704799 11.5276 1.23402C12.3316 1.76325 13.0222 2.44994 13.5585 3.25343L44.0851 69.7516L73.4923 3.4075C74.1269 2.15787 75.159 1.15963 76.423 0.572971C77.687 -0.0136852 79.1096 -0.154742 80.4625 0.172447C82.4592 0.40586 84.2858 1.41977 85.5503 2.99669L116.077 68.9813L142.584 3.66424C143.25 2.56126 144.195 1.65672 145.322 1.04319C146.448 0.429663 147.716 0.129168 148.995 0.172447C150.095 0.162489 151.183 0.397473 152.183 0.860667C153.182 1.32386 154.068 2.00386 154.777 2.8522C155.487 3.70055 156.002 4.69635 156.287 5.76867C156.571 6.84098 156.617 7.96342 156.423 9.05598L122.488 92.859C121.704 93.6665 120.758 94.2952 119.714 94.7026C118.67 95.1101 117.551 95.2869 116.433 95.2211C115.355 95.1792 114.297 94.9216 113.318 94.4632C112.34 94.0048 111.462 93.3548 110.735 92.5509L80.2082 25.796L50.75 92.5509C49.8746 93.567 48.7718 94.3579 47.5331 94.858C46.2943 95.358 44.9554 95.553 43.6272 95.4265L43.6272 95.4265Z",
//                         fill: "rgba(255,255,255,1)",
//                         fillRule: "nonzero",
//                       },
//                     ]}
//                     position="absolute"
//                     top="0.67%"
//                     bottom="0.65%"
//                     left="29.28%"
//                     right="62.03%"
//                 ></Icon>
//                 <Icon
//                     width="128.180908203125px"
//                     height="95.1513671875px"
//                     viewBox={{
//                       minX: 0,
//                       minY: 0,
//                       width: 128.180908203125,
//                       height: 95.1513671875,
//                     }}
//                     paths={[
//                       {
//                         d: "M6.22009 14.0699L1.84453 12.0159C1.10745 11.1062 0.554358 10.0594 0.216481 8.93488C-0.0721602 7.685 -0.0721602 6.38487 0.216481 5.13499C0.808842 3.78167 1.73033 2.60135 2.89552 1.70363C4.06072 0.805907 5.43176 0.219904 6.88137 0L121.509 0C123.362 0.093146 125.104 0.923295 126.353 2.30895C127.602 3.6946 128.257 5.52301 128.174 7.39438C127.985 8.3308 127.695 9.24346 127.309 10.1159C126.877 10.9728 126.31 11.7532 125.63 12.4267L121.763 14.1726L6.22009 14.0699ZM6.67797 95.1514L3.8796 94.1758C2.91555 93.7678 2.07384 93.1129 1.43757 92.2758L0.0129263 89.7597L0.0129263 43.0826C0.419124 41.6688 1.22085 40.4033 2.32181 39.4379C3.42278 38.4724 4.77632 37.848 6.22009 37.6395L110.417 37.6395L114.488 39.8475C115.217 40.7607 115.8 41.7828 116.218 42.8772C116.554 44.0861 116.554 45.3654 116.218 46.5744L114.386 49.8094C113.662 50.2595 112.914 50.6709 112.147 51.0418C111.326 51.4195 110.475 51.7286 109.603 51.9661L14.4622 51.9661L14.4622 80.8248L121.305 80.8248C123.142 80.9821 124.843 81.8618 126.042 83.274C127.242 84.6862 127.843 86.5177 127.716 88.3732C127.461 90.1398 126.625 91.7687 125.343 92.998C124.06 94.2273 122.405 94.9857 120.644 95.1514L6.67797 95.1514Z",
//                         fill: "rgba(255,255,255,1)",
//                         fillRule: "nonzero",
//                       },
//                     ]}
//                     position="absolute"
//                     top="0.96%"
//                     bottom="0.69%"
//                     left="38.31%"
//                     right="54.57%"
//                 ></Icon>
//                 <Icon
//                     width="127.75390625px"
//                     height="95.1572265625px"
//                     viewBox={{
//                       minX: 0,
//                       minY: 0,
//                       width: 127.75390625,
//                       height: 95.1572265625,
//                     }}
//                     paths={[
//                       {
//                         d: "M6.51234 95.1572C4.53916 94.8179 2.74225 93.8023 1.42457 92.2816L0 89.7655L0 5.14082C0.610357 3.57631 1.68737 2.24184 3.08188 1.32193C4.4764 0.402027 6.11952 -0.0578745 7.78428 0.00582681C8.88704 0.090975 9.95982 0.409281 10.9328 0.940078C11.9057 1.47087 12.7571 2.20229 13.4318 3.08681L14.5511 5.24352L14.5511 80.8306L121.394 80.8306C123.132 81.2029 124.698 82.1455 125.848 83.5111C126.999 84.8768 127.669 86.5885 127.754 88.379C127.455 90.0917 126.631 91.6666 125.399 92.8824C124.167 94.0982 122.589 94.8938 120.885 95.1572L6.51234 95.1572Z",
//                         fill: "rgba(255,255,255,1)",
//                         fillRule: "nonzero",
//                       },
//                     ]}
//                     position="absolute"
//                     top="0.95%"
//                     bottom="0.69%"
//                     left="45.75%"
//                     right="47.16%"
//                 ></Icon>
//                 <Icon
//                     width="127.8046875px"
//                     height="95.156005859375px"
//                     viewBox={{
//                       minX: 0,
//                       minY: 0,
//                       width: 127.8046875,
//                       height: 95.156005859375,
//                     }}
//                     paths={[
//                       {
//                         d: "M6.51234 95.1559C4.53916 94.8167 2.74225 93.801 1.42457 92.2803L0 89.7642L0 5.13956C0.616605 3.57945 1.69489 2.24923 3.08794 1.33029C4.48099 0.411351 6.121 -0.0515935 7.78428 0.0045669C8.88931 0.0800105 9.96543 0.394125 10.9398 0.925674C11.9141 1.45722 12.7639 2.1938 13.4318 3.08555L14.6019 5.24226L14.6019 80.8293L121.445 80.8293C123.186 81.1935 124.758 82.1337 125.91 83.501C127.062 84.8684 127.728 86.5846 127.805 88.3778C127.494 90.12 126.64 91.7168 125.369 92.9359C124.097 94.1549 122.473 94.9326 120.733 95.1559L6.51234 95.1559Z",
//                         fill: "rgba(255,255,255,1)",
//                         fillRule: "nonzero",
//                       },
//                     ]}
//                     position="absolute"
//                     top="0.95%"
//                     bottom="0.69%"
//                     left="53.17%"
//                     right="39.73%"
//                 ></Icon>
//                 <Icon
//                     width="128.064697265625px"
//                     height="13.864501953125px"
//                     viewBox={{
//                       minX: 0,
//                       minY: 0,
//                       width: 128.064697265625,
//                       height: 13.864501953125,
//                     }}
//                     paths={[
//                       {
//                         d: "M5.49487 13.6077C2.79835 12.0159 1.52641 11.451 1.83167 11.9132C2.13694 12.3753 1.8316 11.9132 1.11931 10.5267C0.511842 9.54612 0.129396 8.4408 0 7.2917L0 5.13499C0.342414 3.84295 1.04021 2.67509 2.01256 1.76641C2.98491 0.857726 4.19219 0.245331 5.49487 0L122.513 0C124.152 0.431797 125.595 1.41563 126.603 2.78845C127.612 4.16128 128.126 5.84071 128.059 7.54844C127.831 8.11153 127.661 8.6965 127.55 9.29434C127.431 9.99542 127.07 10.6317 126.533 11.0916L125.057 12.5294L122.106 13.8645L5.49487 13.6077Z",
//                         fill: "rgba(255,255,255,1)",
//                         fillRule: "nonzero",
//                       },
//                     ]}
//                     position="absolute"
//                     top="43.1%"
//                     bottom="42.57%"
//                     left="60.27%"
//                     right="32.62%"
//                 ></Icon>
//                 <Icon
//                     width="156.41650390625px"
//                     height="95.472900390625px"
//                     viewBox={{
//                       minX: 0,
//                       minY: 0,
//                       width: 156.41650390625,
//                       height: 95.472900390625,
//                     }}
//                     paths={[
//                       {
//                         d: "M43.3159 95.4236C41.3428 95.0843 39.5458 94.0687 38.2282 92.548L0.120754 9.05303C-0.132673 7.63726 0.0146073 6.17804 0.545562 4.84287C1.07652 3.5077 1.96961 2.35068 3.12251 1.50459C4.89363 0.519604 6.90351 0.0569815 8.92263 0.1695C10.8207 0.542431 12.4999 1.64772 13.6033 3.25049L43.8755 69.7486L73.3337 3.40455C73.9591 2.15904 74.982 1.16245 76.2373 0.57553C77.4926 -0.0113877 78.9072 -0.15442 80.253 0.1695C82.2447 0.41852 84.0658 1.42942 85.3407 2.99374L115.867 68.9784L142.476 3.6613C143.147 2.55052 144.1 1.64098 145.236 1.027C146.372 0.413029 147.65 0.116966 148.938 0.1695C150.05 0.222258 151.141 0.499325 152.146 0.984379C153.151 1.46943 154.049 2.15265 154.789 2.99374C156.035 4.74907 156.596 6.90625 156.366 9.05303L122.38 92.8561C121.606 93.6623 120.669 94.2907 119.633 94.6983C118.597 95.1059 117.486 95.2832 116.376 95.2182C115.291 95.1774 114.224 94.9205 113.238 94.4622C112.251 94.004 111.364 93.3534 110.627 92.548L80.1003 25.7931L50.6423 92.548C49.7382 93.584 48.6008 94.3859 47.326 94.8863C46.0511 95.3867 44.676 95.5709 43.3159 95.4236Z",
//                         fill: "rgba(255,255,255,1)",
//                         fillRule: "nonzero",
//                       },
//                     ]}
//                     position="absolute"
//                     top="0.67%"
//                     bottom="0.64%"
//                     left="67.42%"
//                     right="23.89%"
//                 ></Icon>
//                 <Icon
//                     width="127.9591064453125px"
//                     height="95.498046875px"
//                     viewBox={{
//                       minX: 0,
//                       minY: 0,
//                       width: 127.9591064453125,
//                       height: 95.498046875,
//                     }}
//                     paths={[
//                       {
//                         d: "M6.61403 95.4603L3.8666 94.4847C2.89413 94.0667 2.03817 93.4143 1.37364 92.5847L0 90.0686L0 5.44393C0.584116 3.86122 1.65489 2.50883 3.05564 1.58481C4.45639 0.660788 6.11353 0.213673 7.78428 0.308938C8.84936 0.485693 9.87982 0.832364 10.837 1.33594C11.8309 1.83599 12.7136 2.53481 13.4316 3.38993L14.5509 5.54663L14.5509 42.4159L112.999 42.4159L112.999 6.06012C113.222 4.33561 114.053 2.74981 115.34 1.59269C116.25 1.00973 117.246 0.57641 118.291 0.308938C119.295 0.0998238 120.318 -0.0034373 121.343 0.000831227C122.22 -0.0132424 123.09 0.151526 123.903 0.485253C124.715 0.818981 125.452 1.31479 126.069 1.94297C126.687 2.57114 127.173 3.31872 127.497 4.14091C127.821 4.96309 127.978 5.84294 127.957 6.72768L127.957 88.6821C127.862 89.6706 127.574 90.6303 127.11 91.5063C126.647 92.3823 126.016 93.1573 125.255 93.787C124.494 94.4167 123.618 94.8886 122.676 95.1758C121.734 95.4629 120.745 95.5596 119.766 95.4603C118.791 95.1717 117.839 94.8113 116.917 94.382C116.041 93.8975 115.236 93.2926 114.526 92.5847L112.999 89.3497L112.999 56.1776L14.5509 56.1776L14.5509 90.0686C14.0108 90.9938 13.4161 91.8855 12.7702 92.7388C12.1497 93.5759 11.3496 94.2605 10.4299 94.7414L6.61403 95.4603Z",
//                         fill: "rgba(255,255,255,1)",
//                         fillRule: "nonzero",
//                       },
//                     ]}
//                     position="absolute"
//                     top="0.64%"
//                     bottom="0.65%"
//                     left="76.43%"
//                     right="16.47%"
//                 ></Icon>
//                 <Icon
//                     width="14.5506591796875px"
//                     height="95.262451171875px"
//                     viewBox={{
//                       minX: 0,
//                       minY: 0,
//                       width: 14.5506591796875,
//                       height: 95.262451171875,
//                     }}
//                     paths={[
//                       {
//                         d: "M6.66483 95.2541C5.71514 94.946 4.74844 94.5865 3.76483 94.1757C2.72118 93.6865 1.81272 92.9459 1.11929 92.019L0 89.8623L0 5.23769L1.83149 2.15669C2.64153 1.39261 3.6171 0.829951 4.68057 0.513491C5.68244 0.181031 6.72952 0.00780415 7.78413 0C8.76303 0.157593 9.71958 0.433439 10.6332 0.821598C11.5798 1.28289 12.4006 1.97031 13.0244 2.82424L14.5507 5.64848L14.5507 89.5542C14.0612 91.26 13.0172 92.7499 11.5867 93.7838C10.1562 94.8178 8.42248 95.3357 6.66483 95.2541Z",
//                         fill: "rgba(255,255,255,1)",
//                         fillRule: "nonzero",
//                       },
//                     ]}
//                     position="absolute"
//                     top="0.85%"
//                     bottom="0.68%"
//                     left="84.24%"
//                     right="14.95%"
//                 ></Icon>
//                 <Icon
//                     width="127.9072265625px"
//                     height="94.998779296875px"
//                     viewBox={{
//                       minX: 0,
//                       minY: 0,
//                       width: 127.9072265625,
//                       height: 94.998779296875,
//                     }}
//                     paths={[
//                       {
//                         d: "M63.0881 94.9974C61.1032 94.692 59.2955 93.6703 58.0004 92.1217L56.4232 89.2975L56.4232 13.9158L6.20707 13.9158C4.85257 13.5953 3.5888 12.9658 2.51282 12.0756C1.43685 11.1855 0.577273 10.0584 0 8.78083L0 5.13499C0.521374 3.74368 1.41622 2.52636 2.5844 1.61942C3.75258 0.712472 5.14789 0.15173 6.61402 0L121.292 0C123.118 0.156018 124.817 1.00661 126.045 2.37953C127.273 3.75244 127.938 5.54505 127.906 7.39438C127.751 9.37442 126.838 11.2159 125.362 12.5294L121.546 14.2753L71.025 14.2753L71.025 89.6056L69.1934 92.8407C67.479 94.2729 65.3132 95.038 63.0881 94.9974Z",
//                         fill: "rgba(255,255,255,1)",
//                         fillRule: "nonzero",
//                       },
//                     ]}
//                     position="absolute"
//                     top="1.11%"
//                     bottom="0.69%"
//                     left="85.45%"
//                     right="7.44%"
//                 ></Icon>
//                 <Icon
//                     width="128.167236328125px"
//                     height="95.1513671875px"
//                     viewBox={{
//                       minX: 0,
//                       minY: 0,
//                       width: 128.167236328125,
//                       height: 95.1513671875,
//                     }}
//                     paths={[
//                       {
//                         d: "M6.25782 14.0699L1.83151 12.0159C1.13248 11.0812 0.583072 10.0415 0.203398 8.93488C-0.0603484 7.68223 -0.0603484 6.38764 0.203398 5.13499C0.803529 3.78713 1.72742 2.61164 2.8912 1.71501C4.05498 0.818372 5.42189 0.228908 6.86833 0L121.495 0C123.349 0.093146 125.091 0.923295 126.34 2.30895C127.589 3.6946 128.243 5.52301 128.16 7.39438C127.995 8.33688 127.704 9.25241 127.295 10.1159C126.899 10.9943 126.327 11.7808 125.616 12.4267L121.801 14.1726L6.25782 14.0699ZM6.66493 95.1514C5.69826 94.8433 4.78242 94.5352 3.9175 94.1758C2.93732 93.7714 2.07825 93.1166 1.42456 92.2758L0 89.7597L0 43.0826C0.426556 41.671 1.24076 40.4104 2.34839 39.447C3.45602 38.4836 4.81158 37.8569 6.25782 37.6395L110.404 37.6395L114.525 39.8475C115.257 40.7499 115.825 41.7755 116.204 42.8772C116.543 44.0858 116.543 45.3658 116.204 46.5744L114.372 49.8094C113.631 50.2599 112.867 50.6712 112.083 51.0418C111.265 51.4276 110.413 51.737 109.539 51.9661L14.6018 51.9661L14.6018 80.8248L121.444 80.8248C123.277 80.9819 124.973 81.8634 126.164 83.2772C127.355 84.6911 127.945 86.5228 127.804 88.3732C127.558 90.1435 126.725 91.7773 125.44 93.0082C124.156 94.2392 122.496 94.9946 120.732 95.1514L6.66493 95.1514Z",
//                         fill: "rgba(255,255,255,1)",
//                         fillRule: "nonzero",
//                       },
//                     ]}
//                     position="absolute"
//                     top="0.96%"
//                     bottom="0.69%"
//                     left="92.88%"
//                     right="0%"
//                 ></Icon>
//               </View>
//             </View>
//             <Text
//                 fontFamily="Oxygen Mono"
//                 fontSize="12px"
//                 fontWeight="400"
//                 color="rgba(255,255,255,1)"
//                 textTransform="uppercase"
//                 lineHeight="14px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 letterSpacing="1.05px"
//                 width="495px"
//                 height="26px"
//                 position="absolute"
//                 top="133px"
//                 left="60px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="+64 9 480 6800&#xA;info@bakewell-white.com"
//
//             ></Text>
//             <Text
//                 fontFamily="Oxygen Mono"
//                 fontSize="12px"
//                 fontWeight="400"
//                 color="rgba(255,255,255,1)"
//                 textTransform="uppercase"
//                 lineHeight="14px"
//                 textAlign="right"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 letterSpacing="1.05px"
//                 width="495px"
//                 height="26px"
//                 position="absolute"
//                 top="133px"
//                 left="1365px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="Est. 1994&#xA;auckland / new zealand&#xA;"
//             ></Text>
//             <Text
//                 fontFamily="Oxygen Mono"
//                 fontSize="12px"
//                 fontWeight="400"
//                 color="rgba(255,255,255,1)"
//                 textTransform="uppercase"
//                 lineHeight="14px"
//                 textAlign="center"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 letterSpacing="1.05px"
//                 width="568px"
//                 height="26px"
//                 position="absolute"
//                 top="133px"
//                 left="676px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="Bakewell-white Yacht Design LTD&#x2028;Pace with grace / © 2022"
//                 {...getOverrideProps(
//                     overrides,
//                     "Bakewell-white Yacht Design LTD\u2028Pace with grace / \u00A9 2022"
//                 )}
//             ></Text>
//           </View>
//           <Image
//               width="1255px"
//               height="640px"
//               position="absolute"
//               top="2607px"
//               left="968px"
//               padding="0px 0px 0px 0px"
//               src={boatImage3}
//               {...getOverrideProps(
//                   overrides,
//                   "67656842_2629921597042809_3143850485111324672_o 1"
//               )}
//           ></Image>
//           <Text
//               fontFamily="Archivo"
//               fontSize="16px"
//               fontWeight="300"
//               color="rgba(247,247,247,1)"
//               lineHeight="24px"
//               textAlign="left"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               width="430px"
//               height="88px"
//               position="absolute"
//               top="2739px"
//               left="102px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu in venenatis id laoreet enim. Interdum in orci vitae feugiat quam urna. Pretium netus nec ante massa nulla odio nunc posuere sit. Nec justo, leo eget ipsum sollicitudin aliquet.&#xA;"
//               {...getOverrideProps(
//                   overrides,
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu in venenatis id laoreet enim. Interdum in orci vitae feugiat quam urna. Pretium netus nec ante massa nulla odio nunc posuere sit. Nec justo, leo eget ipsum sollicitudin aliquet."
//               )}
//           ></Text>
//           <Text
//               fontFamily="Archivo"
//               fontSize="16px"
//               fontWeight="300"
//               color="rgba(14,18,25,1)"
//               lineHeight="24px"
//               textAlign="right"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               width="430px"
//               height="16px"
//               position="absolute"
//               top="3407px"
//               left="1430px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="29m DSS Super-Maxi Race Yatch"
//               {...getOverrideProps(overrides, "29m DSS Super-Maxi Race Yatch")}
//           ></Text>
//           <View
//               padding="0px 0px 0px 0px"
//               width="320px"
//               height="106px"
//               position="absolute"
//               top="1557px"
//               left="1396px"
//               {...getOverrideProps(overrides, "Group 286")}
//           >
//             <View
//                 padding="0px 0px 0px 0px"
//                 width="61px"
//                 height="16px"
//                 position="absolute"
//                 top="66px"
//                 left="130px"
//                 {...getOverrideProps(overrides, "Group 2035146")}
//             >
//               <Icon
//                   width="60px"
//                   height="0px"
//                   viewBox={{ minX: 0, minY: 0, width: 60, height: 1 }}
//                   paths={[
//                     {
//                       d: "M1 -2C0.447715 -2 0 -1.55228 0 -1C0 -0.447715 0.447715 0 1 0L1 -2ZM59 0C59.5523 0 60 -0.447715 60 -1C60 -1.55228 59.5523 -2 59 -2L59 0ZM1 0L59 0L59 -2L1 -2L1 0Z",
//                       stroke: "rgba(247,247,247,1)",
//                       fillRule: "nonzero",
//                       strokeWidth: 2,
//                     },
//                   ]}
//                   position="absolute"
//                   top="9px"
//                   left="0px"
//                   {...getOverrideProps(overrides, "Line 95147")}
//               ></Icon>
//               <Icon
//                   width="8px"
//                   height="16px"
//                   viewBox={{ minX: 0, minY: 0, width: 8, height: 16 }}
//                   paths={[
//                     {
//                       d: "M0.707107 -0.707107C0.316583 -1.09763 -0.316583 -1.09763 -0.707107 -0.707107C-1.09763 -0.316583 -1.09763 0.316583 -0.707107 0.707107L0.707107 -0.707107ZM8 8L8.70711 8.70711L9.41421 8L8.70711 7.29289L8 8ZM-0.707107 15.2929C-1.09763 15.6834 -1.09763 16.3166 -0.707107 16.7071C-0.316583 17.0976 0.316583 17.0976 0.707107 16.7071L-0.707107 15.2929ZM-0.707107 0.707107L7.29289 8.70711L8.70711 7.29289L0.707107 -0.707107L-0.707107 0.707107ZM7.29289 7.29289L-0.707107 15.2929L0.707107 16.7071L8.70711 8.70711L7.29289 7.29289Z",
//                       stroke: "rgba(247,247,247,1)",
//                       fillRule: "nonzero",
//                       strokeWidth: 2,
//                     },
//                   ]}
//                   position="absolute"
//                   top="0px"
//                   left="53px"
//                   {...getOverrideProps(overrides, "Vector 15148")}
//               ></Icon>
//             </View>
//             <Icon
//                 width="320px"
//                 height="106px"
//                 viewBox={{ minX: 0, minY: 0, width: 320, height: 106 }}
//                 paths={[
//                   {
//                     d: "M318 53C318 59.4369 314.063 65.892 306.193 72.0554C298.347 78.2001 286.87 83.8209 272.508 88.5781C243.807 98.0855 204.029 104 160 104L160 108C204.337 108 244.559 102.05 273.766 92.3752C288.359 87.5413 300.313 81.7416 308.66 75.2046C316.983 68.6864 322 61.1987 322 53L318 53ZM160 104C115.971 104 76.1935 98.0855 47.4918 88.5781C33.1304 83.8209 21.6527 78.2001 13.8068 72.0554C5.93681 65.892 2 59.4369 2 53L-2 53C-2 61.1987 3.01749 68.6864 11.3404 75.2046C19.6874 81.7416 31.6412 87.5413 46.234 92.3752C75.4409 102.05 115.663 108 160 108L160 104ZM2 53C2 46.5631 5.93681 40.108 13.8068 33.9446C21.6527 27.7999 33.1304 22.1791 47.4918 17.4219C76.1935 7.91446 115.971 2 160 2L160 -2C115.663 -2 75.4409 3.95 46.234 13.6248C31.6412 18.4587 19.6874 24.2584 11.3404 30.7954C3.01749 37.3136 -2 44.8013 -2 53L2 53ZM160 2C204.029 2 243.807 7.91446 272.508 17.4219C286.87 22.1791 298.347 27.7999 306.193 33.9446C314.063 40.108 318 46.5631 318 53L322 53C322 44.8013 316.983 37.3136 308.66 30.7954C300.313 24.2584 288.359 18.4587 273.766 13.6248C244.559 3.95 204.337 -2 160 -2L160 2Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 2,
//                   },
//                 ]}
//                 position="absolute"
//                 top="0px"
//                 left="0px"
//                 {...getOverrideProps(overrides, "Ellipse 25149")}
//             ></Icon>
//             <Text
//                 fontFamily="Syne"
//                 fontSize="16px"
//                 fontWeight="700"
//                 color="rgba(247,247,247,1)"
//                 textTransform="uppercase"
//                 lineHeight="16px"
//                 textAlign="center"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 letterSpacing="3.05px"
//                 width="184px"
//                 height="11px"
//                 position="absolute"
//                 top="39px"
//                 left="68px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="See expertise"
//                 {...getOverrideProps(overrides, "See expertise")}
//             ></Text>
//           </View>
//           <Text
//               fontFamily="Archivo"
//               fontSize="16px"
//               fontWeight="300"
//               color="rgba(14,18,25,1)"
//               lineHeight="24px"
//               textAlign="right"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               width="430px"
//               height="16px"
//               position="absolute"
//               top="3477px"
//               left="1430px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="YD 37.11M Club Racer"
//               {...getOverrideProps(overrides, "YD 37.11M Club Racer")}
//           ></Text>
//           <Text
//               fontFamily="Archivo"
//               fontSize="16px"
//               fontWeight="300"
//               color="rgba(14,18,25,1)"
//               lineHeight="24px"
//               textAlign="right"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               width="430px"
//               height="16px"
//               position="absolute"
//               top="3547px"
//               left="1430px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="13.7M IRC Race Yacht"
//               {...getOverrideProps(overrides, "13.7M IRC Race Yacht")}
//           ></Text>
//           <Text
//               fontFamily="Archivo"
//               fontSize="16px"
//               fontWeight="300"
//               color="rgba(14,18,25,1)"
//               lineHeight="24px"
//               textAlign="right"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               width="430px"
//               height="16px"
//               position="absolute"
//               top="3617px"
//               left="1430px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="11.3M IRC Race Yacht"
//               {...getOverrideProps(overrides, "11.3M IRC Race Yacht")}
//           ></Text>
//           <Text
//               fontFamily="Archivo"
//               fontSize="16px"
//               fontWeight="300"
//               color="rgba(14,18,25,1)"
//               lineHeight="24px"
//               textAlign="right"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               width="430px"
//               height="16px"
//               position="absolute"
//               top="3687px"
//               left="1430px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="30m Super-Maxi"
//               {...getOverrideProps(overrides, "30m Super-Maxi")}
//           ></Text>
//           <Text
//               fontFamily="Archivo"
//               fontSize="16px"
//               fontWeight="300"
//               color="rgba(14,18,25,1)"
//               lineHeight="24px"
//               textAlign="right"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               width="430px"
//               height="16px"
//               position="absolute"
//               top="3757px"
//               left="1430px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="15.85m Canting Keel Racer/Cruiser"
//               {...getOverrideProps(overrides, "15.85m Canting Keel Racer/Cruiser")}
//           ></Text>
//           <Text
//               fontFamily="Archivo"
//               fontSize="16px"
//               fontWeight="300"
//               color="rgba(14,18,25,1)"
//               lineHeight="24px"
//               textAlign="right"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               width="430px"
//               height="16px"
//               position="absolute"
//               top="3827px"
//               left="1430px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="12m Production One Design Racer / Cruiser"
//               {...getOverrideProps(
//                   overrides,
//                   "12m Production One Design Racer / Cruiser"
//               )}
//           ></Text>
//           <Text
//               fontFamily="Archivo"
//               fontSize="16px"
//               fontWeight="300"
//               color="rgba(14,18,25,1)"
//               lineHeight="24px"
//               textAlign="right"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               width="430px"
//               height="16px"
//               position="absolute"
//               top="3897px"
//               left="1430px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="15.85m TP52 Carbon Race Yacht"
//               {...getOverrideProps(overrides, "15.85m TP52 Carbon Race Yacht")}
//           ></Text>
//           <Text
//               fontFamily="Archivo"
//               fontSize="16px"
//               fontWeight="300"
//               color="rgba(14,18,25,1)"
//               lineHeight="24px"
//               textAlign="right"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               width="430px"
//               height="16px"
//               position="absolute"
//               top="3967px"
//               left="1430px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="Mini 650 Carbon Race Yacht"
//               {...getOverrideProps(overrides, "Mini 650 Carbon Race Yacht")}
//           ></Text>
//           <Text
//               fontFamily="Archivo"
//               fontSize="16px"
//               fontWeight="300"
//               color="rgba(14,18,25,1)"
//               lineHeight="24px"
//               textAlign="right"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               width="430px"
//               height="16px"
//               position="absolute"
//               top="4037px"
//               left="1430px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="12.5m Cruiser / Racer"
//               {...getOverrideProps(overrides, "12.5m Cruiser / Racer")}
//           ></Text>
//           <Text
//               fontFamily="Syne"
//               fontSize="16px"
//               fontWeight="700"
//               color="rgba(247,247,247,1)"
//               textTransform="uppercase"
//               lineHeight="16px"
//               textAlign="right"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               letterSpacing="3.05px"
//               width="330px"
//               height="13px"
//               position="absolute"
//               top="2650px"
//               left="863px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="view project"
//               {...getOverrideProps(overrides, "view project")}
//           ></Text>
//           <Text
//               fontFamily="Syne"
//               fontSize="16px"
//               fontWeight="700"
//               color="rgba(14,18,25,1)"
//               textTransform="uppercase"
//               lineHeight="16px"
//               textAlign="right"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               letterSpacing="3.05px"
//               width="330px"
//               height="13px"
//               position="absolute"
//               top="4115px"
//               left="1530px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="view More"
//               {...getOverrideProps(overrides, "view More")}
//           ></Text>
//           <View
//               padding="0px 0px 0px 0px"
//               width="1049px"
//               height="28px"
//               position="absolute"
//               top="2523px"
//               left="60px"
//               {...getOverrideProps(overrides, "Group 290")}
//           >
//             <Text
//                 fontFamily="Syne"
//                 fontSize="32px"
//                 fontWeight="500"
//                 color="rgba(247,247,247,1)"
//                 textTransform="uppercase"
//                 lineHeight="32px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 width="1007px"
//                 height="28px"
//                 position="absolute"
//                 top="0px"
//                 left="42px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="case study"
//                 {...getOverrideProps(overrides, "case study5163")}
//             ></Text>
//             <Text
//                 fontFamily="Oxygen Mono"
//                 fontSize="12px"
//                 fontWeight="400"
//                 color="rgba(247,247,247,1)"
//                 textTransform="uppercase"
//                 lineHeight="14px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 letterSpacing="1.05px"
//                 width="284px"
//                 height="12px"
//                 position="absolute"
//                 top="3px"
//                 left="0px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="[01]"
//                 {...getOverrideProps(overrides, "[01]5164")}
//             ></Text>
//           </View>
//           <View
//               padding="0px 0px 0px 0px"
//               width="1049px"
//               height="28px"
//               position="absolute"
//               top="2588px"
//               left="60px"
//               {...getOverrideProps(overrides, "Group 294")}
//           >
//             <Text
//                 fontFamily="Syne"
//                 fontSize="32px"
//                 fontWeight="500"
//                 color="rgba(247,247,247,1)"
//                 textTransform="uppercase"
//                 lineHeight="32px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 width="1007px"
//                 height="28px"
//                 position="absolute"
//                 top="0px"
//                 left="42px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="case study"
//                 {...getOverrideProps(overrides, "case study5166")}
//             ></Text>
//             <Text
//                 fontFamily="Oxygen Mono"
//                 fontSize="12px"
//                 fontWeight="400"
//                 color="rgba(247,247,247,1)"
//                 textTransform="uppercase"
//                 lineHeight="14px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 letterSpacing="1.05px"
//                 width="284px"
//                 height="12px"
//                 position="absolute"
//                 top="3px"
//                 left="0px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="[02]"
//                 {...getOverrideProps(overrides, "[02]5167")}
//             ></Text>
//           </View>
//           <View
//               padding="0px 0px 0px 0px"
//               width="803px"
//               height="28px"
//               position="absolute"
//               top="3407px"
//               left="968px"
//               {...getOverrideProps(overrides, "Group 295")}
//           >
//             <Text
//                 fontFamily="Syne"
//                 fontSize="32px"
//                 fontWeight="500"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="32px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 width="759px"
//                 height="28px"
//                 position="absolute"
//                 top="0px"
//                 left="44px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="CQS"
//                 {...getOverrideProps(overrides, "CQS")}
//             ></Text>
//             <Text
//                 fontFamily="Oxygen Mono"
//                 fontSize="12px"
//                 fontWeight="400"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="14px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 letterSpacing="1.05px"
//                 width="284px"
//                 height="12px"
//                 position="absolute"
//                 top="0px"
//                 left="0px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="[01]"
//                 {...getOverrideProps(overrides, "[01]5170")}
//             ></Text>
//           </View>
//           <View
//               padding="0px 0px 0px 0px"
//               width="803px"
//               height="28px"
//               position="absolute"
//               top="3477px"
//               left="968px"
//               {...getOverrideProps(overrides, "Group 296")}
//           >
//             <Text
//                 fontFamily="Syne"
//                 fontSize="32px"
//                 fontWeight="500"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="32px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 width="759px"
//                 height="28px"
//                 position="absolute"
//                 top="0px"
//                 left="44px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="Anarchy"
//                 {...getOverrideProps(overrides, "Anarchy")}
//             ></Text>
//             <Text
//                 fontFamily="Oxygen Mono"
//                 fontSize="12px"
//                 fontWeight="400"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="14px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 letterSpacing="1.05px"
//                 width="284px"
//                 height="12px"
//                 position="absolute"
//                 top="0px"
//                 left="0px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="[02]"
//                 {...getOverrideProps(overrides, "[02]5173")}
//             ></Text>
//           </View>
//           <View
//               padding="0px 0px 0px 0px"
//               width="803px"
//               height="28px"
//               position="absolute"
//               top="3547px"
//               left="968px"
//               {...getOverrideProps(overrides, "Group 297")}
//           >
//             <Text
//                 fontFamily="Syne"
//                 fontSize="32px"
//                 fontWeight="500"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="32px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 width="759px"
//                 height="28px"
//                 position="absolute"
//                 top="0px"
//                 left="44px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="A Fork in the Road"
//                 {...getOverrideProps(overrides, "A Fork in the Road")}
//             ></Text>
//             <Text
//                 fontFamily="Oxygen Mono"
//                 fontSize="12px"
//                 fontWeight="400"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="14px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 letterSpacing="1.05px"
//                 width="284px"
//                 height="12px"
//                 position="absolute"
//                 top="0px"
//                 left="0px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="[03]"
//                 {...getOverrideProps(overrides, "[03]5176")}
//             ></Text>
//           </View>
//           <View
//               padding="0px 0px 0px 0px"
//               width="803px"
//               height="28px"
//               position="absolute"
//               top="3617px"
//               left="968px"
//               {...getOverrideProps(overrides, "Group 298")}
//           >
//             <Text
//                 fontFamily="Syne"
//                 fontSize="32px"
//                 fontWeight="500"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="32px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 width="759px"
//                 height="28px"
//                 position="absolute"
//                 top="0px"
//                 left="44px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="General Lee"
//                 {...getOverrideProps(overrides, "General Lee")}
//             ></Text>
//             <Text
//                 fontFamily="Oxygen Mono"
//                 fontSize="12px"
//                 fontWeight="400"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="14px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 letterSpacing="1.05px"
//                 width="284px"
//                 height="12px"
//                 position="absolute"
//                 top="0px"
//                 left="0px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="[04]"
//                 {...getOverrideProps(overrides, "[04]")}
//             ></Text>
//           </View>
//           <View
//               padding="0px 0px 0px 0px"
//               width="900px"
//               height="28px"
//               position="absolute"
//               top="3687px"
//               left="968px"
//               {...getOverrideProps(overrides, "Group 299")}
//           >
//             <Text
//                 fontFamily="Syne"
//                 fontSize="32px"
//                 fontWeight="500"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="32px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 width="853px"
//                 height="28px"
//                 position="absolute"
//                 top="0px"
//                 left="47px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="Zana/Konica Minolta/Lahana"
//                 {...getOverrideProps(overrides, "Zana/Konica Minolta/Lahana")}
//             ></Text>
//             <Text
//                 fontFamily="Oxygen Mono"
//                 fontSize="12px"
//                 fontWeight="400"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="14px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 letterSpacing="1.05px"
//                 width="303.81px"
//                 height="12px"
//                 position="absolute"
//                 top="0px"
//                 left="0px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="[05]"
//                 {...getOverrideProps(overrides, "[05]")}
//             ></Text>
//           </View>
//           <View
//               padding="0px 0px 0px 0px"
//               width="900px"
//               height="28px"
//               position="absolute"
//               top="3757px"
//               left="968px"
//               {...getOverrideProps(overrides, "Group 300")}
//           >
//             <Text
//                 fontFamily="Syne"
//                 fontSize="32px"
//                 fontWeight="500"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="32px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 width="853px"
//                 height="28px"
//                 position="absolute"
//                 top="0px"
//                 left="47px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="Wired"
//                 {...getOverrideProps(overrides, "Wired")}
//             ></Text>
//             <Text
//                 fontFamily="Oxygen Mono"
//                 fontSize="12px"
//                 fontWeight="400"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="14px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 letterSpacing="1.05px"
//                 width="303.81px"
//                 height="12px"
//                 position="absolute"
//                 top="0px"
//                 left="0px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="[06]"
//                 {...getOverrideProps(overrides, "[06]")}
//             ></Text>
//           </View>
//           <View
//               padding="0px 0px 0px 0px"
//               width="900px"
//               height="25px"
//               position="absolute"
//               top="3827px"
//               left="968px"
//               {...getOverrideProps(overrides, "Group 301")}
//           >
//             <Text
//                 fontFamily="Syne"
//                 fontSize="32px"
//                 fontWeight="500"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="32px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 width="853px"
//                 height="25px"
//                 position="absolute"
//                 top="0px"
//                 left="47px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="Jazz Player"
//                 {...getOverrideProps(overrides, "Jazz Player")}
//             ></Text>
//             <Text
//                 fontFamily="Oxygen Mono"
//                 fontSize="12px"
//                 fontWeight="400"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="14px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 letterSpacing="1.05px"
//                 width="303.81px"
//                 height="24.86px"
//                 position="absolute"
//                 top="0px"
//                 left="0px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="[07]"
//                 {...getOverrideProps(overrides, "[07]")}
//             ></Text>
//           </View>
//           <View
//               padding="0px 0px 0px 0px"
//               width="749px"
//               height="25px"
//               position="absolute"
//               top="3897px"
//               left="968px"
//               {...getOverrideProps(overrides, "Group 302")}
//           >
//             <Text
//                 fontFamily="Syne"
//                 fontSize="32px"
//                 fontWeight="500"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="32px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 width="702px"
//                 height="25px"
//                 position="absolute"
//                 top="0px"
//                 left="47px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="Braveheart /Valkyrie"
//                 {...getOverrideProps(overrides, "Braveheart /Valkyrie")}
//             ></Text>
//             <Text
//                 fontFamily="Oxygen Mono"
//                 fontSize="12px"
//                 fontWeight="400"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="14px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 letterSpacing="1.05px"
//                 width="303.81px"
//                 height="24.86px"
//                 position="absolute"
//                 top="0px"
//                 left="0px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="[08]"
//                 {...getOverrideProps(overrides, "[08]")}
//             ></Text>
//           </View>
//           <View
//               padding="0px 0px 0px 0px"
//               width="900px"
//               height="28px"
//               position="absolute"
//               top="3967px"
//               left="968px"
//               {...getOverrideProps(overrides, "Group 303")}
//           >
//             <Text
//                 fontFamily="Syne"
//                 fontSize="32px"
//                 fontWeight="500"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="32px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 width="853px"
//                 height="28px"
//                 position="absolute"
//                 top="0px"
//                 left="47px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="NZL-403"
//                 {...getOverrideProps(overrides, "NZL-403")}
//             ></Text>
//             <Text
//                 fontFamily="Oxygen Mono"
//                 fontSize="12px"
//                 fontWeight="400"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="14px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 letterSpacing="1.05px"
//                 width="303.81px"
//                 height="12px"
//                 position="absolute"
//                 top="0px"
//                 left="0px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="[09]"
//                 {...getOverrideProps(overrides, "[09]")}
//             ></Text>
//           </View>
//           <View
//               padding="0px 0px 0px 0px"
//               width="900px"
//               height="28px"
//               position="absolute"
//               top="4037px"
//               left="968px"
//               {...getOverrideProps(overrides, "Group 304")}
//           >
//             <Text
//                 fontFamily="Syne"
//                 fontSize="32px"
//                 fontWeight="500"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="32px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 width="853px"
//                 height="28px"
//                 position="absolute"
//                 top="0px"
//                 left="47px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="Time to Burn"
//                 {...getOverrideProps(overrides, "Time to Burn")}
//             ></Text>
//             <Text
//                 fontFamily="Oxygen Mono"
//                 fontSize="12px"
//                 fontWeight="400"
//                 color="rgba(14,18,25,1)"
//                 textTransform="uppercase"
//                 lineHeight="14px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 letterSpacing="1.05px"
//                 width="303.81px"
//                 height="12px"
//                 position="absolute"
//                 top="0px"
//                 left="0px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="[10]"
//                 {...getOverrideProps(overrides, "[10]")}
//             ></Text>
//           </View>
//           <View
//               padding="0px 0px 0px 0px"
//               width="1049px"
//               height="54px"
//               position="absolute"
//               top="2653px"
//               left="60px"
//               {...getOverrideProps(overrides, "Group 292")}
//           >
//             <Text
//                 fontFamily="Syne"
//                 fontSize="64px"
//                 fontWeight="500"
//                 color="rgba(247,247,247,1)"
//                 textTransform="uppercase"
//                 lineHeight="64px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 width="1007px"
//                 height="54px"
//                 position="absolute"
//                 top="0px"
//                 left="42px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="case study"
//                 {...getOverrideProps(overrides, "case study5199")}
//             ></Text>
//             <Text
//                 fontFamily="Oxygen Mono"
//                 fontSize="12px"
//                 fontWeight="400"
//                 color="rgba(247,247,247,1)"
//                 textTransform="uppercase"
//                 lineHeight="14px"
//                 textAlign="left"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 letterSpacing="1.05px"
//                 width="284px"
//                 height="12px"
//                 position="absolute"
//                 top="12px"
//                 left="0px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="[03]"
//                 {...getOverrideProps(overrides, "[03]5200")}
//             ></Text>
//           </View>
//           <Text
//               fontFamily="Syne"
//               fontSize="84px"
//               fontWeight="500"
//               color="rgba(247,247,247,1)"
//               textTransform="uppercase"
//               lineHeight="76px"
//               textAlign="left"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               width="616px"
//               height="144px"
//               position="absolute"
//               top="2249px"
//               left="60px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="Selected Works"
//               {...getOverrideProps(overrides, "Selected Works")}
//           ></Text>
//           <View
//               padding="0px 0px 0px 0px"
//               width="320px"
//               height="106px"
//               position="absolute"
//               top="3055px"
//               left="60px"
//               {...getOverrideProps(overrides, "Group 291")}
//           >
//             <View
//                 padding="0px 0px 0px 0px"
//                 width="61px"
//                 height="16px"
//                 position="absolute"
//                 top="65px"
//                 left="130px"
//                 {...getOverrideProps(overrides, "Group 2035203")}
//             >
//               <Icon
//                   width="60px"
//                   height="0px"
//                   viewBox={{ minX: 0, minY: 0, width: 60, height: 1 }}
//                   paths={[
//                     {
//                       d: "M1 -2C0.447715 -2 0 -1.55228 0 -1C0 -0.447715 0.447715 0 1 0L1 -2ZM59 0C59.5523 0 60 -0.447715 60 -1C60 -1.55228 59.5523 -2 59 -2L59 0ZM1 0L59 0L59 -2L1 -2L1 0Z",
//                       stroke: "rgba(247,247,247,1)",
//                       fillRule: "nonzero",
//                       strokeWidth: 2,
//                     },
//                   ]}
//                   position="absolute"
//                   top="9px"
//                   left="0px"
//                   {...getOverrideProps(overrides, "Line 95204")}
//               ></Icon>
//               <Icon
//                   width="8px"
//                   height="16px"
//                   viewBox={{ minX: 0, minY: 0, width: 8, height: 16 }}
//                   paths={[
//                     {
//                       d: "M0.707107 -0.707107C0.316583 -1.09763 -0.316583 -1.09763 -0.707107 -0.707107C-1.09763 -0.316583 -1.09763 0.316583 -0.707107 0.707107L0.707107 -0.707107ZM8 8L8.70711 8.70711L9.41421 8L8.70711 7.29289L8 8ZM-0.707107 15.2929C-1.09763 15.6834 -1.09763 16.3166 -0.707107 16.7071C-0.316583 17.0976 0.316583 17.0976 0.707107 16.7071L-0.707107 15.2929ZM-0.707107 0.707107L7.29289 8.70711L8.70711 7.29289L0.707107 -0.707107L-0.707107 0.707107ZM7.29289 7.29289L-0.707107 15.2929L0.707107 16.7071L8.70711 8.70711L7.29289 7.29289Z",
//                       stroke: "rgba(247,247,247,1)",
//                       fillRule: "nonzero",
//                       strokeWidth: 2,
//                     },
//                   ]}
//                   position="absolute"
//                   top="0px"
//                   left="53px"
//                   {...getOverrideProps(overrides, "Vector 15205")}
//               ></Icon>
//             </View>
//             <Icon
//                 width="320px"
//                 height="106px"
//                 viewBox={{ minX: 0, minY: 0, width: 320, height: 106 }}
//                 paths={[
//                   {
//                     d: "M318 53C318 59.4369 314.063 65.892 306.193 72.0554C298.347 78.2001 286.87 83.8209 272.508 88.5781C243.807 98.0855 204.029 104 160 104L160 108C204.337 108 244.559 102.05 273.766 92.3752C288.359 87.5413 300.313 81.7416 308.66 75.2046C316.983 68.6864 322 61.1987 322 53L318 53ZM160 104C115.971 104 76.1935 98.0855 47.4918 88.5781C33.1304 83.8209 21.6527 78.2001 13.8068 72.0554C5.93681 65.892 2 59.4369 2 53L-2 53C-2 61.1987 3.01749 68.6864 11.3404 75.2046C19.6874 81.7416 31.6412 87.5413 46.234 92.3752C75.4409 102.05 115.663 108 160 108L160 104ZM2 53C2 46.5631 5.93681 40.108 13.8068 33.9446C21.6527 27.7999 33.1304 22.1791 47.4918 17.4219C76.1935 7.91446 115.971 2 160 2L160 -2C115.663 -2 75.4409 3.95 46.234 13.6248C31.6412 18.4587 19.6874 24.2584 11.3404 30.7954C3.01749 37.3136 -2 44.8013 -2 53L2 53ZM160 2C204.029 2 243.807 7.91446 272.508 17.4219C286.87 22.1791 298.347 27.7999 306.193 33.9446C314.063 40.108 318 46.5631 318 53L322 53C322 44.8013 316.983 37.3136 308.66 30.7954C300.313 24.2584 288.359 18.4587 273.766 13.6248C244.559 3.95 204.337 -2 160 -2L160 2Z",
//                     stroke: "rgba(247,247,247,1)",
//                     fillRule: "nonzero",
//                     strokeWidth: 2,
//                   },
//                 ]}
//                 position="absolute"
//                 top="0px"
//                 left="0px"
//                 {...getOverrideProps(overrides, "Ellipse 25206")}
//             ></Icon>
//             <Text
//                 fontFamily="Syne"
//                 fontSize="16px"
//                 fontWeight="700"
//                 color="rgba(247,247,247,1)"
//                 textTransform="uppercase"
//                 lineHeight="16px"
//                 textAlign="center"
//                 display="flex"
//                 dir="column"
//                 justify-content="flex-start"
//                 letterSpacing="3.05px"
//                 width="214px"
//                 height="13px"
//                 position="absolute"
//                 top="39px"
//                 left="53px"
//                 padding="0px 0px 0px 0px"
//                 whiteSpace="pre-wrap"
//                 children="See all designs"
//                 {...getOverrideProps(overrides, "See all designs")}
//             ></Text>
//           </View>
//           <Icon
//               width="892px"
//               height="1px"
//               viewBox={{ minX: 0, minY: 0, width: 892, height: 1 }}
//               paths={[
//                 {
//                   d: "M0 0L892 0L892 -2L0 -2L0 0Z",
//                   stroke: "rgba(14,18,25,1)",
//                   fillRule: "nonzero",
//                   strokeWidth: 2,
//                 },
//               ]}
//               position="absolute"
//               top="72.87%"
//               bottom="27.13%"
//               left="50.42%"
//               right="3.13%"
//               {...getOverrideProps(overrides, "Line 27")}
//           ></Icon>
//           <Icon
//               width="892px"
//               height="1px"
//               viewBox={{ minX: 0, minY: 0, width: 892, height: 1 }}
//               paths={[
//                 {
//                   d: "M0 0L892 0L892 -2L0 -2L0 0Z",
//                   stroke: "rgba(14,18,25,1)",
//                   fillRule: "nonzero",
//                   strokeWidth: 2,
//                 },
//               ]}
//               position="absolute"
//               top="74.38%"
//               bottom="25.62%"
//               left="50.42%"
//               right="3.13%"
//               {...getOverrideProps(overrides, "Line 28")}
//           ></Icon>
//           <Icon
//               width="892px"
//               height="1px"
//               viewBox={{ minX: 0, minY: 0, width: 892, height: 1 }}
//               paths={[
//                 {
//                   d: "M0 0L892 0L892 -2L0 -2L0 0Z",
//                   stroke: "rgba(14,18,25,1)",
//                   fillRule: "nonzero",
//                   strokeWidth: 2,
//                 },
//               ]}
//               position="absolute"
//               top="75.88%"
//               bottom="24.12%"
//               left="50.42%"
//               right="3.13%"
//               {...getOverrideProps(overrides, "Line 29")}
//           ></Icon>
//           <Icon
//               width="892px"
//               height="1px"
//               viewBox={{ minX: 0, minY: 0, width: 892, height: 1 }}
//               paths={[
//                 {
//                   d: "M0 0L892 0L892 -2L0 -2L0 0Z",
//                   stroke: "rgba(14,18,25,1)",
//                   fillRule: "nonzero",
//                   strokeWidth: 2,
//                 },
//               ]}
//               position="absolute"
//               top="77.39%"
//               bottom="22.61%"
//               left="50.42%"
//               right="3.13%"
//               {...getOverrideProps(overrides, "Line 30")}
//           ></Icon>
//           <Icon
//               width="892px"
//               height="1px"
//               viewBox={{ minX: 0, minY: 0, width: 892, height: 1 }}
//               paths={[
//                 {
//                   d: "M0 0L892 0L892 -2L0 -2L0 0Z",
//                   stroke: "rgba(14,18,25,1)",
//                   fillRule: "nonzero",
//                   strokeWidth: 2,
//                 },
//               ]}
//               position="absolute"
//               top="78.89%"
//               bottom="21.11%"
//               left="50.42%"
//               right="3.13%"
//               {...getOverrideProps(overrides, "Line 31")}
//           ></Icon>
//           <Icon
//               width="892px"
//               height="1px"
//               viewBox={{ minX: 0, minY: 0, width: 892, height: 1 }}
//               paths={[
//                 {
//                   d: "M0 0L892 0L892 -2L0 -2L0 0Z",
//                   stroke: "rgba(14,18,25,1)",
//                   fillRule: "nonzero",
//                   strokeWidth: 2,
//                 },
//               ]}
//               position="absolute"
//               top="80.4%"
//               bottom="19.6%"
//               left="50.42%"
//               right="3.13%"
//               {...getOverrideProps(overrides, "Line 32")}
//           ></Icon>
//           <Icon
//               width="892px"
//               height="1px"
//               viewBox={{ minX: 0, minY: 0, width: 892, height: 1 }}
//               paths={[
//                 {
//                   d: "M0 0L892 0L892 -2L0 -2L0 0Z",
//                   stroke: "rgba(14,18,25,1)",
//                   fillRule: "nonzero",
//                   strokeWidth: 2,
//                 },
//               ]}
//               position="absolute"
//               top="81.91%"
//               bottom="18.09%"
//               left="50.42%"
//               right="3.13%"
//               {...getOverrideProps(overrides, "Line 33")}
//           ></Icon>
//           <Icon
//               width="892px"
//               height="1px"
//               viewBox={{ minX: 0, minY: 0, width: 892, height: 1 }}
//               paths={[
//                 {
//                   d: "M0 0L892 0L892 -2L0 -2L0 0Z",
//                   stroke: "rgba(14,18,25,1)",
//                   fillRule: "nonzero",
//                   strokeWidth: 2,
//                 },
//               ]}
//               position="absolute"
//               top="83.41%"
//               bottom="16.59%"
//               left="50.42%"
//               right="3.13%"
//               {...getOverrideProps(overrides, "Line 34")}
//           ></Icon>
//           <Icon
//               width="892px"
//               height="1px"
//               viewBox={{ minX: 0, minY: 0, width: 892, height: 1 }}
//               paths={[
//                 {
//                   d: "M0 0L892 0L892 -2L0 -2L0 0Z",
//                   stroke: "rgba(14,18,25,1)",
//                   fillRule: "nonzero",
//                   strokeWidth: 2,
//                 },
//               ]}
//               position="absolute"
//               top="84.92%"
//               bottom="15.08%"
//               left="50.42%"
//               right="3.13%"
//               {...getOverrideProps(overrides, "Line 35")}
//           ></Icon>
//           <Icon
//               width="892px"
//               height="1px"
//               viewBox={{ minX: 0, minY: 0, width: 892, height: 1 }}
//               paths={[
//                 {
//                   d: "M0 0L892 0L892 -2L0 -2L0 0Z",
//                   stroke: "rgba(14,18,25,1)",
//                   fillRule: "nonzero",
//                   strokeWidth: 2,
//                 },
//               ]}
//               position="absolute"
//               top="86.42%"
//               bottom="13.58%"
//               left="50.42%"
//               right="3.13%"
//               {...getOverrideProps(overrides, "Line 36")}
//           ></Icon>
//           <Icon
//               width="892px"
//               height="1px"
//               viewBox={{ minX: 0, minY: 0, width: 892, height: 1 }}
//               paths={[
//                 {
//                   d: "M0 0L892 0L892 -2L0 -2L0 0Z",
//                   stroke: "rgba(14,18,25,1)",
//                   fillRule: "nonzero",
//                   strokeWidth: 2,
//                 },
//               ]}
//               position="absolute"
//               top="87.93%"
//               bottom="12.07%"
//               left="50.42%"
//               right="3.13%"
//               {...getOverrideProps(overrides, "Line 37")}
//           ></Icon>
//           <Icon
//               width="892px"
//               height="1px"
//               viewBox={{ minX: 0, minY: 0, width: 892, height: 1 }}
//               paths={[
//                 {
//                   d: "M0 0L892 0L892 -2L0 -2L0 0Z",
//                   stroke: "rgba(14,18,25,1)",
//                   fillRule: "nonzero",
//                   strokeWidth: 2,
//                 },
//               ]}
//               position="absolute"
//               top="89.44%"
//               bottom="10.56%"
//               left="50.42%"
//               right="3.13%"
//               {...getOverrideProps(overrides, "Line 38")}
//           ></Icon>
//           <View
//               width="1920px"
//               height="120px"
//               position="absolute"
//               top="119px"
//               left="1920px"
//               transformOrigin="top left"
//               transform="rotate(-180deg)"
//               padding="0px 0px 0px 0px"
//               backgroundImage="linear-gradient(-90deg, rgba(14,18,25,0), rgba(14,18,25,1))"
//               {...getOverrideProps(overrides, "Rectangle 56")}
//           ></View>
//           <View
//               width="329px"
//               height="18px"
//               position="absolute"
//               top="50px"
//               left="795px"
//               overflow="hidden"
//               padding="0px 0px 0px 0px"
//               {...getOverrideProps(overrides, "Logo5235")}
//           >
//             <View
//                 padding="0px 0px 0px 0px"
//                 width="329.02px"
//                 height="17.95px"
//                 position="absolute"
//                 top="0.05px"
//                 left="0.02px"
//                 {...getOverrideProps(overrides, "Group 75236")}
//             >
//               <Icon
//                   width="23.37158203125px"
//                   height="17.876220703125px"
//                   viewBox={{
//                     minX: 0,
//                     minY: 0,
//                     width: 23.37158203125,
//                     height: 17.876220703125,
//                   }}
//                   paths={[
//                     {
//                       d: "M1.21098 17.8285L0.708817 17.6474C0.52966 17.5724 0.372633 17.4509 0.253154 17.2949L0.0020684 16.8279L0.0020684 7.68978C0.169456 7.08946 0.485632 6.7369 0.931998 6.7369L16.5827 6.7369C17.1179 6.66931 17.6254 6.45537 18.052 6.11752C18.3099 5.86084 18.4824 5.52743 18.5449 5.16464C18.596 4.84917 18.596 4.52722 18.5449 4.21175C18.4467 3.78235 18.2233 3.39375 17.9043 3.09759C17.5854 2.80142 17.1861 2.61174 16.7594 2.55373L1.08079 2.55373L0.336844 2.15352C0.204129 1.98689 0.103182 1.79618 0.0392665 1.59132C-0.0130888 1.38189 -0.0130888 1.16232 0.0392665 0.952885C0.0986508 0.724211 0.215921 0.515663 0.379214 0.348339C0.542507 0.181015 0.746031 0.0608502 0.969197 0L17.2337 0C17.7781 0.131297 18.3078 0.319691 18.8146 0.562202C19.3279 0.812998 19.7939 1.15496 20.1909 1.57226C20.6138 2.07872 20.9304 2.66909 21.1208 3.30651C21.3146 3.94444 21.3592 4.62013 21.251 5.27898C21.0955 6.06242 20.7501 6.79317 20.2467 7.40392C20.8281 7.6772 21.367 8.03681 21.8461 8.47115C22.3124 8.89542 22.6917 9.41043 22.962 9.98623C23.099 10.3763 23.2017 10.7781 23.2689 11.1869C23.3414 11.6019 23.3757 12.023 23.3712 12.4447C23.3452 13.1807 23.1643 13.9023 22.8412 14.5601C22.4964 15.254 22.0076 15.8622 21.4091 16.342C20.7782 16.8208 20.0699 17.1821 19.3167 17.4092C18.5631 17.6351 17.7913 17.7914 17.0105 17.8761L1.21098 17.8285ZM19.2981 14.522C19.5781 14.3716 19.8274 14.1678 20.0328 13.9217C20.2429 13.6894 20.4072 13.4176 20.5163 13.1212L20.6465 11.5394C20.6026 11.2662 20.501 11.0061 20.3489 10.7771C20.1833 10.5377 19.9862 10.3228 19.7631 10.1387C19.4012 9.87298 18.999 9.67016 18.5728 9.53838C18.1343 9.40196 17.6818 9.31881 17.2244 9.29063L2.66167 9.29063L2.66167 15.1699L17.3081 15.1699C17.6568 15.1421 18.0006 15.0684 18.331 14.9508C18.6472 14.8269 18.9726 14.684 19.2981 14.522Z",
//                       fill: "rgba(247,247,247,1)",
//                       fillRule: "nonzero",
//                     },
//                   ]}
//                   position="absolute"
//                   top="0%"
//                   bottom="0.42%"
//                   left="0%"
//                   right="92.9%"
//                   {...getOverrideProps(overrides, "Vector5237")}
//               ></Icon>
//               <Icon
//                   width="23.39404296875px"
//                   height="17.862060546875px"
//                   viewBox={{
//                     minX: 0,
//                     minY: 0,
//                     width: 23.39404296875,
//                     height: 17.862060546875,
//                   }}
//                   paths={[
//                     {
//                       d: "M22.0393 17.8621C21.8598 17.8221 21.6829 17.7711 21.5093 17.7096C21.3334 17.645 21.172 17.5445 21.035 17.4142L17.8825 12.707L5.48658 12.707L2.25041 17.4714C1.42277 17.9383 0.77182 17.8812 0.288256 17.2999C0.158346 17.1478 0.0686961 16.9641 0.0278766 16.7663C-0.00929221 16.568 -0.00929221 16.3643 0.0278766 16.166L3.54301 10.7631C3.62992 10.5119 3.80775 10.3045 4.03969 10.1839C4.27164 10.0633 4.53996 10.0387 4.78913 10.1151L16.0971 10.1151L10.5175 2.08233C10.3508 1.79229 10.2957 1.44903 10.3627 1.11955C10.4298 0.790069 10.6143 0.498025 10.8802 0.300432C11.1384 0.0822398 11.4696 -0.0239365 11.8032 0.00454535C12.1367 0.0330272 12.4462 0.193913 12.6656 0.452893L23.2017 15.6991C23.3276 15.9186 23.394 16.1686 23.394 16.4232C23.394 16.6779 23.3276 16.9279 23.2017 17.1474C23.0101 17.3877 22.7728 17.5854 22.5043 17.7287C22.402 17.7859 22.2346 17.824 22.0393 17.8621Z",
//                       fill: "rgba(247,247,247,1)",
//                       fillRule: "nonzero",
//                     },
//                   ]}
//                   position="absolute"
//                   top="0.5%"
//                   bottom="0%"
//                   left="7.11%"
//                   right="85.78%"
//                   {...getOverrideProps(overrides, "Vector5238")}
//               ></Icon>
//               <Icon
//                   width="23.3935546875px"
//                   height="17.676025390625px"
//                   viewBox={{
//                     minX: 0,
//                     minY: 0,
//                     width: 23.3935546875,
//                     height: 17.676025390625,
//                   }}
//                   paths={[
//                     {
//                       d: "M1.19031 17.676C0.830417 17.6109 0.50265 17.4228 0.260379 17.1424L0 16.6755L0 0.971943C0.126684 0.692836 0.327096 0.45565 0.578553 0.287242C0.830009 0.118835 1.12246 0.0259332 1.42279 0.0190581C1.62583 0.0341426 1.82349 0.0928426 2.00293 0.191345C2.18237 0.289847 2.33957 0.425944 2.46431 0.590788L2.66889 0.991001L2.66889 16.6755C2.51193 17.0378 2.24863 17.3409 1.91565 17.5426L1.19031 17.676ZM21.8626 17.676L5.43079 9.18581C5.29733 9.06844 5.19258 8.92064 5.12494 8.75429C5.05731 8.58793 5.02867 8.40765 5.04133 8.2279C5.05398 8.04815 5.10759 7.87395 5.19784 7.71927C5.28808 7.56459 5.41246 7.43374 5.56098 7.33721L22.1416 0C22.4804 0.0172848 22.7988 0.171333 23.0271 0.428465C23.2554 0.685596 23.375 1.02489 23.3598 1.37215C23.3838 1.56037 23.3523 1.75163 23.2694 1.9214C23.1866 2.09117 23.0562 2.23172 22.8949 2.32504L9.55037 8.43303L23.2296 15.7607C23.3802 16.0235 23.4294 16.3345 23.3675 16.6325C23.3055 16.9306 23.1369 17.194 22.8949 17.3711C22.5862 17.5715 22.2281 17.6773 21.8626 17.676L21.8626 17.676Z",
//                       fill: "rgba(247,247,247,1)",
//                       fillRule: "nonzero",
//                     },
//                   ]}
//                   position="absolute"
//                   top="0.85%"
//                   bottom="0.69%"
//                   left="14.62%"
//                   right="78.27%"
//                   {...getOverrideProps(overrides, "Vector5239")}
//               ></Icon>
//               <Icon
//                   width="23.4638671875px"
//                   height="17.656982421875px"
//                   viewBox={{
//                     minX: 0,
//                     minY: 0,
//                     width: 23.4638671875,
//                     height: 17.656982421875,
//                   }}
//                   paths={[
//                     {
//                       d: "M1.21821 2.6109L0.418466 2.22975C0.276548 2.05378 0.17253 1.84905 0.113233 1.629C0.0539366 1.40895 0.040706 1.17854 0.0743961 0.952885C0.184781 0.703263 0.353831 0.48557 0.566421 0.319281C0.779011 0.152993 1.02851 0.0432949 1.2926 0L22.2439 0C22.4121 0.00732077 22.5772 0.0487192 22.7297 0.121804C22.8821 0.194889 23.019 0.298212 23.1322 0.4258C23.2455 0.553389 23.333 0.702714 23.3896 0.865148C23.4462 1.02758 23.4709 1.1999 23.4621 1.37215C23.4349 1.54659 23.3849 1.71647 23.3133 1.87718C23.2341 2.0385 23.127 2.18378 22.9972 2.30598L22.2997 2.62996L1.21821 2.6109ZM1.21821 17.657C1.05082 17.5998 0.874138 17.5426 0.71605 17.4759C0.536893 17.4009 0.379859 17.2794 0.260379 17.1233L0 16.6564L0 7.99471C0.0831874 7.72199 0.243233 7.48058 0.459999 7.30086C0.676764 7.12113 0.940564 7.01111 1.21821 6.98465L20.2539 6.98465L21.0071 7.39439C21.1409 7.56183 21.2448 7.75215 21.314 7.95659C21.3808 8.18016 21.3808 8.4191 21.314 8.64267L20.9792 9.24299C20.8437 9.32658 20.704 9.40291 20.5608 9.47168C20.4118 9.54479 20.256 9.60226 20.0958 9.6432L2.69679 9.6432L2.69679 14.9984L22.2253 14.9984C22.3916 15.0116 22.5537 15.0584 22.7022 15.1361C22.8508 15.2138 22.9829 15.3208 23.091 15.451C23.199 15.5811 23.2808 15.7319 23.3318 15.8947C23.3827 16.0574 23.4017 16.2289 23.3877 16.3992C23.3427 16.7277 23.1904 17.0308 22.9557 17.2593C22.721 17.4877 22.4176 17.6279 22.0951 17.657L1.21821 17.657Z",
//                       fill: "rgba(247,247,247,1)",
//                       fillRule: "nonzero",
//                     },
//                   ]}
//                   position="absolute"
//                   top="0.96%"
//                   bottom="0.69%"
//                   left="22.13%"
//                   right="70.74%"
//                   {...getOverrideProps(overrides, "Vector5240")}
//               ></Icon>
//               <Icon
//                   width="28.6121826171875px"
//                   height="17.71484375px"
//                   viewBox={{
//                     minX: 0,
//                     minY: 0,
//                     width: 28.6121826171875,
//                     height: 17.71484375,
//                   }}
//                   paths={[
//                     {
//                       d: "M7.97408 17.708C7.61419 17.6429 7.28642 17.4548 7.04415 17.1744L0.023172 1.68049C-0.0241532 1.41868 0.00133047 1.1485 0.0967026 0.900816C0.192075 0.65313 0.353493 0.437916 0.562533 0.279749C0.886785 0.0983979 1.25373 0.0126446 1.62265 0.0320004C1.79533 0.0638009 1.96003 0.130787 2.10699 0.228994C2.25394 0.3272 2.38017 0.454628 2.47819 0.60373L8.05777 12.9436L13.4328 0.632319C13.5487 0.40043 13.7374 0.215189 13.9684 0.106325C14.1995 -0.00253953 14.4595 -0.028715 14.7068 0.0320004C15.0717 0.0753142 15.4056 0.263463 15.6367 0.556086L21.2163 12.8007L26.0612 0.679963C26.183 0.475285 26.3557 0.307433 26.5615 0.193582C26.7674 0.0797314 26.9991 0.0239693 27.2329 0.0320004C27.434 0.0301526 27.6329 0.073758 27.8156 0.159711C27.9983 0.245665 28.1602 0.37185 28.2899 0.529275C28.4195 0.686699 28.5137 0.871488 28.5657 1.07047C28.6177 1.26946 28.6262 1.47775 28.5906 1.68049L22.388 17.2316C22.2448 17.3814 22.072 17.4981 21.8811 17.5737C21.6902 17.6493 21.4857 17.6821 21.2814 17.6699C21.0844 17.6621 20.8909 17.6143 20.7121 17.5293C20.5333 17.4442 20.3728 17.3236 20.2399 17.1744L14.6603 4.78689L9.27598 17.1744C9.11596 17.3629 8.9144 17.5097 8.68799 17.6025C8.46158 17.6953 8.21685 17.7315 7.97408 17.708L7.97408 17.708Z",
//                       fill: "rgba(247,247,247,1)",
//                       fillRule: "nonzero",
//                     },
//                   ]}
//                   position="absolute"
//                   top="0.67%"
//                   bottom="0.65%"
//                   left="29.28%"
//                   right="62.03%"
//                   {...getOverrideProps(overrides, "Vector5241")}
//               ></Icon>
//               <Icon
//                   width="23.4285888671875px"
//                   height="17.656982421875px"
//                   viewBox={{
//                     minX: 0,
//                     minY: 0,
//                     width: 23.4285888671875,
//                     height: 17.656982421875,
//                   }}
//                   paths={[
//                     {
//                       d: "M1.13689 2.6109L0.337138 2.22975C0.202418 2.06095 0.101324 1.8667 0.0395678 1.65802C-0.0131893 1.42608 -0.0131893 1.18482 0.0395678 0.952885C0.147838 0.701754 0.316265 0.482724 0.529237 0.316137C0.74221 0.14955 0.992805 0.0408069 1.25776 0L22.2091 0C22.5479 0.0172848 22.8663 0.171333 23.0946 0.428465C23.3228 0.685596 23.4425 1.02489 23.4273 1.37215C23.3929 1.54592 23.3398 1.71528 23.2692 1.87718C23.1903 2.03619 23.0866 2.18101 22.9624 2.30598L22.2556 2.62996L1.13689 2.6109ZM1.22058 17.657L0.709105 17.4759C0.532898 17.4002 0.379053 17.2787 0.262756 17.1233L0.00236265 16.6564L0.00236265 7.99471C0.0766066 7.73236 0.223145 7.49752 0.424376 7.31837C0.625608 7.13921 0.873004 7.02334 1.13689 6.98465L20.1819 6.98465L20.9258 7.39439C21.059 7.56384 21.1657 7.75351 21.242 7.95659C21.3036 8.18093 21.3036 8.41833 21.242 8.64267L20.9072 9.24299C20.7748 9.32651 20.6382 9.40285 20.498 9.47168C20.3479 9.54176 20.1924 9.59913 20.0331 9.6432L2.64338 9.6432L2.64338 14.9984L22.1719 14.9984C22.5076 15.0276 22.8185 15.1908 23.0377 15.4529C23.2569 15.715 23.3668 16.0548 23.3436 16.3992C23.297 16.727 23.1443 17.0292 22.9098 17.2574C22.6754 17.4855 22.3729 17.6262 22.051 17.657L1.22058 17.657Z",
//                       fill: "rgba(247,247,247,1)",
//                       fillRule: "nonzero",
//                     },
//                   ]}
//                   position="absolute"
//                   top="0.96%"
//                   bottom="0.69%"
//                   left="38.31%"
//                   right="54.57%"
//                   {...getOverrideProps(overrides, "Vector5242")}
//               ></Icon>
//               <Icon
//                   width="23.3505859375px"
//                   height="17.657958984375px"
//                   viewBox={{
//                     minX: 0,
//                     minY: 0,
//                     width: 23.3505859375,
//                     height: 17.657958984375,
//                   }}
//                   paths={[
//                     {
//                       d: "M1.19031 17.658C0.829657 17.5951 0.501222 17.4066 0.260379 17.1244L0 16.6575L0 0.953966C0.11156 0.663645 0.308413 0.416012 0.563299 0.245308C0.818186 0.0746029 1.11851 -0.0107396 1.42279 0.00108126C1.62435 0.016882 1.82043 0.075949 1.99827 0.174447C2.1761 0.272946 2.33172 0.408671 2.45503 0.572811L2.65962 0.973025L2.65962 14.9995L22.1882 14.9995C22.5057 15.0686 22.792 15.2435 23.0023 15.4969C23.2126 15.7503 23.3351 16.068 23.3506 16.4002C23.2959 16.718 23.1454 17.0103 22.9202 17.2359C22.695 17.4615 22.4065 17.6092 22.0952 17.658L1.19031 17.658Z",
//                       fill: "rgba(247,247,247,1)",
//                       fillRule: "nonzero",
//                     },
//                   ]}
//                   position="absolute"
//                   top="0.95%"
//                   bottom="0.69%"
//                   left="45.75%"
//                   right="47.16%"
//                   {...getOverrideProps(overrides, "Vector5243")}
//               ></Icon>
//               <Icon
//                   width="23.35986328125px"
//                   height="17.65771484375px"
//                   viewBox={{
//                     minX: 0,
//                     minY: 0,
//                     width: 23.35986328125,
//                     height: 17.65771484375,
//                   }}
//                   paths={[
//                     {
//                       d: "M1.19031 17.6578C0.829657 17.5948 0.501222 17.4064 0.260379 17.1242L0 16.6573L0 0.953732C0.112702 0.664228 0.309788 0.417384 0.564406 0.246858C0.819025 0.0763333 1.11878 -0.00957404 1.42279 0.000847465C1.62477 0.0148473 1.82146 0.0731366 1.99954 0.171775C2.17763 0.270413 2.33297 0.407096 2.45503 0.572577L2.6689 0.972791L2.6689 14.9993L22.1974 14.9993C22.5157 15.0668 22.8029 15.2413 23.0135 15.495C23.224 15.7488 23.3459 16.0672 23.3599 16.4C23.303 16.7233 23.1471 17.0196 22.9146 17.2458C22.6821 17.472 22.3853 17.6164 22.0673 17.6578L1.19031 17.6578Z",
//                       fill: "rgba(247,247,247,1)",
//                       fillRule: "nonzero",
//                     },
//                   ]}
//                   position="absolute"
//                   top="0.95%"
//                   bottom="0.69%"
//                   left="53.17%"
//                   right="39.73%"
//               ></Icon>
//               <Icon
//                   width="23.4073486328125px"
//                   height="2.57275390625px"
//                   viewBox={{
//                     minX: 0,
//                     minY: 0,
//                     width: 23.4073486328125,
//                     height: 2.57275390625,
//                   }}
//                   paths={[
//                     {
//                       d: "M1.00434 2.52515C0.511477 2.22975 0.278994 2.12493 0.334789 2.21069C0.390585 2.29645 0.334776 2.21069 0.204586 1.95341C0.0935534 1.77145 0.0236507 1.56633 0 1.3531L0 0.952885C0.0625857 0.713125 0.190127 0.496408 0.367851 0.327787C0.545575 0.159166 0.76624 0.0455254 1.00434 0L22.3927 0C22.6922 0.0801273 22.9559 0.262693 23.1403 0.517445C23.3246 0.772197 23.4185 1.08384 23.4063 1.40074C23.3647 1.50523 23.3336 1.61378 23.3133 1.72472C23.2915 1.85482 23.2256 1.97288 23.1273 2.05823L22.8577 2.32504L22.3183 2.57279L1.00434 2.52515Z",
//                       fill: "rgba(247,247,247,1)",
//                       fillRule: "nonzero",
//                     },
//                   ]}
//                   position="absolute"
//                   top="43.1%"
//                   bottom="42.57%"
//                   left="60.27%"
//                   right="32.62%"
//               ></Icon>
//               <Icon
//                   width="28.5894775390625px"
//                   height="17.716552734375px"
//                   viewBox={{
//                     minX: 0,
//                     minY: 0,
//                     width: 28.5894775390625,
//                     height: 17.716552734375,
//                   }}
//                   paths={[
//                     {
//                       d: "M7.91719 17.7075C7.55654 17.6445 7.2281 17.456 6.98726 17.1739L0.0220712 1.67994C-0.0242497 1.41722 0.00266988 1.14644 0.0997166 0.898677C0.196763 0.650914 0.360001 0.436209 0.570726 0.279202C0.894447 0.0964213 1.26181 0.0105739 1.63086 0.0314537C1.97779 0.100657 2.2847 0.305763 2.48638 0.603183L8.01947 12.943L13.4038 0.631772C13.5181 0.400646 13.705 0.215712 13.9345 0.106799C14.1639 -0.00211317 14.4225 -0.0286553 14.6685 0.0314537C15.0325 0.0776635 15.3654 0.265253 15.5984 0.55554L21.178 12.8001L26.0415 0.679416C26.1641 0.473292 26.3382 0.304512 26.5459 0.190578C26.7535 0.0766445 26.9871 0.021705 27.2225 0.0314537C27.4259 0.0412438 27.6253 0.0926582 27.809 0.182668C27.9926 0.272678 28.1568 0.399461 28.2919 0.55554C28.5197 0.881271 28.6223 1.28157 28.5802 1.67994L22.3683 17.231C22.2269 17.3806 22.0557 17.4972 21.8663 17.5729C21.6769 17.6485 21.4739 17.6814 21.271 17.6694C21.0726 17.6618 20.8776 17.6141 20.6973 17.5291C20.517 17.444 20.3548 17.3233 20.2201 17.1739L14.6406 4.78635L9.25629 17.1739C9.09104 17.3661 8.88315 17.5149 8.65014 17.6078C8.41712 17.7006 8.16578 17.7348 7.91719 17.7075Z",
//                       fill: "rgba(247,247,247,1)",
//                       fillRule: "nonzero",
//                     },
//                   ]}
//                   position="absolute"
//                   top="0.67%"
//                   bottom="0.64%"
//                   left="67.42%"
//                   right="23.89%"
//               ></Icon>
//               <Icon
//                   width="23.3880615234375px"
//                   height="17.72119140625px"
//                   viewBox={{
//                     minX: 0,
//                     minY: 0,
//                     width: 23.3880615234375,
//                     height: 17.72119140625,
//                   }}
//                   paths={[
//                     {
//                       d: "M1.2089 17.7143L0.706728 17.5332C0.528983 17.4557 0.372531 17.3346 0.251071 17.1807L0 16.7138L0 1.01021C0.106763 0.716515 0.302477 0.465557 0.558503 0.294089C0.81453 0.12262 1.11742 0.0396506 1.42279 0.0573287C1.61747 0.0901287 1.80581 0.154459 1.98076 0.247906C2.16243 0.3407 2.32376 0.470377 2.455 0.629058L2.65959 1.02927L2.65959 7.87099L20.6538 7.87099L20.6538 1.12456C20.6945 0.804547 20.8464 0.510274 21.0815 0.29555C21.2479 0.187372 21.4299 0.106963 21.6209 0.0573287C21.8044 0.018524 21.9914 -0.00063785 22.1789 0.000154248C22.3391 -0.00245735 22.4982 0.0281181 22.6466 0.090047C22.7951 0.151976 22.9298 0.243982 23.0427 0.36055C23.1556 0.477118 23.2443 0.615846 23.3036 0.768416C23.3629 0.920986 23.3915 1.08426 23.3878 1.24844L23.3878 16.4565C23.3703 16.6399 23.3177 16.818 23.2329 16.9806C23.1482 17.1431 23.033 17.2869 22.8939 17.4038C22.7548 17.5206 22.5946 17.6082 22.4224 17.6615C22.2503 17.7148 22.0695 17.7327 21.8905 17.7143C21.7124 17.6607 21.5384 17.5939 21.3698 17.5142C21.2097 17.4243 21.0626 17.312 20.9327 17.1807L20.6538 16.5804L20.6538 10.4247L2.65959 10.4247L2.65959 16.7138C2.56086 16.8854 2.45217 17.0509 2.33411 17.2093C2.22069 17.3646 2.07446 17.4916 1.90635 17.5809L1.2089 17.7143Z",
//                       fill: "rgba(247,247,247,1)",
//                       fillRule: "nonzero",
//                     },
//                   ]}
//                   position="absolute"
//                   top="0.64%"
//                   bottom="0.65%"
//                   left="76.43%"
//                   right="16.47%"
//               ></Icon>
//               <Icon
//                   width="2.6595458984375px"
//                   height="17.677490234375px"
//                   viewBox={{
//                     minX: 0,
//                     minY: 0,
//                     width: 2.6595458984375,
//                     height: 17.677490234375,
//                   }}
//                   paths={[
//                     {
//                       d: "M1.21818 17.676C1.0446 17.6188 0.86791 17.5521 0.688127 17.4759C0.497371 17.3851 0.331325 17.2477 0.204582 17.0757L0 16.6755L0 0.971943L0.334755 0.40021C0.482813 0.258423 0.661126 0.154012 0.855504 0.095287C1.03862 0.0335934 1.23001 0.00144819 1.42277 0C1.60169 0.029244 1.77652 0.0804319 1.94351 0.152461C2.11653 0.238063 2.26656 0.365625 2.38057 0.524086L2.65954 1.04817L2.65954 16.6183C2.57008 16.9348 2.37926 17.2113 2.11779 17.4032C1.85632 17.5951 1.53944 17.6912 1.21818 17.676Z",
//                       fill: "rgba(247,247,247,1)",
//                       fillRule: "nonzero",
//                     },
//                   ]}
//                   position="absolute"
//                   top="0.85%"
//                   bottom="0.68%"
//                   left="84.24%"
//                   right="14.95%"
//               ></Icon>
//               <Icon
//                   width="23.3785400390625px"
//                   height="17.628662109375px"
//                   viewBox={{
//                     minX: 0,
//                     minY: 0,
//                     width: 23.3785400390625,
//                     height: 17.628662109375,
//                   }}
//                   paths={[
//                     {
//                       d: "M11.5311 17.6284C11.1683 17.5717 10.8379 17.3821 10.6012 17.0948L10.3129 16.5707L10.3129 2.58232L1.13451 2.58232C0.886941 2.52283 0.655953 2.40602 0.459289 2.24084C0.262625 2.07566 0.105513 1.86651 0 1.62943L0 0.952885C0.0952957 0.694704 0.258854 0.468809 0.472371 0.30051C0.685889 0.132211 0.94092 0.0281561 1.2089 0L22.1695 0C22.5033 0.0289517 22.8138 0.186794 23.0383 0.441561C23.2627 0.696329 23.3843 1.02898 23.3784 1.37215C23.35 1.73958 23.1832 2.08129 22.9134 2.32504L22.216 2.64902L12.9818 2.64902L12.9818 16.6278L12.647 17.2282C12.3337 17.4939 11.9378 17.6359 11.5311 17.6284Z",
//                       fill: "rgba(247,247,247,1)",
//                       fillRule: "nonzero",
//                     },
//                   ]}
//                   position="absolute"
//                   top="1.11%"
//                   bottom="0.69%"
//                   left="85.45%"
//                   right="7.44%"
//               ></Icon>
//               <Icon
//                   width="23.4261474609375px"
//                   height="17.656982421875px"
//                   viewBox={{
//                     minX: 0,
//                     minY: 0,
//                     width: 23.4261474609375,
//                     height: 17.656982421875,
//                   }}
//                   paths={[
//                     {
//                       d: "M1.14379 2.6109L0.33476 2.22975C0.206993 2.0563 0.106573 1.86337 0.0371766 1.65802C-0.0110303 1.42557 -0.0110303 1.18533 0.0371766 0.952885C0.146867 0.702766 0.315733 0.484635 0.528447 0.318249C0.741161 0.151863 0.991001 0.0424778 1.25538 0L22.2066 0C22.5455 0.0172848 22.8638 0.171333 23.0921 0.428465C23.3203 0.685596 23.44 1.02489 23.4248 1.37215C23.3947 1.54705 23.3415 1.71694 23.2667 1.87718C23.1942 2.04017 23.0898 2.18613 22.9599 2.30598L22.2624 2.62996L1.14379 2.6109ZM1.2182 17.657C1.04151 17.5998 0.87412 17.5426 0.716033 17.4759C0.536877 17.4009 0.379858 17.2794 0.260378 17.1233L0 16.6564L0 7.99471C0.077965 7.73276 0.226784 7.49884 0.429234 7.32006C0.631684 7.14129 0.87945 7.02498 1.14379 6.98465L20.1794 6.98465L20.9326 7.39439C21.0664 7.56183 21.1703 7.75215 21.2395 7.95659C21.3016 8.18086 21.3016 8.4184 21.2395 8.64267L20.9047 9.24299C20.7692 9.32658 20.6295 9.40291 20.4863 9.47168C20.3367 9.54326 20.1811 9.60068 20.0213 9.6432L2.66888 9.6432L2.66888 14.9984L22.1973 14.9984C22.5322 15.0276 22.8423 15.1911 23.06 15.4535C23.2778 15.7159 23.3855 16.0558 23.3597 16.3992C23.3147 16.7277 23.1624 17.0308 22.9277 17.2593C22.693 17.4877 22.3896 17.6279 22.0671 17.657L1.2182 17.657Z",
//                       fill: "rgba(247,247,247,1)",
//                       fillRule: "nonzero",
//                     },
//                   ]}
//                   position="absolute"
//                   top="0.96%"
//                   bottom="0.69%"
//                   left="92.88%"
//                   right="0%"
//               ></Icon>
//             </View>
//           </View>
//           <Text
//               fontFamily="Syne"
//               fontSize="16px"
//               fontWeight="700"
//               color="rgba(255,255,255,1)"
//               textTransform="uppercase"
//               lineHeight="14px"
//               textAlign="center"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               letterSpacing="3.05px"
//               width="133px"
//               height="14px"
//               position="absolute"
//               top="52px"
//               left="58px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="Expertise"
//           ></Text>
//           <Text
//               fontFamily="Syne"
//               fontSize="16px"
//               fontWeight="700"
//               color="rgba(255,255,255,1)"
//               textTransform="uppercase"
//               lineHeight="14px"
//               textAlign="center"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               letterSpacing="3.05px"
//               width="141px"
//               height="14px"
//               position="absolute"
//               top="52px"
//               left="363px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="Portfolio"
//           ></Text>
//           <Text
//               fontFamily="Syne"
//               fontSize="16px"
//               fontWeight="700"
//               color="rgba(255,255,255,1)"
//               textTransform="uppercase"
//               lineHeight="14px"
//               textAlign="center"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               letterSpacing="3.05px"
//               width="115px"
//               height="14px"
//               position="absolute"
//               top="52px"
//               left="1451px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="AWards"
//           ></Text>
//           <Text
//               fontFamily="Syne"
//               fontSize="16px"
//               fontWeight="700"
//               color="rgba(255,255,255,1)"
//               textTransform="uppercase"
//               lineHeight="14px"
//               textAlign="center"
//               display="flex"
//               dir="column"
//               justify-content="flex-start"
//               letterSpacing="3.05px"
//               width="166px"
//               height="14px"
//               position="absolute"
//               top="52px"
//               left="1701px"
//               padding="0px 0px 0px 0px"
//               whiteSpace="pre-wrap"
//               children="Contact Us"
//           ></Text>
//         </View>
//     );
//
// }
//
// export default App;
