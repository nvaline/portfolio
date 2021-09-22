import React, { useState } from 'react';
import {
  Drawer,
  Button,
  Box,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Nav = () => {
    const [state, setState] = React.useState({
      right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {['Home', 'My Stack', 'About Me', 'Projects', 'Contact'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    );

    return (
      <div>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}><i class="fas fa-bars"></i></Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    );
};

export default Nav;