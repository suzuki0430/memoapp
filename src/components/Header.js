import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  input: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();

  const [token, setToken] = useState('');

  const handleChange = (e) => {
    setToken(e.target.value);
  };

  const isLoginEnabled = (str) => {
    const ratz =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

    return !ratz.test(str);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Memo App
          </Typography>
          <Input
            id="access_token"
            className={classes.input}
            type="text"
            placeholder="0f28d368-4347-4653-b4b6-94392e644444"
            value={token}
            onChange={handleChange}
          />
          <Button id="login" color="inherit" disabled={isLoginEnabled(token)}>
            LOGIN
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
