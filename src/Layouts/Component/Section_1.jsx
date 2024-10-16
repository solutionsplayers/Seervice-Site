import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../Theme'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'

const Section_1 = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const textHeading = {
        fontSize: '30px',
        fontWeight: 700,
        // textAlign: 'right'
    }

    const paragraph = {
        fontSize: '18px',
        color: '#6C757D',
        // textAlign: 'right'
        // fontWeight: 700
    }

    const textHeading1 = {
        fontSize: '30px',
        fontWeight: 700,
        textAlign: 'right'
    }

    const paragraph1 = {
        fontSize: '18px',
        color: '#6C757D',
        textAlign: 'right'
        // fontWeight: 700
    }
    const handleButton = () => {
        navigate('/about_us')
    }
    return (
        <>
            <Box>
                <Box sx={{
                    display: 'flex', flexDirection: 'column', padding: '100px 100px 100px 100px', gap: '80px', backgroundColor: theme.palette.primary.forth
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px', '&:hover img': { transform: 'scale(1.1)', } }}>
                        <Box flex={1} sx={{ height: '150px', width: '300px', }}>
                            <img src="section1.jpg" alt="" style={{ height: '100%', width: '100%', borderRadius: '5px', transition: 'transform 0.3s ease-in-out' }} />
                        </Box>
                        <Box flex={4}>
                            <Typography style={textHeading}>{t('sec1H1')}</Typography>
                            <Typography style={paragraph}>{t('sec1P1')}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px', '&:hover img': { transform: 'scale(1.1)', } }}>

                        <Box flex={4}>
                            <Typography style={textHeading1}>{t('sec1H2')}</Typography>
                            <Typography style={paragraph1}>{t('sec1P2')}</Typography>
                        </Box>
                        <Box flex={1} sx={{ height: '150px', width: '300px', }}>
                            <img src="section1.jpg" alt="" style={{ height: '100%', width: '100%', borderRadius: '5px', transition: 'transform 0.3s ease-in-out' }} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px', '&:hover img': { transform: 'scale(1.1)', } }}>
                        <Box flex={1} sx={{ height: '150px', width: '300px', }}>
                            <img src="section1.jpg" alt="" style={{ height: '100%', width: '100%', borderRadius: '5px', transition: 'transform 0.3s ease-in-out' }} />
                        </Box>
                        <Box flex={4}>
                            <Typography style={textHeading}>{t('sec1H3')}</Typography>
                            <Typography style={paragraph}>{t('sec1P3')}</Typography>
                        </Box>

                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px', '&:hover img': { transform: 'scale(1.1)', } }}>

                        <Box flex={4}>
                            <Typography style={textHeading1}>{t('sec1H4')}</Typography>
                            <Typography style={paragraph1}>{t('sec1P4')}</Typography>
                        </Box>
                        <Box flex={1} sx={{ height: '150px', width: '300px', }}>
                            <img src="section1.jpg" alt="" style={{ height: '100%', width: '100%', borderRadius: '5px', transition: 'transform 0.3s ease-in-out' }} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px', '&:hover img': { transform: 'scale(1.1)', } }}>
                        <Box flex={1} sx={{ height: '150px', width: '300px', }}>
                            <img src="section1.jpg" alt="" style={{ height: '100%', width: '100%', borderRadius: '5px', transition: 'transform 0.3s ease-in-out' }} />
                        </Box>
                        <Box flex={4}>
                            <Typography style={textHeading}>{t('sec1H5')}</Typography>
                            <Typography style={paragraph}>{t('sec1P5')}</Typography>
                        </Box>
                    </Box>
                    {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px', '&:hover img': { transform: 'scale(1.1)', } }}>

                    <Box flex={4}>
                        <Typography style={textHeading1}>Ecogreen</Typography>
                        <Typography style={paragraph1}>We believe in new technologies, and we turn to the best markets to supply you with advanced fabrics, high-prestige materials, minimizing environmental impacts.</Typography>
                    </Box>
                    <Box flex={1} sx={{ height: '200px', width: '200px', }}>
                        <img src="section1.jpg" alt="" style={{ height: '100%', width: '100%', borderRadius: '50%', transition: 'transform 0.3s ease-in-out' }} />
                    </Box>
                </Box> */}
                    <Box sx={{ margin: '0 auto' }}>
                        <Button onClick={handleButton} sx={{ backgroundColor: 'white', color: theme.palette.primary.third, border: '1px solid #418BF9', '&:hover': { backgroundColor: 'white' } }}>Discover More</Button>
                    </Box>
                </Box>
                <Box sx={{ padding: '100px', backgroundColor: theme.palette.primary.forth }}>
                    <iframe
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/bibvp2sFuWc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
<Typography></Typography>
                </Box>

            </Box>

        </>
    )
}

export default Section_1