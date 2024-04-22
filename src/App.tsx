import {useContext} from "react";
//import {Route, Routes} from 'react-router-dom'

import './styles/index.scss'
import {useTheme} from "./theme/useTheme";
import cn from "./utils/classNames";


export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return <div className={cn('app', theme)}>
        <button onClick={toggleTheme}>Переключить тему</button>

    </div>
}