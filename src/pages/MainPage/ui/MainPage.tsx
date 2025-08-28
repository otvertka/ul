import { memo, useState } from "react";
import { useTranslation } from "react-i18next"

interface MainPageProps {
    someProp?: string
}

const MainPage = memo((props: MainPageProps) => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val)
        console.log(val)
    }

    return (
        <div> 
            {t('Startseite')}
        </div>
    )
})

export default MainPage;

