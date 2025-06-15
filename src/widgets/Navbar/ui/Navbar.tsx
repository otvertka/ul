import { classNames } from "shared/lib/classNames/classNames"
import cls from './Navbar.module.scss'
// import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";


interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] =useState(false);

    const onToggleModal = useCallback(()=> {
        setIsAuthModal((prev) => !prev)
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}>
                {t('Anmelden')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen ={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptas pariatur tenetur obcaecati. Quos fugiat debitis laudantium ipsam nesciunt ea quaerat adipisci saepe enim, molestias architecto. Eligendi possimus natus a quam nesciunt amet, harum repudiandae dicta quae dolor quisquam tempore vel similique minima distinctio consequatur perferendis. Velit voluptatem nostrum delectus blanditiis suscipit distinctio esse odit numquam aperiam nisi obcaecati adipisci, rerum animi doloribus officiis facilis natus quo exercitationem est dignissimos perferendis? Nisi eligendi deleniti itaque. Nostrum delectus accusamus quibusdam, facere atque commodi maxime vitae ducimus velit necessitatibus hic earum explicabo tempora fugiat nisi alias a vel provident vero obcaecati quidem.
            </Modal>
        </div>
    )
}
