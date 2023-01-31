import { Stack, Box, Typography } from "@mui/material";
import { colorsApp } from "../App";
import { ContactColumn } from "./ContactColumn";

interface Props {

    colorKeys: colorsApp,

}

export const Footer = ({ colorKeys }: Props) => {
    return (
        <>
            <footer className="footer">
                <Stack
                    marginTop = '120px'
                    height    ='540px'
                    bgcolor   = {colorKeys.secondaryColor}


                >
                    <ContactColumn />

                </Stack>
            </footer>
        </>
    )
}
