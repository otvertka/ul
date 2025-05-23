import { classNames } from "shared/lib/classNames/classNames";
import { FC } from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from "shared/ui/Button/Button";



interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props

    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <DarkIcon width={40} height={40} /> : <LightIcon width={40} height={40} />}
        </Button>
    );
};
