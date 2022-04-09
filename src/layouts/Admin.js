// Chakra imports
import { 
  ChakraProvider, 
  Portal, 
  useDisclosure, 
  Box, 
  Text, 
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Stack
} from "@chakra-ui/react";

// Chakra icons
import {
  SearchIcon,
} from '@chakra-ui/icons'


// import styled from 'styled-components';
import Configurator from "components/Configurator/Configurator";
import Footer from "components/Footer/Footer.js";
// Layout components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VscHome } from "react-icons/vsc";
import { BiMessageDetail } from 'react-icons/bi';
import { AiOutlineClockCircle, AiOutlineFile, AiOutlineVideoCamera } from 'react-icons/ai';
import { MdOutlineLightbulb } from 'react-icons/md';
import { BsCalendar2Date, BsFileEarmarkPlus, BsMic, BsChevronUp, BsPersonPlus } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { MdInsertEmoticon } from 'react-icons/md';
import { CgScreen } from 'react-icons/cg';
import { RiRecordCircleLine, RiMessage2Line } from 'react-icons/ri'

import routes from "routes.js";
// Custom Chakra theme
import theme from "theme/theme.js";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin";
// Custom components
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import ImgBack from '../assets/img/6.jpg';
import ImgHead from '../assets/img/head.png';
import ImgZoom from '../assets/img/zoom_icon.jpg';
import imgMeeting from '../assets/img/meeting.png'
import Dashboard1 from "views/Dashboard/Dashboard";
export default function Dashboard() {
  // Colors Start
    const textColor="#bfc0d9";
    const mainColor="#111421";
    const layoutColor="#181a36";
    const compColor="#282a4f";
    const borderColor="#313247";
    const btnColor="#05c1fa";
  // Colors End
  // const { ...rest } = props;
  // states and functions
  const [sidebarVariant, setSidebarVariant] = useState("transparent");
  const [fixed, setFixed] = useState(false);
  const [showPic, setShowPic] = useState(false);
  const [showMeeting, setShowMeeting] = useState(false);
  // ref for main panel div
  const mainPanel = React.createRef();
  // functions for changing the states from components
  const getRoute = () => {
    return window.location.pathname !== "/admin/full-screen-maps";
  };
  // const getActiveRoute = (routes) => {
  //   let activeRoute = "Default Brand Text";
  //   for (let i = 0; i < routes.length; i++) {
  //     if (routes[i].collapse) {
  //       let collapseActiveRoute = getActiveRoute(routes[i].views);
  //       if (collapseActiveRoute !== activeRoute) {
  //         return collapseActiveRoute;
  //       }
  //     } else if (routes[i].category) {
  //       let categoryActiveRoute = getActiveRoute(routes[i].views);
  //       if (categoryActiveRoute !== activeRoute) {
  //         return categoryActiveRoute;
  //       }
  //     } else {
  //       if (
  //         window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
  //       ) {
  //         return routes[i].name;
  //       }
  //     }
  //   }
  //   return activeRoute;
  // };
  // This changes navbar state(fixed or not)
  // const getActiveNavbar = (routes) => {
  //   let activeNavbar = false;
  //   for (let i = 0; i < routes.length; i++) {
  //     if (routes[i].category) {
  //       let categoryActiveNavbar = getActiveNavbar(routes[i].views);
  //       if (categoryActiveNavbar !== activeNavbar) {
  //         return categoryActiveNavbar;
  //       }
  //     } else {
  //       if (
  //         window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
  //       ) {
  //         if (routes[i].secondaryNavbar) {
  //           return routes[i].secondaryNavbar;
  //         }
  //       }
  //     }
  //   }
  //   return activeNavbar;
  // };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.category === "account") {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  document.documentElement.dir = "ltr";
  // Chakra Color Mode
  return (
    <ChakraProvider theme={theme} resetCss={false} style={{position: 'relative'}}>
      <Box 
        w='100%'
        h='100%'
        position="fixed"
        backgroundColor="white"
        backgroundImage={`url(${ImgBack})`}
        backgroundRepeat= 'no-repeat'
        backgroundSize='contain'
        backgroundPosition='center'
        style={{
          zIndex:'2',
          display: showPic === false ? "block" : "none"
        }}
          onClick={() => { setShowPic(true); setShowMeeting(true) }}>
      </Box>
      <Box
        width='100vw'
        height='100vh'
        position='absolute'
        backdropFilter='blur(10px)'
        style={{
          zIndex:'2',
          display: showMeeting === false ? "none" : "flex",
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          width="80%"
          height="80%"
          backgroundColor={mainColor}
          position="relative"
          borderRadius="30px"
          color="white"
        >
          {/* header */}
          <Box
            width="100%"
            height="70px"
            borderRadius="30px 30px 0 0"
            backdropFilter='blur(10px)'
            backgroundColor={layoutColor}
            display="flex"
            borderBottom="1px"
            borderColor={borderColor}
            position="absolute"
            zIndex="2"
            style={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box ml="100px">
              <Text fontSize="30px" color={textColor}>
                BOOM MEETING
              </Text>
            </Box>

            <Box display="flex" mr="30px" style={{
              justifyContent: "center",
              alignItems: "center"
            }}>
              <InputGroup borderRadius="20px" backgroundColor={compColor}>
                <InputLeftElement
                  pointerEvents='none'
                  children={<SearchIcon color='gray.300' />}
                />
                <Input placeholder='Search to ...' color={textColor} border='0px' disableUnderline={false}/>
              </InputGroup>
              <Box width="50px" height="40px" backgroundImage={`url(${JSON.parse(localStorage.getItem('user')).avatar})`} backgroundSize="contain" backgroundRepeat="no-repeat" backgroundPosition="center" borderRadius="5px" ml='20px' />
            </Box>
          </Box>

          {/* sidebar */}
          <Box width="70px" height="100%" backgroundColor={layoutColor} position="absolute" top="0" borderRadius="30px 0 0 30px" border="1px" borderColor={borderColor} zIndex="3" padding="10px">
            <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="stretch" flexWrap="wrap">
              <Box width="80px" height="80px" backgroundImage={`url(${ImgZoom})`} backgroundSize="contain" backgroundRepeat="no-repeat" backgroundPosition="center" borderRadius="20px" />

              <Box display="flex" justifyContent="center" alignItems="stretch" flexWrap="wrap" padding="10px" height="70%">
                <VscHome style={{
                  width: "30px",
                  height: "30px",
                  color:`${borderColor}`,
                }}/>
                <BiMessageDetail style={{
                  width: "30px",
                  height: "30px",
                  color:`${borderColor}`,
                }}>
                </BiMessageDetail>
                <AiOutlineClockCircle style={{
                  width: "30px",
                  height: "30px",
                  color:`${borderColor}`,
                }}>
                </AiOutlineClockCircle>
                <MdOutlineLightbulb style={{
                  width: "30px",
                  height: "30px",
                  color:`${borderColor}`,
                }}>
                </MdOutlineLightbulb>
                <BsCalendar2Date style={{
                  width: "30px",
                  height: "30px",
                  color:`${borderColor}`,
                }}>
                </BsCalendar2Date>
              </Box>

              <Box width="70px" heigth="70px" backgroundColor={compColor} mb="20px" justifyContent="center" alignItems="center" display="flex" borderRadius="10px">
                <FiSettings style={{
                  width: "30px",
                  height: "30px",
                  color:`${borderColor}`,
                }}>
                </FiSettings>
              </Box>
            </Box>
          </Box>

          {/* Footer */}
          <Box width="calc(75% - 70px)" height="70px" backgroundColor={layoutColor} borderTop="1px" borderColor={borderColor} bottom="0" left="1px" position="absolute" marginLeft="70px" marginRight="30%" padding="0 20px 0 20px" display="flex" alignItems="center" justifyContent="space-between">
            <Box width="30%" heigth="100%" display="flex" alignItems="center" justifyContent="space-between">
              <Stack direction='row' spacing={3}>
                <Button leftIcon={<BsMic />} backgroundColor={compColor} variant='solid' color={textColor} borderRadius="10px">
                  <BsChevronUp backgroundColor={compColor} color={textColor} fontSize="10px"/>
                </Button>

                <Button leftIcon={<AiOutlineVideoCamera />} backgroundColor={compColor} variant='solid' color={textColor} borderRadius="10px">
                  <BsChevronUp backgroundColor={compColor} color={textColor} fontSize="10px"/>
                </Button>

                <Button leftIcon={<BsPersonPlus />} backgroundColor={compColor} variant='solid' color={textColor} borderRadius="10px">
                  <BsChevronUp backgroundColor={compColor} color={textColor} fontSize="10px"/>
                </Button>
              </Stack>
            </Box>
            <Box>
              <Button backgroundColor="#f21b37" borderRadius="10px" onClick={() => setShowMeeting(!showMeeting)}>
                End Meeting
              </Button>
            </Box>
            <Box width="30%" heigth="100%" display="flex" alignItems="center" justifyContent="space-between">
              <Stack direction='row' spacing={3}>
                <Button leftIcon={<CgScreen />} backgroundColor={compColor} variant='solid' color={textColor} borderRadius="10px">
                  <BsChevronUp backgroundColor={compColor} color={textColor} fontSize="10px"/>
                </Button>

                <Button leftIcon={<RiRecordCircleLine />} backgroundColor={compColor} variant='solid' color={textColor} borderRadius="10px">
                  <BsChevronUp backgroundColor={compColor} color={textColor} fontSize="10px"/>
                </Button>

                <Button leftIcon={<RiMessage2Line />} backgroundColor={btnColor} variant='solid' color="white" borderRadius="10px">
                  <BsChevronUp backgroundColor={compColor} color="white" fontSize="10px"/>
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box width="25%" height="100%" backgroundColor={layoutColor} position="absolute" top="0" right="0" zIndex="1" borderLeft="1px" borderColor={borderColor} borderRadius="0 30px 30px 0">
            <Box width="100%" height="100%" display="flex" alignItems="stretch" flexWrap="wrap" justifyContent="center" position="relative">
              <Box width="100%" marginTop="90px" padding="20px" fontSize="17px">
                <Text color={textColor}>Hi {`${JSON.parse(localStorage.getItem('user')).firstname+' '+JSON.parse(localStorage.getItem('user')).lastname}`}</Text>
                <Text marginTop="20px" color={textColor}>My name is Richard. I've been asked to get you setled at the firm and get you acquainted with the office and our systems.</Text>
                <Text marginTop="20px" color={textColor}>I see you've made it to your desk and we've turned on your computer you are alreay doing better then the fast guy!</Text>
              </Box>
              <Box position="absolute" bottom="0" width="100%" height="70px"  borderTop="1px" borderColor={borderColor} display="flex" alignItems="stretch" justifyContent="center" flexWrap="wrap">

                <Box width="100%" heigth="50%" display="flex" alignItems="center" justifyContent="space-between">
                  <Box width="50%" height="100%" display="flex" alignItems="center" justifyContent="space-between" padding="0 0 0 20px">
                    <BsFileEarmarkPlus style={{
                      color:`${textColor}`,
                    }}>
                    </BsFileEarmarkPlus>
                    <AiOutlineFile style={{
                      color:`${textColor}`,
                    }}>
                    </AiOutlineFile>
                    <BsMic style={{
                      color:`${textColor}`,
                    }}>
                    </BsMic>
                  </Box>

                  <Box width="20%" height="100%" display="flex" alignItems="center" justifyContent="center">
                    <MdInsertEmoticon style={{
                      color:`${textColor}`
                    }}>
                    </MdInsertEmoticon>
                  </Box>
                </Box>
                
                <Box width="100%" heigth="50%" padding="0 20px 0 20px"  display="flex" alignItems="center" justifyContent="space-between">
                  <Input variant='unstyled' placeholder='Type to write a message' color={textColor} paddingLeft="1px"/>
                  <Button width="20%" height="80%" backgroundColor={btnColor} borderRadius="9px" fontSize="12px">
                    Send
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* center */}
          <Box width="calc(100% - 25% - 90px)" height="calc(100% - 160px)" position="absolute" top="80px" left="80px" zIndex="2" backgroundImage={`url(${imgMeeting})`} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center"></Box>
        </Box>
        
      </Box>

      <div style={{position: 'absolute'}}>
        <Sidebar
          routes={routes}
          display="none"
        />
        <MainPanel
          ref={mainPanel}
          w={{
            base: "100%",
            xl: "calc(100% - 285px)",
          }}
          backgroundColor="gray.200">
          <Dashboard1 flg_pic={showPic} flg_meeting={showMeeting}/>
          {/* {console.log(getRoute() ? (
            <PanelContent>
              <PanelContainer>
                <Switch>
                  {getRoutes(routes)}
                </Switch>
              </PanelContainer>
            </PanelContent>
          ) : null)} */}
        </MainPanel>
      </div>
    </ChakraProvider>
  );
}
