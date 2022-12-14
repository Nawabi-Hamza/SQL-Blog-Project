import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

const pages = ['Home', 'Contact','write', 'register','login'];

function NavBarSection() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="sticky" style={{backgroundColor:"brown"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img alt="logo" src="data:image/png;base64,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" style={{height:"40px"}}/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                "^:hover":{color:"gray"}
              }}
            >
              {pages.map((page) => (
            <Link to={"/"+page} style={{textDecoration:"none",color:"black","&:hover":{color:"gray"}}}> <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            
              
            }}
          >
            SQL Project
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,right:"0px" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' ,"&:hover":{fontWeight:"700",color:"black"}}}
                href={page} 
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    // <>kjsadfhkasdj</>
  );
}
// export default ResponsiveAppBar;
export default NavBarSection;