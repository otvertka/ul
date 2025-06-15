import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next"

interface AboutPageProps {
    someProp?: string
}

const AboutPage = (props: AboutPageProps) => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('über die Seite')}
            <Counter/>
        </div>
    )
}

export default AboutPage