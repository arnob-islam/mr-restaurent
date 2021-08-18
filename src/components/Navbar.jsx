import React from 'react'
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import HorizontalSplitOutlinedIcon from '@material-ui/icons/HorizontalSplitOutlined';
import { motion } from "framer-motion";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    for_Link: {
        display: 'flex',
        textDecoration: 'none',
        textTransform: 'capitalize',
        color: '#828282'
    },
    initial_color: {
        background: 'white',
        color: 'black',
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 0%), 0px 4px 5px 0px rgb(0 0 0 / 2%), 0px 1px 10px 0px rgb(0 0 0 / 10%) !important'
    },
    navBranding: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        color: '#494982',
        cursor: 'pointer',
        fontSize: '1.2rem',
        margin: '0'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const Navbar = () => {


    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (

        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, classes.initial_color, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <motion.h6 initial={{ y: '-100%' }} animate={{ y: 0 }} className={classes.navBranding}>
                        <img className='logo__' src="/image/slack.png" alt="logo" />
                        <span>
                            Mr Restaurant </span>
                    </motion.h6>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>

                    <ListItem button>
                        <Link className={classes.for_Link} to="/">
                            <ListItemIcon>{<DashboardOutlinedIcon />}</ListItemIcon>
                            <ListItemText primary={'home'} />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link className={classes.for_Link} to="/about/us/">
                            <ListItemIcon>{<HorizontalSplitOutlinedIcon />}</ListItemIcon>
                            <ListItemText primary={'About'} />
                        </Link>
                    </ListItem>

                </List>
                <Divider />

            </Drawer>

        </div>
    )
}

export default Navbar