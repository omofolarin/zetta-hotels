import * as React from "react";

import {
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import theme from "../pages/theme";

export default function Footer() {
  const isHandheld = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box bgcolor="#000" marginTop="-8px">
      <Container>
        <Box paddingTop="64px">
          <Grid container spacing={3}>
            <Grid item lg={5} sm={12}>
              <Typography variant="h5" color="textSecondary" gutterBottom>
                Zetta Hotels
              </Typography>

              <Box width="80%" padding="16px 0">
                <Typography
                  variant="body1"
                  color="textSecondary"
                  align="justify"
                >
                  Our hotel is an image of quality and profesionalism combined
                  with hard work and precision. You can expect only the best
                  services from our staff.
                </Typography>
              </Box>
            </Grid>

            <Grid
              container
              item
              lg={7}
              sm={12}
              direction={isHandheld ? "column" : "row"}
            >
              <Grid item sm={12} lg={3}>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Useful links
                </Typography>

                <Box>
                  <List dense>
                    <ListItem>
                      <ListItemText primary={<Link href="/">Blog</Link>} />
                    </ListItem>

                    <ListItem>
                      <ListItemText primary={<Link href="/">Rooms</Link>} />
                    </ListItem>

                    <ListItem>
                      <ListItemText primary={<Link href="/">Git Card</Link>} />
                    </ListItem>

                    <ListItem>
                      <ListItemText
                        primary={<Link href="/">Testimonials</Link>}
                      />
                    </ListItem>
                  </List>
                </Box>
              </Grid>

              <Grid item sm={12} lg={3}>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Privacy
                </Typography>
                <Box>
                  <List dense>
                    <ListItem>
                      <ListItemText primary={<Link href="/">Career </Link>} />
                    </ListItem>

                    <ListItem>
                      <ListItemText primary={<Link href="/">About us</Link>} />
                    </ListItem>

                    <ListItem>
                      <ListItemText
                        primary={<Link href="/">Contact us</Link>}
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemText primary={<Link href="/">services</Link>} />
                    </ListItem>
                  </List>
                </Box>
              </Grid>

              <Grid item sm={12} lg={3}>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Contact Info
                </Typography>

                <Box>
                  <List dense>
                    <ListItem>
                      <ListItemIcon style={{ marginRight: "-1.5em" }}>
                        <MailOutlineIcon htmlColor="#5863F8" />
                      </ListItemIcon>

                      <ListItemText
                        primary={
                          <Link href="/" style={{ color: "#fff" }}>
                            example@yahoo.com{" "}
                          </Link>
                        }
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon style={{ marginRight: "-1.5em" }}>
                        <CallOutlinedIcon htmlColor="#5863F8" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Link href="/" style={{ color: "#fff" }}>
                            +0 320 422 4254
                          </Link>
                        }
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon style={{ marginRight: "-1.5em" }}>
                        <LocationOnOutlinedIcon htmlColor="#5863F8" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Link href="/" style={{ color: "#fff" }}>
                            Main Str Chicago Ilinois
                          </Link>
                        }
                      />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
