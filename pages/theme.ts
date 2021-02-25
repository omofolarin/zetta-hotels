import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      contained: {
        borderRadius: 0,
        textTransform: "capitalize",
      },
    },

    MuiIconButton: {
      root: {
        backgroundColor: "#5863F8",
        borderRadius: 0,
        color: "#fff",
      },
    },

    MuiTypography: {
      colorTextSecondary: {
        color: "#fff",
      },
    },
  },
  palette: {
    primary: {
      main: "#5863F8",
    },

    background: {
      default: "#fff",
    },

    text: {},
  },

  props: {
    MuiButton: {
      disableElevation: true,
      variant: "contained",
      color: "primary",
    },
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

export default theme;
