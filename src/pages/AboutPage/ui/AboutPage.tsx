import { useTranslation } from "react-i18next"


const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('über die Seite')}
        </div>
    )
}

export default AboutPage