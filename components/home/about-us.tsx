import * as React from "react";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
  createStyles,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import BusinessIcon from "@material-ui/icons/Business";
import theme from "../../pages/theme";

const useStyles = makeStyles((theme) =>
  createStyles({
    textContainer: {
      textAlign: "left",
      lineHeight: "1em",
      [theme.breakpoints.down("sm")]: {
        marginTop: "2em",
      },
    },

    heading: {
      fontSize: "3em",
      fontWeight: 600,
      fontFamily: "Poppins",
      width: "80%",
    },

    testimonyHeading: {
      fontSize: "2.7em",
      fontWeight: 600,
      fontFamily: "Poppins",
      width: "70%",

      [theme.breakpoints.down("sm")]: {
        fontSize: "2em",
        width: "100%",
      },
    },

    heading2: {
      fontSize: "3em",
      fontWeight: 600,
      fontFamily: "Poppins",
      width: "30%",
      lineHeight: 1.3,
      //   width: "80%",

      [theme.breakpoints.down("sm")]: {
        fontSize: "2em",
        width: "100%",
      },
    },

    restaurantTitle: {
      fontSize: "3em",
      fontWeight: 600,
      fontFamily: "Poppins",
      lineHeight: 1.3,
      width: "38%",

      [theme.breakpoints.down("sm")]: {
        fontSize: "2em",
        width: "100%",
      },
    },

    image: {
      backgroundImage: "url(/images/Group-12.png)",
    },

    secondRoot: {
      [theme.breakpoints.down("sm")]: {
        top: "100%",
        marginBottom: "220%",
      },
    },
    secondContainer: {
      background: "url(/images/chris-lee-70l1tDAI6rM-unsplash.png)",
      backdropFilter: "blur(10px)",
      backgroundSize: "cover",
      height: "40em",
      margin: "4em 0 0 0",
      padding: "3em 0",
      position: "relative",
    },

    grayscale: {
      width: "100%",
      height: "100%",
      backdropFilter: "grayscale(0.5) opacity(0.8)",
    },

    card: {
      height: "350px",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

      [theme.breakpoints.down("sm")]: {
        height: "280px",
      },
    },

    circled: {
      width: "60px",
      height: "60px",
      boxRadius: "50%",
      backgroundColor: theme.palette.primary.dark,
    },

    subTitle: {
      fontSize: "1.2em",
      textAlign: "center",
      width: "80%",
      fontWeight: 600,
      padding: "16px 0",
    },

    testimonyRoot: {
      [theme.breakpoints.down("sm")]: {
        position: "relative",
        // top: "30em",
      },
    },

    testimony: {
      width: "100%",
      marginLeft: "auto",
      [theme.breakpoints.up("lg")]: {
        maxWidth: "740px",
        padding: "32px 0",
      },
    },

    testimonyImage: {
      width: "100%",
      backgroundImage: "url(/images/rhema-kallianpur-jbJ-_hw2yag-unsplash.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0 0",
      backgroundSize: "cover",
    },

    testimonyInner: {
      height: "30em",

      [theme.breakpoints.down("sm")]: {
        padding: "0 16px",
      },

      "& .testimonials": {
        height: "100%",
      },
    },
  })
);

