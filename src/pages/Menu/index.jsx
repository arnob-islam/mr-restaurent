import React, { useReducer, useEffect } from 'react'
import { useInView } from "react-intersection-observer";
import Menu from './Menu.data';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SectionTitle from '../../components/SectionTitle';
import { motion, useAnimation } from "framer-motion";
import Tooltip from '@material-ui/core/Tooltip';



function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            className='menu_body'
            animate={controls}
            initial="hidden"
            transition={{ type: 'spring', stiffness: 700 }}
            variants={{
                visible: { x: '0' },
                hidden: { x: '-20%' }
            }}
        >
            {children}
        </motion.div>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: 'white',
    },
    appStick: {
        background: 'white',
        boxShadow: 'none'
    }
}));

const reducer = (state, action) => {

    if (action.type === 'all') {
        return Menu
    }
    const newItem = Menu.filter(e => {
        return (e.catagory === action.type)
    })
    return newItem


}

const App = () => {
    const ButtonsText = ['all', ...new Set(Menu.map(cata => cata.catagory))]
    const [MenuData, dispatch] = useReducer(reducer, Menu)

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className='our_menu'>
            <SectionTitle small='our menu' big='spacial menu' />
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="button-container col-6">
                        <div className={classes.root}>
                            <AppBar position="static" color="default" className={classes.appStick}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    aria-label="scrollable auto tabs example"
                                >
                                    {ButtonsText.map((button, index) => {
                                        return (
                                            <Tab label={button} onClick={() => (dispatch({ type: button }))} key={index} {...a11yProps(0)} />
                                        )
                                    })}

                                </Tabs>
                            </AppBar>

                        </div>


                    </div>
                </div>
                <div className="body-wrapper row"  >
                    {MenuData.map(items => {
                        return (
                            <FadeInWhenVisible key={items.id}>
                                <div className="img_container">
                                    <img src={items.img} className='img-fluid' alt="" />
                                </div>
                                <div className="item_description">
                                    <Tooltip title={items.condition} arrow>
                                        <div className="description">
                                            <span className="title_span">
                                                {items.title}
                                            </span>
                                            {items.condition ? <span className='menu_badge'>{items.condition}</span> : ''}
                                        </div>
                                    </Tooltip>


                                    <div className="price_container">
                                        <span className="title_span">
                                            {`€ ${items.price}`}
                                        </span>
                                    </div>
                                </div>                            </FadeInWhenVisible>

                        )
                    })}
                </div>

            </div>


        </section>
    )
}





export default App