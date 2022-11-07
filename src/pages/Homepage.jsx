import React from "react";
import { Box, Text } from "@chakra-ui/react";
import style from "../styles/homepage.module.css";

const Homepage = () => {
  return (
    <Box className={style.container}>
      {/* box 1 strted */}

      <Box>
        <Box className={style.logo}>
          <img
            src="https://user-images.githubusercontent.com/97525465/200297549-88609500-82e1-45ea-9064-50f5be6b930e.png"
            alt="logo"
          />
        </Box>

        <Box className={style.pass}>
          <Box>
            <i class="fa-solid fa-hand-point-right"></i>{" "}
            <Text>Simple to Use !</Text>
          </Box>
          <Box>
            <i class="fa-solid fa-hand-point-right"></i>{" "}
            <Text>Atteractive user interface.</Text>
          </Box>
          <Box>
            <i class="fa-solid fa-hand-point-right"></i>{" "}
            <Text>Faster & Smoother.</Text>
          </Box>
        </Box>
      </Box>

      {/* box 1 ended  */}


      <Box>
        <Box className={style.login}>

        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
