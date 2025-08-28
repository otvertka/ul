import { classNames } from "shared/lib/classNames/classNames"
import cls from './Navbar.module.scss'
// import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { memo, useCallback, useState } from "react";
import { LoginModal } from "features/AuthByUserName";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { userActions } from "entities/User/model/slice/userSlice";


interface NavbarProps {
    className?: string;
}

export const Navbar = memo (({ className }: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] =useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(()=> {
        setIsAuthModal(false)
    }, []);

    const onShowModal = useCallback(()=> {
        setIsAuthModal(true)
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData)  {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
        <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            className={cls.links}
            onClick={onLogout}>
            {t('hinausgehen')}
        </Button>
            </div>
        )
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}>
                {t('Anmelden')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
           {isAuthModal && <LoginModal 
                isOpen ={isAuthModal}
                onClose={onCloseModal}/>}
        </div>
    )
})
