import * as React from "react";

import { Box, Container, Hidden, Link, useMediaQuery } from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import theme from "../theme";

export default function Header() {
  const isNotHandHeld = useMediaQuery(theme.breakpoints.up("lg"));
  const routes = [
    { title: "Home", route: "/", children: [] },
    { title: "Rooms", route: "/", children: [] },
    { title: "Restaurants", route: "/", children: [] },
    { title: "About Us", route: "/", children: [] },
    { title: "Blog", route: "/", children: [] },
    { title: "Contact", route: "/", children: [] },
  ];
  return (
    <AppBar position="sticky" color="transparent">
      <Toolbar>
        <Container disableGutters={!isNotHandHeld}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6" color="textSecondary">
              Zetta Hotels
            </Typography>

            <Hidden mdDown>
              <Box
                width="80%"
                //   bgcolor="yellow"
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
              >
                {routes.map((r, i) => (
                  <Link
                    href={r.route}
                    key={i.toString()}
                    style={{ margin: "0 16px" }}
                  >
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{ textTransform: "uppercase", fontWeight: 400 }}
                    >
                      {r.title}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Hidden>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
