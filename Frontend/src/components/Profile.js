import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ForumIcon from '@mui/icons-material/Forum';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { AvatarGroup } from '@mui/material';
import Post from './Post';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  [theme.breakpoints.up('md')]:{
    height:'100%'
  }
}));
const drawerWidth = 240;
function Profile(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  let iconsup=[<HomeIcon />,<AccountBoxIcon />,<SearchIcon />,<AddIcon />,<NotificationsIcon />,<ForumIcon />];
  let iconsdown=[<SettingsIcon />,<LogoutIcon />];
  const drawer = (
    <div>
      <Divider />
      <List>
        {['Home', 'Profile', 'Explore', 'New Post','Notifications','Messages'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {iconsup[index]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Settings', 'Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {iconsdown[index]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ display: 'flex',height:'100%' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Connectify
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
<Grid container style={{height:"90%"}}>
  <Grid item xs={12} md={4}>
    <Item>
    <Toolbar>
        <Grid container>
            <Grid item xs={10} display={"flex"}>
          <Typography alignItems="center" justifyContent="center" style={{textAlign:"left"}}>Mahir Jain</Typography>
            </Grid>
            <Grid item xs={2}>
<IconButton><MoreHorizIcon /></IconButton>
            </Grid>
        </Grid>
    </Toolbar>
    <Grid container>
        <Grid item xs={12}>
        <center><Avatar sx={{ width: 150, height: 150 }} alt="Mahir Jain" src="./images/profile.jpeg" /></center>
        </Grid>
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Typography style={{textAlign:"center"}}>Followers</Typography>
                    <Typography style={{textAlign:"center"}}>400</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                <Typography style={{textAlign:"center"}}>Following</Typography>
                <Typography style={{textAlign:"center"}}>300</Typography>
                </Grid>
                <Grid item xs={12} md={4} style={{textAlign:"center"}}>
                <Typography>Posts</Typography>
                <Typography style={{textAlign:"center"}}>64</Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    <br />
    <Divider />
    <br />
    <Toolbar>
    <Grid container>
            <Grid item xs={12} display={"flex"}>
          <Typography style={{textAlign:"left"}}>About Me</Typography>
            </Grid>
            <Grid item xs={12}>
          <Typography style={{textAlign:'left'}}>
            My name is Mahir Jain. I like posting content on connectify. I want to reach 100M Followers.
          </Typography>
            </Grid>
    </Grid>
    </Toolbar>
    <br />
    <Divider />
    <br />
    <Toolbar>
    <Grid container>
            <Grid item xs={12}>
          <Typography style={{textAlign:"left"}}>Stories</Typography>
            </Grid>
            <Grid item>
            <AvatarGroup max={4}>
  <Avatar alt="Mountain" src="./images/mountain.jpeg" />
  <Avatar alt="Reel" src="./images/reel.jpeg" />
  <Avatar alt="Laugh" src="./images/laugh.jpeg" />
  <Avatar alt="Chemistry" src="./images/chemistry.jpeg" />
  <Avatar alt="Profile" src="./images/profile.jpeg" />
</AvatarGroup>
            </Grid>
    </Grid>
    </Toolbar>
    </Item>
  </Grid>
  <Grid item xs={12} md={8} style={{padding:'2px',maxHeight:"100%",overflowY:'scroll'}}>
    <Item style={{overflowY:'scroll'}}>
         <Grid container >
            <Grid item xs={12} md={6}>
              <Post></Post>
            </Grid>
            <Grid item xs={12} md={6}>
              <Post></Post>
            </Grid>
            <Grid item xs={12} md={6}>
              <Post></Post>
            </Grid>
          </Grid> 
    </Item>
  </Grid>
</Grid>
      </Box>
    </Box>
    </ThemeProvider>
  );
}

export default Profile;