export default function AboutUs() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} lg={5}>
            <Box className={classes.textContainer}>
              <Typography
                variant="caption"
                color="primary"
                style={{ fontWeight: 800 }}
                gutterBottom
              >
                ABOUT US
              </Typography>
              <Typography
                variant="h2"
                color="initial"
                className={classes.heading}
                gutterBottom
              >
                Trust and quality are our atuus
              </Typography>

              <Typography variant="body2" color="initial" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>

              <Typography variant="body2" color="initial" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>

              <Box margin="16px 0">
                <Button size="large" endIcon={<ArrowForwardIcon />}>
                  read more
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} lg={7} justify="flex-end">
            <Box width="100%">
              <img
                src="/images/Group-12.png"
                alt="group"
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export function AboutUsExpand() {
  const classes = useStyles();
  return (
    <div className={classes.secondRoot}>
      <Box className={classes.secondContainer}>
        <Container>
          <Typography
            variant="h1"
            color="textSecondary"
            className={classes.heading2}
          >
            We bring you the finest details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              <Paper elevation={0} className={classes.card}>
                <Avatar className={classes.circled}>
                  <BusinessIcon />{" "}
                </Avatar>

                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.subTitle}
                >
                  Free Wifi to stay connected
                </Typography>

                <Typography variant="body2" color="initial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} lg={3}>
              <Paper elevation={0} className={classes.card}>
                <Avatar className={classes.circled}>
                  <BusinessIcon />{" "}
                </Avatar>

                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.subTitle}
                >
                  Free Wifi to stay connected4K Television and Netflix included{" "}
                </Typography>

                <Typography variant="body2" color="initial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} lg={3}>
              <Paper elevation={0} className={classes.card}>
                <Avatar className={classes.circled}>
                  <BusinessIcon />{" "}
                </Avatar>

                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.subTitle}
                >
                  Span zone where you can chill
                </Typography>

                <Typography variant="body2" color="initial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} lg={3}>
              <Paper elevation={0} className={classes.card}>
                <Avatar className={classes.circled}>
                  <BusinessIcon />{" "}
                </Avatar>

                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.subTitle}
                >
                  Spacious rooms for awesome parties
                </Typography>

                <Typography variant="body2" color="initial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export function Testimonial() {
  const classes = useStyles();
  const isHandheld = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.testimonyRoot}>
      <Grid container className={classes.testimonyInner}>
        <Grid item xs={12} lg={7}>
          <div className={[classes.testimony, "testimonial"].join(" ")}>
            <Typography
              variant="caption"
              color="primary"
              style={{ fontWeight: 800 }}
              gutterBottom
            >
              Testimonials
            </Typography>

            <Typography
              variant="h2"
              color="initial"
              className={[classes.testimonyHeading].join(" ")}
              gutterBottom
            >
              We trust our customers and they trust us too
            </Typography>

            <Box margin="24px 0" display="flex">
              <Avatar style={{ height: "3.5em", width: "3.5em" }} />

              <Box
                marginLeft="16px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Typography
                  variant="subtitle1"
                  color="initial"
                  style={{ fontWeight: "bold" }}
                >
                  John Doe
                </Typography>
                <Typography variant="body2" color="initial">
                  IT Engineer
                </Typography>
              </Box>
            </Box>

            <Box width={isHandheld ? "100%" : "55%"}>
              <Typography variant="body1" color="initial">
                I'm very glad I had the opportunity to visit this hotel. The
                stuff is very friendly and I will definetly visit the hotel
                again next year.
              </Typography>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} lg={5}>
          <div
            className={[classes.testimonyImage, "testimonials"].join(" ")}
          ></div>
        </Grid>
      </Grid>
    </div>
  );
}

