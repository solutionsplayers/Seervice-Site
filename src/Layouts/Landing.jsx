import React from 'react'
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import Section_1 from './Component/Section_1'
import Footer from './Component/Footer'
import { useTranslation } from 'react-i18next'

const Landing = () => {
    const { t } = useTranslation();
    // const { i18n } = useTranslation();

    return (
        <div>
            <Navbar />
            <Header title={t('headerH')} src="/main.png" description={t('headerP')} w="60%" />
            <Section_1 />
            <Footer />

        </div>
    )
}

export default Landing