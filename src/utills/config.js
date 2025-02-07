import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            greeting: 'HOME',
            ab: 'ABOUT US',
            pt: 'PARTNERS',
            ser: 'SERVICES',
            ex: 'EXPERIENCES',
            cu: 'CONTACT US',
            headerH: 'SMART New Horizons for your Business',
            headerP: 'The ultimate solution for expanding your business worldwide.',
            sec1H1: 'Along with your dreams:',
            sec1P1: 'SMART specializes in consulting services for all industries.',
            sec1H2: 'Prestige, quality for your projects:',
            sec1P2: 'SMART develops projects with the support of highly qualified consultants, selected for their brilliant national and international experience.',
            sec1H3: 'Your business verywhere, now:',
            sec1P3: 'SMART is designed to be borderless to collaborate with companies all around the globe.',
            sec1H4: 'The perfect match for your needs:',
            sec1P4: 'SMART does not provide pre-packaged solutions, but implements a specific development plan, based on the customer is needs.',
            sec1H5: 'The ecogreen path:',
            sec1P5: 'SMART believes in new technologies, and turns to the best markets to supply you with the best services to minimize the environmental impacts.',
            ad: 'Headquarter: Viale Vittorio Veneto 80 presso Studio G.B., 59100 Prato (PO), Italia; Office: Via G.Meoni 11, 59100 Prato(PO), Italia',
            ab_d1: 'SMART is a revolutionary company created in March 2015 by visionary Emanuele Cecchi, with the goal of enhancing businesses worldwide.',
            ab_d2: 'We provide a diverse range of services to our clients, counting on a team of extensively qualified consultants from various countries. They are chosen for their extensive expertise in their respective fields and their adept problem-solving abilities, along with partnerships with SMART is international collaborators.',
            ab_d3: 'Our consultants engage closely with clients throughout every phase of their operations, collaborating from the very beginning to develop the most tailored improvement strategies to create opportunities of growth.',

        },
    },
    fr: {
        translation: {
            greeting: 'ACCUEIL',
            ab: 'DÉCOUVREZ-NOUS',
            pt: 'Partenaires',
            ser: 'SERVICES',
            ex: 'EXPÉRIENCES',
            cu: 'CONTACTEZ-NOUS',
            headerH: 'SMART De Nouveaux Horizons pour Votre Entreprise',
            headerP: 'La solution ultime pour étendre votre entreprise àl échelle mondiale.',
            sec1H1: 'Avec vos rêves:',
            sec1P1: 'SMART se spécialise dans les services de consultation pour tous les secteurs d activité.',
            sec1H2: 'Prestige, qualité pour vos projets:',
            sec1P2: 'SMART développe des projets avec le soutien de consultants hautement qualifiés, sélectionnés pour leur brillante expérience nationale et internationale.',
            sec1H3: 'Votre entreprise partout, maintenant:',
            sec1P3: 'SMART est conçu pour être sans frontières afin de collaborer avec des entreprises du monde entier.',
            sec1H4: 'La correspondance parfaite pour vos besoins:',
            sec1P4: 'SMART ne fournit pas de solutions pré-emballées, mais met en œuvre un plan de développement spécifique, basé sur les besoins du client.',
            sec1H5: 'La voie écologique:',
            sec1P5: 'SMART croit en les nouvelles technologies et se tourne vers les meilleurs marchés pour vous fournir les meilleurs services afin de minimiser les impacts environnementaux.',
            ad: 'Siège Social: Viale Vittorio Veneto 80 chez Studio G.B., 59100 Prato (PO), Italie; Bureau: Via G.Meoni 11, 59100 Prato(PO), Italie',
            ab_d1: 'SMART est une entreprise révolutionnaire créée en mars 2015 par le visionnaire Emanuele Cecchi, dans le but d améliorer les entreprises dans le monde entier.',
            ab_d2: 'Nous offrons une gamme diversifiée de services à nos clients, en nous appuyant sur une équipe de consultants hautement qualifiés provenant de différents pays. Ils sont choisis pour leur vaste expérience dans leurs domaines respectifs et leurs compétences expertes en résolution de problèmes, ainsi que pour les partenariats avec les collaborateurs internationaux de SMART.',
            ab_d3: 'Nos consultants collaborent étroitement avec les clients à chaque phase de leurs opérations, en travaillant dès le début pour développer les stratégies d amélioration les plus adaptées et créer des opportunités de croissance.',

        },
    },
    it: {
        translation: {
            greeting: 'HOME',
            ab: 'CHI SIAMO',
            pt: 'Partner',
            ser: 'I nostri servizi',
            ex: 'ESPERIENZE',
            cu: 'CONTATTACI',
            headerH: 'SMART Nuovi Orizzonti per il tuo Business',
            headerP: 'La soluzione definitiva per espandere la tua attività in tutto il mondo.',
            sec1H1: 'Insieme ai tuoi sogni:',
            sec1P1: 'SMART si specializza nei servizi di consulenza per tutte le industrie.',
            sec1H2: 'Prestigio, qualità per i tuoi progetti:',
            sec1P2: 'SMART sviluppa progetti con il supporto di consulenti altamente qualificati, selezionati per la loro brillante esperienza nazionale e internazionale.',
            sec1H3: 'Il tuo business ovunque, ora:',
            sec1P3: 'SMART è progettato per essere senza confini per collaborare con aziende di tutto il mondo.',
            sec1H4: 'La combinazione perfetta per le tue esigenze: ',
            sec1P4: 'SMART non fornisce soluzioni preconfezionate, ma implementa un piano di sviluppo specifico, basato sulle esigenze del cliente.',
            sec1H5: 'La strada ecologica:',
            sec1P5: 'SMART crede nelle nuove tecnologie e si rivolge ai migliori mercati per fornirti i migliori servizi per ridurre al minimo gli impatti ambientali.',
            ad: 'Sede Legale: Viale Vittorio Veneto 80 presso Studio G.B., 59100 Prato (PO), Italia; Ufficio: Via G.Meoni 11, 59100 Prato(PO), Italia',
            ab_d1: 'SMART è un azienda rivoluzionaria creata nel marzo 2015 dal visionario Emanuele Cecchi, con lobiettivo di potenziare le imprese in tutto il mondo.',
            ab_d2: 'Forniamo una vasta gamma di servizi ai nostri clienti, contando su un team di consulenti altamente qualificati provenienti da vari paesi. Sono scelti per la loro vasta esperienza nei rispettivi settori e le loro abili capacità problem-solving, insieme alle partnership con i collaboratori internazionali di SMART.',
            ab_d3: 'I nostri consulenti sono coinvolti strettamente con i clienti in ogni fase delle loro operazioni, collaborando fin dall inizio per sviluppare le strategie di miglioramento più adatte per creare opportunità di crescita.',
        },
    },
    ru: {
        translation: {
            greeting: 'ДОМ',
            ab: 'О НАС',
            pt: 'Партнеры',
            ser: 'Услуги',
            ex: 'ОПЫТ',
            cu: 'СВЯЖИТЕСЬ С НАМИ',
            headerH: 'SMART Новые Горизонты для Вашего Бизнеса',
            headerP: 'Конечное решение для расширения вашего бизнеса по всему миру.',
            sec1H1: 'Вместе с вашими мечтами:',
            sec1P1: 'SMART специализируется на консалтинговых услугах для всех отраслей.',
            sec1H2: 'Престиж, качество для ваших проектов:',
            sec1P2: 'SMART разрабатывает проекты с поддержкой высококвалифицированных консультантов, отобранных за свой блестящий национальный и международный опыт.',
            sec1H3: 'Ваш бизнес везде, сейчас:',
            sec1P3: 'SMART создан для того, чтобы быть безграничным и сотрудничать с компаниями по всему миру.',
            sec1H4: 'Идеальное сочетание для ваших потребностей:',
            sec1P4: 'SMART не предоставляет готовых решений, а реализует конкретный план развития, основанный на потребностях клиента.',
            sec1H5: 'Экологический путь:',
            sec1P5: 'SMART верит в новые технологии и обращается к лучшим рынкам, чтобы обеспечить вас лучшими услугами для минимизации воздействия на окружающую среду.',
            ad: 'Штаб-квартира: Виале Витторио Венето 80, студия G.B., 59100 Прато (ПО), Италия; Офис: Виа Дж.Меони 11, 59100 Прато(ПО), Италия',
            ab_d1: 'SMART - революционная компания, созданная в марте 2015 года визионером Эмануэле Чекки с целью улучшения бизнеса по всему миру.',
            ab_d2: 'Мы предоставляем широкий спектр услуг нашим клиентам, полагаясь на команду высококвалифицированных консультантов из разных стран. Они выбираются за свой обширный опыт в своих областях и их умения в решении проблем, а также за партнерство с международными союзниками SMART.',
            ab_d3: 'Наши консультанты тесно сотрудничают с клиентами на всех этапах их деятельности, начиная с самого начала, чтобы разработать наиболее подходящие стратегии улучшения и создать возможности для роста.',
        },
    },
    es: {
        translation: {
            greeting: 'INICIO',
            ab: 'SOBRE NOSOTROS',
            pt: 'Socios',
            ser: 'SERVICIOS',
            ex: 'EXPERIENCIAS',
            cu: 'Contáctenos',
            headerH: 'SMART Nuevos Horizontes para su Empresa',
            headerP: 'La solución definitiva para expandir tu negocio a nivel mundial.',
            sec1H1: 'Junto con tus sueños:',
            sec1P1: 'SMART se especializa en servicios de consultoría para todas las industrias.',
            sec1H2: 'Prestigio, calidad para tus proyectos:',
            sec1P2: 'SMART desarrolla proyectos con el apoyo de consultores altamente calificados, seleccionados por su brillante experiencia nacional e internacional.',
            sec1H3: 'Tu empresa en todas partes, ahora:',
            sec1P3: 'SMART está diseñado para ser sin fronteras y colaborar con empresas de todo el mundo.',
            sec1H4: 'La combinación perfecta para tus necesidades:',
            sec1P4: 'SMART no proporciona soluciones preempaquetadas, sino que implementa un plan de desarrollo específico, basado en las necesidades del cliente.',
            sec1H5: 'El camino ecológico: ',
            sec1P5: 'SMART cree en las nuevas tecnologías y se dirige a los mejores mercados para proporcionarte los mejores servicios para minimizar los impactos ambientales.',
            ad: 'Sede Principal: Viale Vittorio Veneto 80 en el Estudio G.B., 59100 Prato (PO), Italia; Oficina: Via G.Meoni 11, 59100 Prato(PO), Italia',
            ab_d1: 'SMART es una empresa revolucionaria creada en marzo de 2015 por el visionario Emanuele Cecchi, con el objetivo de mejorar los negocios en todo el mundo.',
            ab_d2: 'Ofrecemos una amplia gama de servicios a nuestros clientes, contando con un equipo de consultores altamente calificados de diversos países. Son elegidos por su amplia experiencia en sus respectivos campos y sus habilidades expertas para resolver problemas, junto con asociaciones con colaboradores internacionales de SMART.',
            ab_d3: 'Nuestros consultores se involucran estrechamente con los clientes en cada fase de sus operaciones, colaborando desde el principio para desarrollar las estrategias de mejora más adecuadas y crear oportunidades de crecimiento.',

        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;