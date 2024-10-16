import React from 'react'
import Navbar from '../Layouts/Component/Navbar';
import Header from '../Layouts/Component/Header';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { Timeline } from 'primereact/timeline';
import 'primereact/resources/primereact.min.css'; // PrimeReact CSS
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import Footer from '../Layouts/Component/Footer';
import { useTranslation } from 'react-i18next';


const About = () => {
    const theme = useTheme()
    const { t } = useTranslation()
    const data = [
        {

            description: t('ab_d1')
        },
        {
            description: t('ab_d2')
        },
        {
            description: t('ab_d3')
        },

    ]


    return (
        <div>
            <Navbar />
            <Header title="ABOUT US" src="/main.png" align="center" w="100%" />
            {/* <Box sx={{ padding: '100px 50px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Typography><span style={{ fontWeight: 700 }}>SMART,</span> the most advanced company for the development of companies in the textile sector, from production to retail.</Typography>
                <Typography>Our range of services supports all new projects from the development of new factories and innovative processes to strategic consulting.</Typography>


                <Typography>We are specialized in consulting services for the textile, mechanical, automotive, oil & gas industry, from the improvement of production activities to the development of new product lines.</Typography>
                <Typography>
                    We are specialized in consulting services for the textile, mechanical, automotive, oil & gas industry, from the improvement of production activities to the development of new product lines.
                </Typography>
                <Typography>
                    We offer multiple services to our costumers by relying on a group of highly qualified consultants, selected for their deep experience in their specialties and for their problem-solving skills, as well as for Smart’s international partners.
                </Typography>
                <Typography>Our consultants will be deeply involved in any aspect of the client’s activities from the first step to design together the most suitable improvement project.</Typography>
                <Typography> Focused on new technologies and new approaches to textile markets, we improve the ability of companies to provide their costumers with advanced products, with less impact on the environment.</Typography>
            </Box> */}
            <Box sx={{ backgroundColor: theme.palette.primary.forth, padding: '80px 100px 100px 100px' }}>
                <Grid container spacing={10}>
                    {data.map((val, ind) => (
                        <Grid key={ind} item lg={4}>
                            <Box sx={{ backgroundColor: 'white', padding: '10px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <Typography sx={{ fontWeight: 700, fontSize: '26px', textAlign: 'center' }}>{val.title}</Typography> */}
                                <Typography sx={{ color: '#6C757D', }}>{val.description}</Typography>
                            </Box>
                        </Grid>
                    ))}

                </Grid>
            </Box>
            {/* <Box sx={{ padding: '50px 0px' }}>
                <Typography sx={{ textAlign: 'center', fontSize: '32px', fontWeight: 600, paddingBottom: '50px' }}>OUR STORY</Typography>
                <Timeline value={events} align="alternate" content={(item, index) => (
                    <div>
                        <div style={{ padding: (index % 2 === 0) ? '0px 100px 100px 0px' : '0px 0px 100px 100px' }}>
                            <Typography sx={{ fontSize: '25px', fontWeight: 600 }}>{item.status}</Typography>
                            <div>{item.date}</div>
                        </div>
                    </div>
                )} className="w-full md:w-20rem" />
            </Box> */}


            <Footer />
        </div>
    )
}

export default About;