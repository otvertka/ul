import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { memo, useCallback } from "react";
import { Country } from "../../model/types/country";


interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?:boolean;
}

const options = [
    {value: Country.Deutschland, content: Country.Deutschland},
    {value: Country.Switzerland, content: Country.Switzerland},
    {value: Country.USA, content: Country.USA},
    {value: Country.Ukraine, content: Country.Ukraine},
    
];

export const CountrySelect = memo (({ className,value,onChange,readonly }: CountrySelectProps) => {
    const { t } = useTranslation();
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select 
            className={classNames('', {}, [className])}
            label={t('Land angeben')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly ={readonly}/>
    );
});