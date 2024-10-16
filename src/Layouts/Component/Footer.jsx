import { Box, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

const Footer = () => {
    const theme = useTheme()
    const { t } = useTranslation()
    const navigate = useNavigate()
    const pageRoutes = [
        { title: t('greeting'), route: '/' },
        { title: t('ab'), route: '/about_us' },
        { title: t('pt'), route: '/partners' },
        { title: t('ser'), route: '/services' },
        { title: t('ex'), route: '/experience' },
    ];
    const supportData = [
        { title: 'Support' },
        { title: 'FAQ,s' },
        { title: 'Support Center' },
        { title: 'Security' },
    ]

    const contactData = [
        { title: t('cu') },
        { title: '+393- 408049494' },
        { title: 'info@smart-horizons' },
        { title: t('ad') },
    ]

    const handlePageClick = (route) => {
        navigate(route);
    };

    return (
        <Grid container spacing={5} sx={{ backgroundColor: theme.palette.secondary.secondary, padding: '40px', }}>
            <Grid item lg={3}>
                <img src="/image 73.png" alt="" />
                <Typography sx={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, distinctio!</Typography>
            </Grid>
            <Grid item lg={3} sx={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'white' }}>
                {pageRoutes.map((val, ind) => (
                    <Box key={ind} onClick={() => handlePageClick(val.route)} style={{ cursor: 'pointer' }}>
                        <Typography>{val.title}</Typography>
                    </Box>
                ))}
            </Grid>
            <Grid item lg={3} sx={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'white' }}>
                {supportData.map((val, ind) => (
                    <Box key={ind}>
                        <Typography sx={{ fontWeight: 600 }}>{val.title}</Typography>
                    </Box>
                ))}
            </Grid>
            <Grid item lg={3} sx={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'white' }}>
                {contactData.map((val, ind) => (
                    <Box key={ind}>
                        <Typography sx={{ fontWeight: 600 }}>{val.title}</Typography>
                    </Box>
                ))}
            </Grid>
        </Grid >
    )
}

export default Footer
