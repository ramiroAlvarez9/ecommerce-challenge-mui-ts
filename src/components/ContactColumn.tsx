import { Stack, Box, Typography } from "@mui/material";
import { colorsApp } from "../App";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Icon } from "@iconify/react";
interface Props {
  colorKeys: colorsApp;
}

export const ContactColumn = ({ colorKeys }: Props) => {
  return (
    <>
      <Box width="264px" height="100%">
        <Box
          height="48px"
          width="172px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="#CED0D3"
        >
          <Typography variant="body1" color="#848A92">
            LOGO
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            marginTop: "24px",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "24px",
            color: "#6B737C",
          }}
        >
          We sell custom products for all your <br />
          needs. Packs and bulk products that <br />
          you will enjoy.
        </Typography>

        <Stack marginTop = '24px' width="144px" height="16px"  direction="row" 
          sx ={{
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '15px',
            lineHeight: '16px'

          }}
        >
          <LocalPhoneIcon
            sx={{
              fontSize: 16,
              marginRight : '8px',
            }}
          />
          +1-202-555-0129
        </Stack>

        <Box
          className="social__Media"
          display="flex"
          flexDirection="row"
          height="32px"
          marginTop = '40px'
        >
          <Box
            marginRight="8px"
            width="32px"
            height="32px"
            borderRadius="50%"
            bgcolor="#535C67"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon
              icon="ri:facebook-fill"
              color="white"
              width="16"
              height="16"
            />
          </Box>
          <Box
            marginRight="8px"
            width="32px"
            height="32px"
            borderRadius="50%"
            bgcolor="#535C67"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon icon="fe:twitter" color="white" width="16" height="13" />
          </Box>
          <Box
            marginRight="8px"
            width="32px"
            height="32px"
            borderRadius="50%"
            bgcolor="#535C67"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon icon="mdi:instagram" color="white" width="16" height="16" />
          </Box>
          <Box
            marginRight="8px"
            width="32px"
            height="32px"
            borderRadius="50%"
            bgcolor="#535C67"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon icon="ri:linkedin-fill" color="white" width="15" height="15" />
          </Box>
          <Box
            marginRight="8px"
            width="32px"
            height="32px"
            borderRadius="50%"
            bgcolor="#535C67"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon icon="carbon:logo-youtube" color="white" width="16" height="12" /> 
          </Box>
          

        </Box>
      </Box>
    </>
  );
};
