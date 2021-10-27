import { createTheme } from "@material-ui/core";
import { grey, pink } from "@material-ui/core/colors";


export const theme = createTheme({
    palette: {
        primary: {
            main: grey[900]
        },
        secondary: {
            main: pink[400],
        },
    }
});