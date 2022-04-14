import {
  Input,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Portal,
  Progress,
  SimpleGrid,
  FormControl,
  Stack,
  Spacer,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  background,
  AlertTitle,
  Tfoot,
  Td,
  TableContainer,
  Select,
  Alert,
  useToast
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
// import ReactPlayer from "react-player";
// assets
import peopleImage from "assets/img/people-image.png";
import oldMan from "assets/img/1.PNG";
import oldWoman from "assets/img/2.PNG";
import Man from "assets/img/3.PNG";
import Woman from "assets/img/4.PNG";
import youthMan from "assets/img/5.PNG";
import ImgDoor from "assets/img/6.jpg";
import logoChakra from "assets/svg/logo-white.svg";
import VideoPlay from "./VideoPlay";
import ImgCard from '../../assets/img/card_back.jpg';
import ImgTornodo from '../../assets/img/tonato_logo.png';
// import NewEmail from "./NewEmail";
// Custom components
import ModalBodyContent from "components/ModalBodyContent/ModalBodyContent";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import ReadMoreText from "components/Card/ReadMoreText.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
import AuthApi from "../../api/auth";
import { useAuth } from "../../auth-context/auth.context";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import TimelineRow from "components/Tables/TimelineRow";
import React, { useEffect, useState, useRef, useMemo } from "react";
// react icons
import { BsArrowRight, BsCardImage } from "react-icons/bs";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { FiTrash2 } from 'react-icons/fi';
import { dashboardTableData, timelineData } from "variables/general";
import { CardComponent } from "theme/additions/card/Card";
import Sound from './Audio';
import './please.css';

export default function Dashboard1(props) {
  // console.log("props",props);
  const [sName, setsName] = useState("");
  const [sEmail, setsEmail] = useState("");
  const [sImage, setsImage] = useState("");
  const [sData, setsData] = useState("");
  const [sDropDown, setDropDown] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [tempTable, setTempTable] = useState();
  const [saveData, setSaveDate] = useState(false);
  const [steps, setSetp] = useState(1);
  const toast = useToast();
  const [emails, setEmails] = useState([]);

  const ModalShow = (email) => {
    // if (email.cType === 1) {
    //   setSpeEmailClicked(true);
    // } else {
    setsName(email["cName"]);
    setsEmail(email["cEmail"]);
    setsImage(email["cAvatar"]);
    setsData(email["cData"]);
    onOpen();
    // }
  }
  const [series, setSeries] = useState([
    {
      type: "area",
      name: "Mobile apps",
      data: [190, 220, 205, 350, 370, 450, 400, 360, 210, 250, 292, 150],
    },
    {
      type: "area",
      name: "Websites",
      data: [400, 291, 121, 117, 25, 133, 121, 211, 147, 25, 201, 203],
    },
  ]);
  const [myFlg, setMyFlg] = useState(true);
  useEffect(() => {

    if ((props.flg_pic && !props.flg_meeting) && myFlg) {
      Sound(true);
      setTimeout(() => {
        const tempArray = [
          {
            cName: "Bank Manager",
            cEmail: "peter@wilsonlawfirm.com",
            cData: "Just Following up on my voicemail regarding the Aritcles of Incorporation for your client. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\n\n Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.hey can someone help me with smth in HTML for web designing i can send you the requirements and stuff for how its supposed ot be done just ping me if you can help i need it done by friday i ofc will be doing it aswell with you but my HTML knowledge is not that big so",
            cType: 1,
            cAvatar: oldMan
          }
        ]
        setMyFlg(false);
        setEmails(tempArray);
      }, 2000)
    }
  })

  const value = "$100.000";
  const history = useHistory();
  // Chakra Color Mode
  const { colorMode, toggleColorMode } = useColorMode();
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.400", "white");
  const { setUser } = useAuth();
  let { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const tempValue = [{
    'entry': '10000', 'account': 'Bank Account CDN$', 'checked': false
  }, {
    'entry': '11000', 'account': 'Accounts Receivable', 'checked': false
  }, {
    'entry': '11200', 'account': 'Sales Tax Receivable', 'checked': false
  }, {
    'entry': '12000', 'account': 'Inventory', 'checked': false
  }, {
    'entry': '13000', 'account': 'Prepaid Rent', 'checked': false
  }, {
    'entry': '13050', 'account': 'Prepaid Insurance', 'checked': false
  }, {
    'entry': '13100', 'account': 'Prepaid Advertising', 'checked': false
  }, {
    'entry': '16000', 'account': 'Vehicles', 'checked': false
  }, {
    'entry': '16050', 'account': 'Acc Dep - Vehicles', 'checked': false
  }, {
    'entry': '16100', 'account': 'Equipment', 'checked': false
  }, {
    'entry': '16150', 'account': 'Acc Dep - Equipment', 'checked': false
  }, {
    'entry': '16200', 'account': 'Furniture and Fixtures', 'checked': false
  }, {
    'entry': '16250', 'account': 'Acc Dep - Furniture', 'checked': false
  }, {
    'entry': '20000', 'account': 'Accounts Payable', 'checked': false
  }, {
    'entry': '20100', 'account': 'Accrued Liabilities', 'checked': false
  }, {
    'entry': '21000', 'account': 'Payroll Liabilities', 'checked': false
  }, {
    'entry': '21200', 'account': 'Sales Tax Payable', 'checked': false
  }, {
    'entry': '21300', 'account': 'Income Tax Payable', 'checked': false
  }, {
    'entry': '21400', 'account': 'Customer Deposits', 'checked': false
  }, {
    'entry': '21000', 'account': 'Due to Shareholder', 'checked': false
  }, {
    'entry': '22000', 'account': 'Bank Loan', 'checked': false
  }, {
    'entry': '30000', 'account': "Owner's Capital", 'checked': false
  }, {
    'entry': '32000', 'account': 'Retained Earnings', 'checked': false
  }, {
    'entry': '33000', 'account': 'Dividends Paid', 'checked': false
  }, {
    'entry': '41000', 'account': 'Ticket Revenue', 'checked': false
  }, {
    'entry': '42000', 'account': 'Streaming Revenue', 'checked': false
  }, {
    'entry': '43000', 'account': 'Merchandise Revenue', 'checked': false
  }, {
    'entry': '51000', 'account': 'Venue Rental Expense', 'checked': false
  }, {
    'entry': '51100', 'account': 'Commission Expense', 'checked': false
  }, {
    'entry': '51200', 'account': 'Travel Expense', 'checked': false
  }, {
    'entry': '52000', 'account': 'Recording Expense', 'checked': false
  }, {
    'entry': '53000', 'account': 'Cost of Goods Sold - Merchandise', 'checked': false
  }, {
    'entry': '53100', 'account': 'Merch Commission Expense', 'checked': false
  }, {
    'entry': '60000', 'account': 'Accounting Service Fees', 'checked': false
  }, {
    'entry': '60100', 'account': 'Ad and Promotion', 'checked': false
  }, {
    'entry': '60400', 'account': 'Bank Service Charges', 'checked': false
  }, {
    'entry': '60500', 'account': 'Internet and Cell Expense', 'checked': false
  }, {
    'entry': '60600', 'account': 'Depreciation Expense', 'checked': false
  }, {
    'entry': '61000', 'account': 'Rent Expense', 'checked': false
  }, {
    'entry': '61200', 'account': 'Insurance Expense', 'checked': false
  }, {
    'entry': '61300', 'account': 'Other Revenue and Expense', 'checked': false
  }, {
    'entry': '62000', 'account': 'Interest Expense', 'checked': false
  }, {
    'entry': '80000', 'account': 'Income Tax Expense', 'checked': false
  }];
  const [dropDownMenu, setDropDownMenu] = useState(tempValue);
  // const [dropDownMenuData, setDropDownMenuData] = useState([]);
  const [rendered, setRendered] = useState(false);
  const [countOfTr, setCountOfTr] = useState(10);
  const [totalValue, setTotalValue] = useState([0, 0]);
  const [speEmailClicked, setSpeEmailClicked] = useState(true);
  const handleSelect = (index) => {
    if (!dropDownMenu[index].checked && tableData.length >= 10) {
      toast({
        title: "You can't select items over 10.",
        status: 'warning',
        isClosable: true,
      })
      return false;
    }
    var arr = tableData;
    var dropDownMenuData = dropDownMenu;
    dropDownMenuData[index].checked = !dropDownMenuData[index].checked;
    var ind = arr.findIndex((element) => element.acc === dropDownMenuData[index].account);
    if (ind !== -1) {
      arr.splice(ind, 1);
      setTableData(arr);
    } else {
      arr.push({
        acc: dropDownMenu[index].account,
        debit: {
          str: '',
          num: 0
        },
        credit: {
          str: '',

          num: 0
        }
      });
      setTableData(arr);
    }
    setDropDownMenu(dropDownMenuData);
    setRendered(!rendered);
  }

  const SignOut = async () => {
    await AuthApi.Logout(user);
    await setUser(null);
    localStorage.removeItem("user");
    return history.push("/auth/signin");
  }

  const renderTable = () => {
    const temp = [];
    const please = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    please.map((item, index) => {
      if (index >= tableData.length) {
        temp.push(
          <Tr key={`tbl_${index}`}>
            <Td pl="5px"></Td>
            <Td pl="5px"></Td>
            <Td pl="5px"></Td>
            <Td pl="5px"></Td>
            <Td pl="5px"></Td>
          </Tr>
        );
      }
      else {
        temp.push(
          <Tr key={`tbl_${index}`} maxH="10px" id={index}>
            <Td paddingBottom="6px" paddingTop="6px" pl="5px">{index + 1}</Td>
            <Td paddingBottom="6px" paddingTop="6px" pl="5px">{tableData[index].acc}</Td>
            <Td paddingBottom="6px" paddingTop="6px" pl="5px"><Input type="number" h="98%" minW="70px" borderRadius="3px" id={`debit_${index}`} onChange={(e) => func_table_update(e)} bgColor="lightgrey"></Input></Td>
            <Td paddingBottom="6px" paddingTop="6px" pl="5px"><Input type="number" h="98%" minW="70px" borderRadius="3px" id={`credit_${index}`} onChange={(e) => func_table_update(e)} bgColor="lightgrey"></Input></Td>
            <Td paddingBottom="6px" paddingTop="6px" pl="5px"><FiTrash2 onClick={() => delTr(tableData[item], index)} /></Td>
          </Tr>
        );
      }
    })
    return temp;
  }

  const delTr = (itm, ind) => {
    var arr = tableData;
    arr.splice(ind, 1);
    setTableData(arr);
    var flg = 0;
    dropDownMenu.map((item, index) => {
      if (item.account === itm.acc) {
        flg = index;
      }
    })
    arr = dropDownMenu;
    arr.splice(flg, 1);
    setDropDown(arr);
    setCountOfTr(0);
  }

  const func_table_update = async (e) => {
    var arr = tableData;
    var sId = e.target.id;
    arr[sId.slice(sId.indexOf("_") + 1)][sId.slice(0, sId.indexOf("_"))].num = e.target.value;
    setTableData(arr);
    func_total_update();
  }

  const func_total_update = () => {
    var temp = [0, 0];
    tableData.map((item, index) => {
      temp[0] += Number(item.debit.num);
      temp[1] += Number(item.credit.num);
    })
    setTotalValue(temp);
  }

  const func_get_date = () => {
    var txt = '';
    const today = new Date();
    txt += today.toLocaleString('default', { month: 'short' });
    txt += "-" + today.getDate() + "-";
    txt += today.getFullYear();
    return txt;
  }

  const func_save = () => {
    var status = true;
    if (status) {
      toast({
        title: "Success!",
        status: 'success',
        isClosable: 'true'
      });
      setDropDownMenu(tempValue);
      setTableData([]);
      setTotalValue([0, 0]);
      setSetp(steps + 1);
    } else {
      toast({
        title: "Maybe you selected some wrong items.",
        status: 'warning',
        isClosable: 'true'
      });
    }
  }

  const func_card = () => {
    var temp = [];
    emails.map((item, index) => {
      temp.push(
        <Card minH="83px" maxWidth="calc(200% - 550px)" minWidth="calc(200% - 600px)" onClick={() => ModalShow(item)} className="message">
          <CardBody display="flex" flexWrap="wrap">
            <Flex flexDirection="row" align="center" justify="center" w="calc(100% - 40px)">
              <Stat me="auto">
                <StatLabel
                  fontSize="sm"
                  color="#1ac6ff"
                  fontWeight="bold"
                  pb=".1rem"
                >
                  Bank Manager
                </StatLabel>
                <Flex style={{ marginTop: "10px" }}>
                  <StatNumber fontSize="17px">
                    <ReadMoreText text="Just Following up on my voicemail regarding the Aritcles of Incorporation for your client. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." />
                  </StatNumber>
                </Flex>
              </Stat>
            </Flex>
            <Image
              src={oldMan}
              alt="old man image"
              width="100px" height="120px"
              style={{ position: "absolute", bottom: "0", right: "0" }}
              class="100px"
            />
          </CardBody>
        </Card>
      );
    })
    return temp;
  }

  return (
    <Box w="100%" backgroundColor={"gray.200"} padding="5" position="relative" h="100vh">
      <Box className="main"
        w="800px"
        h="60%"
        backgroundImage={`url(${ImgCard})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        position="absolute"
        borderRadius="10px"
        right="2"
        zIndex="3"
        display={!(props.flg_pic && !props.flg_meeting) ? "none" : speEmailClicked ? "flex" : "none"}
        justifyContent="center"
        alignItems="center"
      >
        <Box width="80%" height="95%" display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">
          <Box w="100%" h="150px" display="flex">
            <Box w="50%" height="100%" display="flex" justifyContent="center" flexWrap="wrap" alignItems="end">
              <Button w="80%" mt="20px">{JSON.parse(localStorage.getItem('user')).username}</Button>
              <Button w="80%" onClick={() => setDropDown(!sDropDown)} mb="10px">{`1-${steps}`}</Button>
              <Box display={sDropDown === false ? "none" : "block"} position="absolute" w="300px" h="500px" zIndex="4" top="calc(20% + 10px)" right="calc(90% - 300px)" backdropFilter="blur(5px)" boxShadow="3px 3px 4px 4px lightgrey" overflowY="scroll">
                {
                  dropDownMenu.map((item, index) => (
                    <Box onClick={() => { handleSelect(index) }} border="1px" pl="20px" borderColor="lightgrey" cursor="pointer" backgroundColor={dropDownMenu[index].checked ? "lightblue" : "transparent"} key={`menu_${index}`}> {item.entry + " " + item.account}</Box>
                  ))
                }
              </Box>
            </Box>
            <Box w="50%" height="100%" display="flex" justifyContent="center" alignItems="stretch" flexWrap="wrap">
              <Box w="100%" height="65%" backgroundImage={`url(${ImgTornodo})`} backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="contain"></Box>
              <Box w="100%" height="45%" mt="3px">
                <Button w="100%">
                  {
                    func_get_date()
                  }
                </Button>
              </Box>
            </Box>
          </Box>

          <Box w="100%" h="calc(100% - 200px)" backgroundColor="white" borderRadius="5px" overflowY="scroll">
            <TableContainer onClick={() => setDropDown(false)}>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th w="20%" pl="5px" pr="0">no</Th>
                    <Th w="40%" pl="5px" pr="0">Account #-Account Name</Th>
                    <Th w="20%" pl="5px" pr="0">Debit</Th>
                    <Th w="20%" pl="5px" pr="0">Credit</Th>
                    <Th w="20%" pl="5px" pr="0">del</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    renderTable()
                  }
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Td colSpan="2" textAlign="center">
                      Totals
                    </Td><Td>{totalValue[0]}</Td><Td>{totalValue[1]}</Td>
                  </Tr>
                  <Tr>
                    <Td colSpan="3" textAlign="center">
                      Verification cell (must be zero to balance)
                    </Td><Td>{totalValue[0] - totalValue[1]}</Td>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
          <Box w="100%" paddingTop="5px" display="flex" justifyContent="end">
            <Button mr="30px" bgColor="#f0731a" borderRadius="10px" color="white" onClick={() => setSpeEmailClicked(false)} ml="30px" height="30px">Close</Button>
            <Button mr="30px" bgColor="#f0731a" borderRadius="10px" color="white" onClick={() => {
              func_save();
            }} height="30px">Save</Button>
          </Box>
        </Box>
      </Box>
      <VideoPlay />
      <FormControl zIndex="1">
        <Stack direction='row' spacing={4} style={{ position: "absolute", right: "0" }}>
          <Button colorScheme='telegram' backgroundColor="blue.200" variant='solid' width="100px;" size="sm">
            Settings
          </Button>
          <Button colorScheme='telegram' backgroundColor="blue.400" variant='solid' width="100px;" size="sm" onClick={SignOut}>
            Logout
          </Button>
        </Stack>
      </FormControl>
      <Flex flexDirection="column" pt={{ base: "100px", md: "35px" }} onClick={() => setDropDown(false)}>

        <SimpleGrid columns={{ sm: 2, md: 2, xl: 2 }} spacing="24px">
          {/* left */}
          <Box columns={{ sm: 1, md: 1, xl: 1 }} spacing="24px">
            <Stat me="auto" marginBottom="10px">
              <StatLabel
                fontSize="lg"
                color="gray.600"
                fontWeight="bold"
                marginLeft="20px;"
                display={emails.length > 0 ? 'block' : 'none'}
              >
                New Emails
              </StatLabel>
            </Stat>
            {
              func_card()
            }
          </Box>

          {/* Don't touch it */}
          <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} spacing="24px" opacity={0}>
            <Stat me="auto">
              <StatLabel
                fontSize="lg"
                color="gray.600"
                fontWeight="bold"
                marginLeft="20px;"
              >
                Your Status
              </StatLabel>
            </Stat>
            <Card minH="auto" backgroundColor="green.200" onClick={() => ModalShow(4, youthMan)}>
              <CardBody>
                <Flex flexDirection="row" align="center" justify="center" w="100%">
                  <Stat me="auto">
                    <StatLabel
                      fontSize="sm"
                      color="whiteAlpha.900"
                      fontWeight="bold"
                      pb=".1rem"
                    >
                      Congratulations Kyle!
                    </StatLabel>
                    <Flex style={{ marginTop: "10px" }}>
                      <StatNumber fontSize="smaller" fontWeight="100" variant='solid' color="whiteAlpha.900" paddingRight="20%">
                        So fa so good. Keep up the good work. With only 4 more months to go you' re proving you can handle anything thrown at you!
                      </StatNumber>
                    </Flex>
                  </Stat>
                </Flex>
                <Image
                  src={youthMan}
                  alt="chakra image"
                  width="100px" height="120px"
                  style={{ position: "absolute", bottom: "0", right: "0" }}
                />
              </CardBody>
            </Card>
            <Card minH="83px" minWidth="100px">
              <CardHeader mb="20px" pl="22px">
                <Flex direction="column" alignSelf="flex-start">
                  <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
                    Year Snapshot
                  </Text>
                  <Text fontSize="smaller" fontWeight="medium" color="gray.400">
                    Monthly Revenue (in 1,000s)
                  </Text>
                </Flex>
              </CardHeader>
              <Box w="100%" h={{ sm: "300px" }} ps="8px">
                <LineChart />
              </Box>
              <Text fontSize="small" fontWeight="bold" color="blue.400"><a style={{ color: "black" }}>View</a>: Revenue | Expenses | Loans | Capital | Net income</Text>
            </Card>
          </SimpleGrid>

        </SimpleGrid>
      </Flex>

      <Modal onClose={onClose} size="6xl" isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent borderRadius={50} >
          <ModalCloseButton marginTop={5} marginRight={5} />
          <ModalBody padding={0}>
            <ModalBodyContent modalbodyName={sName} modalbodyEmail={sEmail} modalbodyImage={sImage} modalbodyData={sData} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}