export function Restaurant() {
  const classes = useStyles();

  return (
    <div style={{ margin: "8px 0" }}>
      <Container>
        <Typography
          variant="caption"
          color="primary"
          style={{ fontWeight: 800 }}
          gutterBottom
        >
          Restaurant
        </Typography>

        <Typography
          variant="h2"
          color="initial"
          className={[classes.restaurantTitle].join(" ")}
          gutterBottom
        >
          Explore our menu and eat what you want
        </Typography>

        <Box margin="64px 0">
          <Grid container spacing={3}>
            <Grid item sm={12} lg={6}>
              <Card
                style={{
                  display: "flex",
                  width: "100%",
                  boxShadow: "unset",
                }}
              >
                <CardMedia
                  image="/images/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                  style={{ width: "180px", height: "200px" }}
                />
                <CardContent
                  style={{ backgroundColor: "#F8F8F8", boxShadow: "unset" }}
                >
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    style={{ fontWeight: "bold" }}
                  >
                    FOOD
                  </Typography>
                  <Typography variant="h6" color="initial" gutterBottom>
                    Fresh fish and onions
                  </Typography>

                  <Typography variant="body2" color="initial">
                    Fresh food directly from our restaurant ready coocked for
                    you and you familly
                  </Typography>

                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    position="relative"
                    top="2em"
                    right="-1em"
                  >
                    <IconButton>
                      <ArrowForwardIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={12} lg={6}>
              <Card
                style={{
                  display: "flex",
                  width: "100%",
                  boxShadow: "unset",
                }}
              >
                <CardMedia
                  image="/images/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                  style={{ width: "180px", height: "200px" }}
                />
                <CardContent
                  style={{ backgroundColor: "#F8F8F8", boxShadow: "unset" }}
                >
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    style={{ fontWeight: "bold" }}
                  >
                    DESERT
                  </Typography>
                  <Typography variant="h6" color="initial" gutterBottom>
                    Chocolate cupcakes
                  </Typography>

                  <Typography variant="body2" color="initial">
                    Fresh food directly from our restaurant ready coocked for
                    you and you familly
                  </Typography>

                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    position="relative"
                    top="2em"
                    right="-1em"
                  >
                    <IconButton>
                      <ArrowForwardIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={12} lg={6}>
              <Card
                style={{
                  display: "flex",
                  width: "100%",
                  boxShadow: "unset",
                }}
              >
                <CardMedia
                  image="/images/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                  style={{ width: "180px", height: "200px" }}
                />
                <CardContent
                  style={{ backgroundColor: "#F8F8F8", boxShadow: "unset" }}
                >
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    style={{ fontWeight: "bold" }}
                  >
                    DESERT
                  </Typography>
                  <Typography variant="h6" color="initial" gutterBottom>
                    Chocolate cupcakes
                  </Typography>

                  <Typography variant="body2" color="initial">
                    Fresh food directly from our restaurant ready coocked for
                    you and you familly
                  </Typography>

                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    position="relative"
                    top="2em"
                    right="-1em"
                  >
                    <IconButton>
                      <ArrowForwardIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={12} lg={6}>
              <Card
                style={{
                  display: "flex",
                  width: "100%",
                  boxShadow: "unset",
                }}
              >
                <CardMedia
                  image="/images/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                  style={{ width: "180px", height: "200px" }}
                />
                <CardContent
                  style={{ backgroundColor: "#F8F8F8", boxShadow: "unset" }}
                >
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    style={{ fontWeight: "bold" }}
                  >
                    DESERT
                  </Typography>
                  <Typography variant="h6" color="initial" gutterBottom>
                    Chocolate cupcakes
                  </Typography>

                  <Typography variant="body2" color="initial">
                    Fresh food directly from our restaurant ready coocked for
                    you and you familly
                  </Typography>

                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    position="relative"
                    top="2em"
                    right="-1em"
                  >
                    <IconButton>
                      <ArrowForwardIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export function BlogPost() {
  const classes = useStyles();

  return (
    <div style={{ margin: "8px 0" }}>
      <Container>
        <Typography
          variant="caption"
          color="primary"
          style={{ fontWeight: 800 }}
          gutterBottom
        >
          Blog
        </Typography>

        <Typography
          variant="h2"
          color="initial"
          className={[classes.restaurantTitle].join(" ")}
          gutterBottom
        >
          Read our newest blog post right away
        </Typography>

        <Box margin="64px 0">
          <Grid container spacing={2}>
            <Grid item sm={12} lg={4}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  boxShadow: "unset",
                }}
              >
                <CardMedia
                  image="/images/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                  style={{ width: "100%", height: "200px" }}
                />
                <CardContent
                  style={{ backgroundColor: "#F8F8F8", boxShadow: "unset" }}
                >
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    style={{ fontWeight: "bold" }}
                  >
                    FOOD AND LIFE
                  </Typography>
                  <Typography
                    variant="h6"
                    color="initial"
                    gutterBottom
                    style={{ fontWeight: 800 }}
                  >
                    Succeed in hotel business
                  </Typography>

                  <Typography variant="body2" color="initial">
                    Fresh food directly from our restaurant ready coocked for
                    you and you familly
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={12} lg={4}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  boxShadow: "unset",
                }}
              >
                <CardMedia
                  image="/images/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                  style={{ width: "100%", height: "200px" }}
                />
                <CardContent
                  style={{ backgroundColor: "#F8F8F8", boxShadow: "unset" }}
                >
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    style={{ fontWeight: "bold" }}
                  >
                    COOKING
                  </Typography>
                  <Typography
                    variant="h6"
                    color="initial"
                    gutterBottom
                    style={{ fontWeight: 800 }}
                  >
                    Cooking delicious food
                  </Typography>

                  <Typography variant="body2" color="initial">
                    Fresh food directly from our restaurant ready coocked for
                    you and you familly
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={12} lg={4}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  boxShadow: "unset",
                }}
              >
                <CardMedia
                  image="/images/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                  style={{ width: "100%", height: "200px" }}
                />
                <CardContent
                  style={{ backgroundColor: "#F8F8F8", boxShadow: "unset" }}
                >
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    style={{ fontWeight: "bold" }}
                  >
                    FOOD AND LIFE
                  </Typography>
                  <Typography
                    variant="h6"
                    color="initial"
                    gutterBottom
                    style={{ fontWeight: 800 }}
                  >
                    Succeed in hotel business
                  </Typography>

                  <Typography variant="body2" color="initial">
                    Fresh food directly from our restaurant ready coocked for
                    you and you familly
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={12} lg={4}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  boxShadow: "unset",
                }}
              >
                <CardMedia
                  image="/images/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                  style={{ width: "100%", height: "200px" }}
                />
                <CardContent
                  style={{ backgroundColor: "#F8F8F8", boxShadow: "unset" }}
                >
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    style={{ fontWeight: "bold" }}
                  >
                    FRUITS
                  </Typography>
                  <Typography
                    variant="h6"
                    color="initial"
                    gutterBottom
                    style={{ fontWeight: 800 }}
                  >
                    Getting fresh fruits
                  </Typography>

                  <Typography variant="body2" color="initial">
                    Fresh food directly from our restaurant ready coocked for
                    you and you familly
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={12} lg={4}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  boxShadow: "unset",
                }}
              >
                <CardMedia
                  image="/images/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                  style={{ width: "100%", height: "200px" }}
                />
                <CardContent
                  style={{ backgroundColor: "#F8F8F8", boxShadow: "unset" }}
                >
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    style={{ fontWeight: "bold" }}
                  >
                    COOKING
                  </Typography>
                  <Typography
                    variant="h6"
                    color="initial"
                    gutterBottom
                    style={{ fontWeight: 800 }}
                  >
                    Getting fresh fruits
                  </Typography>

                  <Typography variant="body2" color="initial">
                    Fresh food directly from our restaurant ready coocked for
                    you and you familly
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={12} lg={4}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  boxShadow: "unset",
                }}
              >
                <CardMedia
                  image="/images/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                  style={{ width: "100%", height: "200px" }}
                />
                <CardContent
                  style={{ backgroundColor: "#F8F8F8", boxShadow: "unset" }}
                >
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    style={{ fontWeight: "bold" }}
                  >
                    FOOD AND LIFE
                  </Typography>
                  <Typography
                    variant="h6"
                    color="initial"
                    gutterBottom
                    style={{ fontWeight: 800 }}
                  >
                    Succeed in hotel business
                  </Typography>

                  <Typography variant="body2" color="initial">
                    Fresh food directly from our restaurant ready coocked for
                    you and you familly
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export function Photos() {
  const classes = useStyles();

  return (
    <div style={{ margin: "8px 0 0 0" }}>
      <Container>
        <Typography
          variant="caption"
          color="primary"
          style={{ fontWeight: 800 }}
          gutterBottom
        >
          PHOTOS
        </Typography>

        <Typography
          variant="h2"
          color="initial"
          className={[classes.restaurantTitle].join(" ")}
          gutterBottom
        >
          See our latest photos from restaurant and hotel
        </Typography>
      </Container>

      <Box margin="64px 0 0 0">
        <Grid container spacing={0}>
          <Grid item xs={12} lg={3}>
            <Box width="100%">
              <img
                src="/images/eddi-aguirre-ZAVHbpOn4Jk-unsplash@2x.png"
                alt="photo"
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Box width="100%">
              <img
                src="/images/eddi-aguirre-ZAVHbpOn4Jk-unsplash@2x.png"
                alt="photo"
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Box width="100%">
              <img
                src="/images/rhema-kallianpur-jbJ-_hw2yag-unsplash@2x.png"
                alt="photo"
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Box width="100%">
              <img
                src="/images/eddi-aguirre-ZAVHbpOn4Jk-unsplash@2x.png"
                alt="photo"
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export function AboutSecond() {
  const classes = useStyles();

  return (
    <div style={{ margin: "8px 0" }}>
      <Container>
        <Typography
          variant="caption"
          color="primary"
          style={{ fontWeight: 800 }}
          gutterBottom
        >
          Restaurant
        </Typography>

        <Typography
          variant="h2"
          color="initial"
          className={[classes.restaurantTitle].join(" ")}
          gutterBottom
        >
          Explore our menu and eat what you want
        </Typography>

        <Box margin="64px 0">
          <Grid container spacing={3}>
            <Grid item sm={12} lg={6}>
              <Card
                style={{
                  display: "flex",
                  width: "100%",
                  boxShadow: "unset",
                }}
              >
                <CardMedia
                  image="/images/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                  style={{ width: "180px", height: "200px" }}
                />
                <CardContent
                  style={{
                    backgroundColor: "#F8F8F8",
                    boxShadow: "unset",
                    display: "flex",
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                >
                  <Box paddingTop="16px">
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      style={{ fontWeight: "bold" }}
                    >
                      Big
                    </Typography>
                    <Typography variant="h6" color="initial" gutterBottom>
                      Spacious Room
                    </Typography>

                    <Typography variant="body2" color="initial">
                      Fresh food directly from our restaurant ready coocked for
                      you and you familly
                    </Typography>
                  </Box>

                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    position="relative"
                    right="-1em"
                  >
                    <IconButton>
                      <ArrowForwardIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={12} lg={6}>
              <Card
                style={{
                  display: "flex",
                  width: "100%",
                  boxShadow: "unset",
                }}
              >
                <CardMedia
                  image="/images/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                  style={{ width: "180px", height: "200px" }}
                />
                <CardContent
                  style={{
                    backgroundColor: "#F8F8F8",
                    boxShadow: "unset",
                    display: "flex",
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                >
                  <Box paddingTop="16px">
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      style={{ fontWeight: "bold" }}
                    >
                      Big
                    </Typography>
                    <Typography variant="h6" color="initial" gutterBottom>
                      Spacious Room
                    </Typography>

                    <Typography variant="body2" color="initial">
                      Fresh food directly from our restaurant ready coocked for
                      you and you familly
                    </Typography>
                  </Box>

                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    position="relative"
                    right="-1em"
                  >
                    <IconButton>
                      <ArrowForwardIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={12} lg={6}>
              <Card
                style={{
                  display: "flex",
                  width: "100%",
                  boxShadow: "unset",
                }}
              >
                <CardMedia
                  image="/images/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                  style={{ width: "180px", height: "200px" }}
                />
                <CardContent
                  style={{
                    backgroundColor: "#F8F8F8",
                    boxShadow: "unset",
                    display: "flex",
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                >
                  <Box paddingTop="16px">
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      style={{ fontWeight: "bold" }}
                    >
                      Big
                    </Typography>
                    <Typography variant="h6" color="initial" gutterBottom>
                      Spacious Room
                    </Typography>

                    <Typography variant="body2" color="initial">
                      Fresh food directly from our restaurant ready coocked for
                      you and you familly
                    </Typography>
                  </Box>

                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    position="relative"
                    right="-1em"
                  >
                    <IconButton>
                      <ArrowForwardIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={12} lg={6}>
              <Card
                style={{
                  display: "flex",
                  width: "100%",
                  boxShadow: "unset",
                }}
              >
                <CardMedia
                  image="/images/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                  style={{ width: "180px", height: "200px" }}
                />
                <CardContent
                  style={{
                    backgroundColor: "#F8F8F8",
                    boxShadow: "unset",
                    display: "flex",
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                >
                  <Box paddingTop="16px">
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      style={{ fontWeight: "bold" }}
                    >
                      Big
                    </Typography>
                    <Typography variant="h6" color="initial" gutterBottom>
                      Spacious Room
                    </Typography>

                    <Typography variant="body2" color="initial">
                      Fresh food directly from our restaurant ready coocked for
                      you and you familly
                    </Typography>
                  </Box>

                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    position="relative"
                    right="-1em"
                  >
                    <IconButton>
                      <ArrowForwardIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={12} lg={6}>
              <Card
                style={{
                  display: "flex",
                  width: "100%",
                  boxShadow: "unset",
                }}
              >
                <CardMedia
                  image="/images/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                  style={{ width: "180px", height: "200px" }}
                />
                <CardContent
                  style={{
                    backgroundColor: "#F8F8F8",
                    boxShadow: "unset",
                    display: "flex",
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                >
                  <Box paddingTop="16px">
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      style={{ fontWeight: "bold" }}
                    >
                      Big
                    </Typography>
                    <Typography variant="h6" color="initial" gutterBottom>
                      Spacious Room
                    </Typography>

                    <Typography variant="body2" color="initial">
                      Fresh food directly from our restaurant ready coocked for
                      you and you familly
                    </Typography>
                  </Box>

                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    position="relative"
                    right="-1em"
                  >
                    <IconButton>
                      <ArrowForwardIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={12} lg={6}>
              <Card
                style={{
                  display: "flex",
                  width: "100%",
                  boxShadow: "unset",
                }}
              >
                <CardMedia
                  image="/images/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                  style={{ width: "180px", height: "200px" }}
                />
                <CardContent
                  style={{
                    backgroundColor: "#F8F8F8",
                    boxShadow: "unset",
                    display: "flex",
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                >
                  <Box paddingTop="16px">
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      style={{ fontWeight: "bold" }}
                    >
                      Big
                    </Typography>
                    <Typography variant="h6" color="initial" gutterBottom>
                      Spacious Room
                    </Typography>

                    <Typography variant="body2" color="initial">
                      Fresh food directly from our restaurant ready coocked for
                      you and you familly
                    </Typography>
                  </Box>

                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    position="relative"
                    right="-1em"
                  >
                    <IconButton>
                      <ArrowForwardIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={12} lg={6}>
              <Card
                style={{
                  display: "flex",
                  width: "100%",
                  boxShadow: "unset",
                }}
              >
                <CardMedia
                  image="/images/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                  style={{ width: "180px", height: "200px" }}
                />
                <CardContent
                  style={{
                    backgroundColor: "#F8F8F8",
                    boxShadow: "unset",
                    display: "flex",
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                >
                  <Box paddingTop="16px">
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      style={{ fontWeight: "bold" }}
                    >
                      Big
                    </Typography>
                    <Typography variant="h6" color="initial" gutterBottom>
                      Spacious Room
                    </Typography>

                    <Typography variant="body2" color="initial">
                      Fresh food directly from our restaurant ready coocked for
                      you and you familly
                    </Typography>
                  </Box>

                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    position="relative"
                    right="-1em"
                  >
                    <IconButton>
                      <ArrowForwardIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={12} lg={6}>
              <Card
                style={{
                  display: "flex",
                  width: "100%",
                  boxShadow: "unset",
                }}
              >
                <CardMedia
                  image="/images/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                  style={{ width: "180px", height: "200px" }}
                />
                <CardContent
                  style={{
                    backgroundColor: "#F8F8F8",
                    boxShadow: "unset",
                    display: "flex",
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                >
                  <Box paddingTop="16px">
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      style={{ fontWeight: "bold" }}
                    >
                      Big
                    </Typography>
                    <Typography variant="h6" color="initial" gutterBottom>
                      Spacious Room
                    </Typography>

                    <Typography variant="body2" color="initial">
                      Fresh food directly from our restaurant ready coocked for
                      you and you familly
                    </Typography>
                  </Box>

                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    position="relative"
                    right="-1em"
                  >
                    <IconButton>
                      <ArrowForwardIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
