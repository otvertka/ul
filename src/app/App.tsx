
import './styles/index.scss'

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/ThemeProvider/router";
import { Navbar } from 'widgets/Navbar';



const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>

            <Navbar />
            <AppRouter />

        </div>
    )
}

export default App