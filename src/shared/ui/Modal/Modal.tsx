import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "../Portal/Portal";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: ()=> void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300

export const Modal = ( props : ModalProps) => {
    const {className, children, isOpen, onClose, lazy} = props;
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();


    useEffect(()=> {
        if(isOpen) {
            setIsMounted(true)
        }   
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            onClose();
            setIsClosing(false);
            timerRef.current = setTimeout(()=> {
                onClose()
            }, ANIMATION_DELAY)
        }
    }, [onClose] )

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler])

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    useEffect( () => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return ()=> {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    };

    if(lazy && !isMounted) {
        return null;
    }


    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>

                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};