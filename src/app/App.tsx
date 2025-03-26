
import './styles/index.scss'
import { Link } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/ThemeProvider/router";



const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>

            <button onClick={toggleTheme}>THEME Toggle</button>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About site</Link>
            <AppRouter />
        </div>
    )
}

export default App