import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import {  useSelector, useStore } from "react-redux";
import { memo, useCallback, useEffect } from "react";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername.test.ts/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { ReduxStoreWithManager } from "app/providers/StoreProvider/config/StateSchema";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm =  memo (({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch()
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    

    const onChangeUsername = useCallback((value: string)=> {
        dispatch(loginActions.setUsername(value))
    },[dispatch]);

    const onChangePassword = useCallback((value: string)=> {
        dispatch(loginActions.setPassword(value))
    },[dispatch]);

    const onLoginClick = useCallback( async () => {
        const result = await dispatch(loginByUsername({username, password}));
        console.log(result);
        if (result.meta .requestStatus === 'fulfilled') {
            onSuccess();
        }
    },[onSuccess, dispatch, password, username] );



    return (

        <DynamicModuleLoader removeAfterUnmount = {true} reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title = {t('Autorisierungsformular')}/>    
                {error && <Text text ={t('Benutzername oder Passwort ist falsch.')} theme ={TextTheme.ERROR}/>}
                <Input 
                    type="text" 
                    className={cls.input}
                    placeholder={t('Namen eingeben')}
                    onChange={onChangeUsername}
                    value = {username}/>
                <Input 
                    type="text" 
                    className={cls.input}
                    placeholder={t('Passwort eingeben')}
                    autoFocus onChange={onChangePassword}
                    value={password}/>
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled ={isLoading}>
                    {t('Login')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
}
)


export default LoginForm;