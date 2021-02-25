import * as React from "react";

import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  IconButton,
  InputBase,
  Paper,
  Typography,
  createStyles,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";

import SendIcon from "@material-ui/icons/Send";
import theme from "../pages/theme";

const useStyles = makeStyles((theme) =>
  createStyles({
    searchContainer: {
      position: "relative",
      zIndex: 5,
      display: "flex",
      margin: "0 auto",
      padding: "32px 16px",
      width: "100%",
      flexDirection: "column",

      [theme.breakpoints.up("md")]: {
        width: "80%",
        alignItems: "flex-end",
        flexDirection: "row",
        padding: "32px 0",
      },
    },
    input: {
      backgroundColor: "#EEEEEE",
      width: "100%",
      padding: "8px 16px",
    },
  })
);

export default function Search() {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Paper elevation={3}>
          <Box className={classes.searchContainer}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={4}>
                <label htmlFor="checkIn">
                  <Typography variant="caption" color="primary">
                    Check in date
                  </Typography>
                </label>

                <InputBase
                  placeholder="check in date"
                  className={classes.input}
                  id="checkIn"
                />
              </Grid>

              <Grid item xs={12} lg={4}>
                <label htmlFor="checkOut">
                  <Typography variant="caption" color="primary">
                    Check out date
                  </Typography>
                </label>

                <InputBase
                  placeholder="check out date"
                  className={classes.input}
                  id="checkOut"
                />
              </Grid>

              <Grid item xs={12} lg={4}>
                <label htmlFor="rooms">
                  <Typography variant="caption" color="primary">
                    Rooms
                  </Typography>
                </label>

                <InputBase
                  placeholder="rooms"
                  className={classes.input}
                  id="rooms"
                />
              </Grid>
            </Grid>

            <Hidden smDown>
              <Box margin="0 32px" color="#fff">
                <IconButton color="inherit">
                  <SendIcon />
                </IconButton>
              </Box>
            </Hidden>

            <Hidden mdUp>
              <Box width="100%" margin="32px 0 8px 0">
                <Button variant="contained" size="large" fullWidth>
                  Search
                </Button>
              </Box>
            </Hidden>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
