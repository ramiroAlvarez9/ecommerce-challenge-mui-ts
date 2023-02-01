import { Typography, Stack } from "@mui/material";

export const LinksColumn1 = () => {
  return (
    <>
      <Stack marginLeft="10px" width="135px">
        <Typography
          variant="body2"
          marginBottom="24px"
          sx={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          Our company
        </Typography>
        <Typography
          variant="body2"
          marginBottom="24px"
          sx={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "16px",
          }}
        >
          About us
        </Typography>
        <Typography
          variant="body2"
          marginBottom="24px"
          sx={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "16px",
          }}
        >
          FAQ
        </Typography>
        <Typography
          variant="body2"
          marginBottom="24px"
          sx={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "16px",
          }}
        >
          Partnerships
        </Typography>
        <Typography
          variant="body2"
          marginBottom="24px"
          sx={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "16px",
          }}
        >
          Sustainability
        </Typography>
        <Typography
          variant="body2"
          marginBottom="24px"
          sx={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "16px",
          }}
        >
          Blog
        </Typography>
      </Stack>
    </>
  );
};
