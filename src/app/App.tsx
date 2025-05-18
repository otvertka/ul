
import './styles/index.scss'

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/ThemeProvider/router";
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

const App = () => {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);




    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <button onClick={()=> setIsOpen(true)}>toggle</button>
                <Modal isOpen ={isOpen} onClose={()=> setIsOpen(false)}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptas pariatur tenetur obcaecati. Quos fugiat debitis laudantium ipsam nesciunt ea quaerat adipisci saepe enim, molestias architecto. Eligendi possimus natus a quam nesciunt amet, harum repudiandae dicta quae dolor quisquam tempore vel similique minima distinctio consequatur perferendis. Velit voluptatem nostrum delectus blanditiis suscipit distinctio esse odit numquam aperiam nisi obcaecati adipisci, rerum animi doloribus officiis facilis natus quo exercitationem est dignissimos perferendis? Nisi eligendi deleniti itaque. Nostrum delectus accusamus quibusdam, facere atque commodi maxime vitae ducimus velit necessitatibus hic earum explicabo tempora fugiat nisi alias a vel provident vero obcaecati quidem.
                </Modal>
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>

        </div>
    )
}

export default App