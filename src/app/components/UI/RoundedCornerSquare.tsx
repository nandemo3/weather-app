"use client";

import { Box, BoxProps } from "@mui/material";
import theme from "@/app/utils/theme";

interface SquareProps extends BoxProps {}

export default function RoundedCornerSquare(props: SquareProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      m={1}
      p={1}
      borderRadius={5}
      bgcolor={theme.palette.background.default}
      color="white"
    >
      {props.children}
    </Box>
  );
}
