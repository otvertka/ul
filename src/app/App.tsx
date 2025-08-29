import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/ThemeProvider/router";
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { useDispatch } from "react-redux";
import { userActions } from "entities/User/model/slice/userSlice";

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    // const [isOpen, setIsOpen] = useState(false);

    useEffect(()=> {
        dispatch(userActions.initAuthData());
    }, [dispatch])


    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                {/* <button onClick={()=> setIsOpen(true)}>toggle</button> */}
            
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>

        </div>
    )
}

export default App