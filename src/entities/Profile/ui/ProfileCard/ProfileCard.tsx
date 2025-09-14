import { useTranslation } from "react-i18next";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";

import { Currency, CurrencySelect } from "entities/Currency";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Profile } from '../../model/types/profile';
import { Country, CountrySelect } from "entities/Country";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readOnly?: boolean;
  onChangeFirstname?: (value?: string)=> void;
  onChangeLastname?: (value?: string)=> void;
  onChangeAge?: (value?: string)=> void;
  onChangeCity?: (value?: string)=> void;
  onChangeUsername?: (value?: string)=> void;
  onChangeAvatar?: (value?: string)=> void;
  onChangeCurrency?: (currency?: Currency)=> void;
  onChangeCountry?: (country?: Country)=> void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        isLoading,
        error,
        readOnly, 
        onChangeFirstname, 
        onChangeLastname, 
        onChangeAge, 
        onChangeCity,
        onChangeUsername, 
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {[cls.loading]: true}, [className])}>
                <Loader/> 
            </div>
        )
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Beim Laden Ihres Profils ist ein Fehler aufgetreten.')}
                    text= {t('Versuchen Sie, die Seite zu aktualisieren')}
                    align= {TextAlign.CENTER}/> 
            </div>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readOnly,
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src = {data?.avatar}/>
                    </div>
                )}
                <Input
                    value={data?.first} 
                    placeholder={t('Ihre Nachname')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readOnly={readOnly}/>
                <Input
                    value={data?.lastname} 
                    placeholder={t('Ihre Name')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readOnly={readOnly}/>
                <Input
                    value={data?.age} 
                    placeholder={t('Ihre Alter')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readOnly={readOnly}/>
                <Input
                    value={data?.city} 
                    placeholder={t('Stadt')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readOnly={readOnly}/>
                <Input
                    value={data?.username} 
                    placeholder={t('Ihre Nickname')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readOnly={readOnly}/>
                <Input
                    value={data?.avatar} 
                    placeholder={t('Ihre Avatar')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readOnly={readOnly}/>
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readOnly}/>
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readOnly}/>
            </div>
        </div>
    );
};