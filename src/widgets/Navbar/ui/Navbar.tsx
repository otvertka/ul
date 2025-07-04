import { classNames } from "shared/lib/classNames/classNames"
import cls from './Navbar.module.scss'
// import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { LoginModal } from "features/AuthByUserName";


interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] =useState(false);

    const onCloseModal = useCallback(()=> {
        setIsAuthModal(false)
    }, []);

    const onShowModal = useCallback(()=> {
        setIsAuthModal(true)
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}>
                {t('Anmelden')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <LoginModal 
                isOpen ={isAuthModal}
                onClose={onCloseModal}/>
        </div>
    )
}
