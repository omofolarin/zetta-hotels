import * as React from "react";

import {
  Box,
  Container,
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";

import Header from "./header";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
      [theme.breakpoints.down("sm")]: {
        height: "105vh",
      },

      [`@media only screen and (max-height: 640px) and (max-width: 360px)`]: {
        height: "135vh",
      },
    },
    container: {
      backgroundImage: "url(/images/banner.png)",
      width: "100%",
      height: "80vh",

      [theme.breakpoints.up("xl")]: {
        height: "53vh",
      },
    },

    heroText: {
      padding: "4em 0",
      width: "100%",

      [theme.breakpoints.up("lg")]: {
        padding: "5.5em 0",
        width: "40%",
      },
      [theme.breakpoints.up("xl")]: {
        width: "60%",
      },
    },

    heroCaption: {
      fontSize: "4em",
      fontWeight: 600,
      fontFamily: "Poppins",

      [theme.breakpoints.down("sm")]: {
        fontSize: "3em",
      },
    },
  })
);

interface HeroProps {
  children: React.ReactNode;
}

export default function Hero(props: HeroProps) {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Header />
        <Container>
          <Box className={classes.heroText}>
            <Typography
              variant="h1"
              color="textSecondary"
              className={classes.heroCaption}
            >
              The best hotel you will ever need
            </Typography>

            <Box padding="16px 0">
              <Typography variant="subtitle2" color="textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Box>
          </Box>
        </Container>

        {children}
      </div>
    </div>
  );
}

interface PageHeroProps {
  title: String;
  breadcrumbs: String;
}

const usePageStyles = makeStyles((theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
      [theme.breakpoints.down("sm")]: {
        height: "105vh",
      },

      [`@media only screen and (max-height: 640px) and (max-width: 360px)`]: {
        height: "135vh",
      },
    },

    pageRoot: {
      minHeight: "50vh",
      [theme.breakpoints.down("sm")]: {
        height: "35vh",
      },

      [`@media only screen and (max-height: 640px) and (max-width: 360px)`]: {
        height: "55vh",
      },
    },

    container: {
      backgroundImage: "url(/images/banner.png)",
      width: "100%",
      height: "40vh",

      [theme.breakpoints.up("xl")]: {
        height: "43vh",
      },
    },

    heroText: {
      padding: "4em 0",
      width: "100%",

      [theme.breakpoints.up("lg")]: {
        padding: "5.5em 0",
        width: "40%",
      },
      [theme.breakpoints.up("xl")]: {
        width: "60%",
      },
    },

    heroCaption: {
      fontSize: "4em",
      fontWeight: 600,
      fontFamily: "Poppins",

      [theme.breakpoints.down("sm")]: {
        fontSize: "3em",
      },
    },
  })
);

export function PageHero(props: PageHeroProps) {
  const classes = usePageStyles();
  const { breadcrumbs, title } = props;

  return (
    <div className={classes.pageRoot}>
      <div className={classes.container}>
        <Header />

        <Container>
          <Box className={classes.heroText}>
            <Typography
              variant="h1"
              color="textSecondary"
              className={classes.heroCaption}
            >
              {title}
            </Typography>

            <Box padding="16px 0">
              <Typography variant="subtitle1" color="textSecondary">
                {breadcrumbs}
              </Typography>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}
