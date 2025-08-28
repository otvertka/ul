import { memo } from "react";
import { useTranslation } from "react-i18next"

interface AboutPageProps {
    someProp?: string
}

const AboutPage = memo ((props: AboutPageProps) => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('über die Seite')}
        </div>
    )
})

export default AboutPage