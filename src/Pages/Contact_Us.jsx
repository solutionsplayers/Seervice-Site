import React from 'react'
import Navbar from '../Layouts/Component/Navbar'
import Header from '../Layouts/Component/Header'
import { Box, Typography } from '@mui/material'
import Footer from '../Layouts/Component/Footer'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <Header title="CONTACTS" src="/section1.jpg" />
            <Box sx={{ padding: '50px 0px' }}>

                <Typography sx={{ fontSize: '28px', fontWeight: 700, textAlign: 'center' }}>Meet Our Team</Typography>
            </Box>
            <Box sx={{ padding: '0px 80px 80px 80px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ height: '120px', width: '120px' }}>
                        <img src="/header.jpg" alt="" style={{ height: '120px', width: '120px', borderRadius: '50%' }} />
                    </Box>
                    <Typography sx={{ fontSize: '22px', fontWeight: 600 }}>Muhammad Moaz</Typography>
                    <Typography sx={{ fontSize: '22px', fontWeight: 500 }}>Frontend Developer</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ height: '120px', width: '120px' }}>
                        <img src="/header.jpg" alt="" style={{ height: '120px', width: '120px', borderRadius: '50%' }} />
                    </Box>
                    <Typography sx={{ fontSize: '22px', fontWeight: 600 }}>Muhammad Moaz</Typography>
                    <Typography sx={{ fontSize: '22px', fontWeight: 500 }}>Frontend Developer</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ height: '120px', width: '120px' }}>
                        <img src="/header.jpg" alt="" style={{ height: '120px', width: '120px', borderRadius: '50%' }} />
                    </Box>
                    <Typography sx={{ fontSize: '22px', fontWeight: 600 }}>Muhammad Moaz</Typography>
                    <Typography sx={{ fontSize: '22px', fontWeight: 500 }}>Frontend Developer</Typography>
                </Box>

            </Box>
            <Footer />
        </div>
    )
}

export default Contact