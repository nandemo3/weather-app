import Image from "next/image";
import { Box, BoxProps, Typography } from "@mui/material";

// comoponents
import RoundedCornerSquare from "../UI/RoundedCornerSquare";

interface TopContentsProps {
  iconUrl: string;
  icon: string;
  weather: string;
  place: string;
  temp: string;
  humidity: string;
}

export default function TopContents(props: TopContentsProps) {
  return (
    <RoundedCornerSquare>
      <Box display="flex">
        <Box display="flex" alignItems="center" flexDirection="column" m={1}>
          <Image
            src={props.iconUrl}
            alt={props.icon}
            width="100"
            height="100"
          />
          <Typography variant="h6">{props.weather}</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          rowGap={1}
          m={1}
        >
          <Typography variant="h4">{props.place}</Typography>
          <Typography variant="h5">{props.temp}°</Typography>
          <Typography variant="h5">{props.humidity}%</Typography>
        </Box>
      </Box>
    </RoundedCornerSquare>
  );
}
