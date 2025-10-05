import { useTheme } from "app/providers/ThemeProvider";
import { getUserInited } from "entities/User";
import { userActions } from "entities/User/model/slice/userSlice";
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from "./providers/router";

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

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
                    { inited && <AppRouter /> } 
                </div>
            </Suspense>

        </div>
    )
}

export default App