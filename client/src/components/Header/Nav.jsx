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
import {
  Home as HomeIcon,
  Devices as StackIcon,
  EmojiPeople as AboutIcon,
  Folder as ProjectsIcon,
  AlternateEmail as ContactIcon
} from '@mui/icons-material'

const Nav = () => {
    const [state, setState] = useState({
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

    const getIcon = (index) => {
      switch (index) {
        case 0:
           return <HomeIcon />
          break;
        case 1:
          return <StackIcon />
          break;
        case 2:
          return <AboutIcon />
          break;
        case 3:
          return <ProjectsIcon />
          break;
        case 4:
          return <ContactIcon />
          break;
        default:
      }
    }

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
                { getIcon(index) }
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
            <Button onClick={toggleDrawer(anchor, true)}><i className="fas fa-bars"></i></Button>
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