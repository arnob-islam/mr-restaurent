import React, { useReducer } from 'react'
import './index.css'
import SettingSvg from './svg';
import Button from '@material-ui/core/Button';
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';


const reducer = (state, action) => {
    if (action.type === 'default_color') {
        return {
            color_name: action.payload
        }
    }
    return state
}

const initialState = {
    color_name: ''
}
const Index = () => {
    const [openColorToggle, setopenColorToggle] = React.useState(false)
    const SetLocaion = useLocation()
    const [state, dispatch] = useReducer(reducer, initialState)



    const Colors = ['#9acd32', '#ffcd38', '#a878ff', '#d4029d', '#2fc0d1']

    const handleColor = (e) => {
        dispatch({ type: 'default_color', payload: e })
        const _A = document.querySelectorAll('a')
        const _H1 = document.querySelectorAll('h1')
        const _H2 = document.querySelectorAll('h2')
        const _H3 = document.querySelectorAll('h3')
        const _H4 = document.querySelectorAll('h4')
        const _H5 = document.querySelectorAll('h5')
        const _H6 = document.querySelectorAll('h5')
        const _I = document.querySelectorAll('i')
        const _SVG = document.querySelectorAll('svg')
        const SvgStroke = document.querySelectorAll('.cls-3, .cls-4, .cls-5') // for svg fill and stroke
        function Element(tag, color) {
            return tag.forEach(e => {
                e.style.color = color
                e.style.stroke = color
                e.style.fill = color
                e.style.borderColor = color
            })
        }
        Element(_H1, e)
        Element(_H2, e)
        Element(_H3, e)
        Element(_H4, e)
        Element(_H5, e)
        Element(_H6, e)
        Element(_I, e)
        Element(_SVG, e)
        Element(_A, e)
        Element(SvgStroke, e)
    }

    React.useEffect(() => {
        handleColor(state.color_name)
    }, [SetLocaion, state.color_name])

    return (
        <div className='color_container'>
            <div className={openColorToggle ? 'color_wrapper Opentranslate' : 'color_wrapper'}>
                <div className="setting_Svg">
                    <Button variant="outlined" onClick={() => setopenColorToggle(!openColorToggle)} className='svg_button'>
                        <SettingSvg className='setting_color_svg' />
                    </Button>
                </div>
                {openColorToggle && <div className="color_body" >
                    {Colors.map((e, index) => {
                        return (
                            <motion.div animate={{ width: '4rem', }} initial={{ width: '0' }} transition={{ type: 'spring', stiffness: 700 }} className="single_color" key={index} >
                                <Button variant="outlined" onClick={() => handleColor(e)} className='color_btn' style={{ background: e }}>

                                </Button>
                            </motion.div>
                        )
                    })}
                </div>}
            </div>
        </div>
    )
}

export default Index