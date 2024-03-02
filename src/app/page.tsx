import React from "react";
import { Box, Grid, Typography, ThemeProvider } from "@mui/material";

// api
import { getWeather } from "./api/getWeather";

// comoponents
import theme from "./utils/theme";
import Header from "./components/layouts/Header";
import TopContents from "./components/layouts/TopContents";
import RoundedCornerSquare from "./components/UI/RoundedCornerSquare";

export default async function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";

  const res = await getWeather("Tokyo", "metric", API_KEY);

  const icon = res.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <main>
          <Header title="Weather App!" />
          <TopContents
            iconUrl={iconUrl}
            icon={icon}
            weather={res.weather[0].main}
            place={res.name}
            temp={res.main.temp}
            humidity={res.main.humidity}
          />
          <Grid container>
            <Grid item xs={6}>
              <RoundedCornerSquare>
                <Box my={1}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="subtitle1">最高</Typography>
                    <Typography variant="h6">{res.main.temp_max}°</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="subtitle1">最低</Typography>
                    <Typography variant="h6">{res.main.temp_min}°</Typography>
                  </Box>
                </Box>
              </RoundedCornerSquare>
            </Grid>
            <Grid item xs={6}>
              <RoundedCornerSquare>
                <Box my={1}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="subtitle1">風速</Typography>
                    <Typography variant="h6">{res.wind.speed}m/s</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="subtitle1">風向</Typography>
                    <Typography variant="h6">{res.wind.deg}度</Typography>
                  </Box>
                </Box>
              </RoundedCornerSquare>
            </Grid>
          </Grid>
        </main>
      </ThemeProvider>
    </React.StrictMode>
  );
}
