import { useTranslation } from "react-i18next"
interface MainPageProps {
    someProp?: string
}

const MainPage = (props: MainPageProps) => {

    const { t } = useTranslation('main');
    return (
        <div> 
            {t('Startseite')}
        </div>
    )
}
export default MainPage;

