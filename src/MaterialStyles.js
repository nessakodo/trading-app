import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  listItem: {
    color: theme.palette.text.secondary,
  },
  listItemActive: {
    color: theme.palette.primary.main,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  container: {
    marginTop: theme.spacing(2),
  },
}));
