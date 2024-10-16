import React from 'react'
import Navbar from '../Layouts/Component/Navbar'
import Header from '../Layouts/Component/Header'
import { Box, Button, Grid, Typography, useTheme } from '@mui/material'
import { PiShareNetworkFill } from "react-icons/pi";
import Footer from '../Layouts/Component/Footer';

const Services = () => {
    const theme = useTheme()
    const data1 = [
        {
            main: 'Technological Area',
            icon: PiShareNetworkFill,
            paragraph: "Realization of a Technological Project on site and related documentation"
        }
    ]
    return (
        <div>
            <Navbar />
            <Header title="SERVICES" src="/section1.jpg" />
            <Box sx={{ padding: '100px 80px' }}>
                <Typography sx={{ fontSize: '32px', fontWeight: 700, textAlign: 'center' }}>MANAGEMENT & CONSULTING</Typography>
                <Typography sx={{ textAlign: 'center' }}>Due to the complexity of each project and in order to make an easy and direct approach to all the matters and problems we provide a full time management service.</Typography>
                <Box>
                    <Grid container spacing={5}>
                        <Grid item lg={6}>
                            <Typography sx={{ fontSize: '26px', fontWeight: 700, }}>Technological Area</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'start', gap: '5px' }}>
                                <PiShareNetworkFill />
                                <Typography>Realization of a Technological Project on site and related documentation</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'start', gap: '5px' }}>
                                <PiShareNetworkFill />
                                <Typography>Realization of a Technological Project on site and related documentation</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'start', gap: '5px' }}>
                                <PiShareNetworkFill />
                                <Typography>Realization of a Technological Project on site and related documentation</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'start', gap: '5px' }}>
                                <PiShareNetworkFill />
                                <Typography>Realization of a Technological Project on site and related documentation</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'start', gap: '5px' }}>
                                <PiShareNetworkFill />
                                <Typography>Realization of a Technological Project on site and related documentation</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={6}>
                            <Typography sx={{ fontSize: '26px', fontWeight: 700, }}>Engineering Area
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'start', gap: '5px' }}>
                                <PiShareNetworkFill />
                                <Typography>Realization of a Technological Project on site and related documentation</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'start', gap: '5px' }}>
                                <PiShareNetworkFill />
                                <Typography>Realization of a Technological Project on site and related documentation</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'start', gap: '5px' }}>
                                <PiShareNetworkFill />
                                <Typography>Realization of a Technological Project on site and related documentation</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'start', gap: '5px' }}>
                                <PiShareNetworkFill />
                                <Typography>Realization of a Technological Project on site and related documentation</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'start', gap: '5px' }}>
                                <PiShareNetworkFill />
                                <Typography>Realization of a Technological Project on site and related documentation</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={12}>
                            <Typography sx={{ fontSize: '26px', fontWeight: 700, }}>Our Goals
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'start', gap: '5px' }}>
                                <PiShareNetworkFill />
                                <Typography>Obtain relevant international industrial benchmark indices and assess the mill against the main functional and sub-functional benchmark indices and correlated performance assessment parameters established and measure its improvement on a quarterly basis
                                    Improvement of the productivity</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'start', gap: '5px' }}>
                                <PiShareNetworkFill />
                                <Typography>Improvement of the performance of production operations in terms of time consumed, number of rejected items</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'start', gap: '5px' }}>
                                <PiShareNetworkFill />
                                <Typography>Reduction of operational cost, reduction of process time, work in process, cost of material, handling & stock keeping
                                    Improvement of the performance of the finishing section</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'start', gap: '5px' }}>
                                <PiShareNetworkFill />
                                <Typography>Realization of a Technological Project on site and related documentation</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'start', gap: '5px' }}>
                                <PiShareNetworkFill />
                                <Typography>Realization of a Technological Project on site and related documentation</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: '#F8F9FA', padding: '100px' }}>
                <Typography sx={{ fontSize: '32px', fontWeight: 600 }}>SPECIAL PROJECTS</Typography>
                <Box>
                    <Grid container spacing={5}>
                        <Grid item lg={6}>
                            <Box sx={{ backgroundColor: 'white', padding: '20px', border: '1px solid gray', borderRadius: '5px' }}>
                                <Typography sx={{ fontSize: '32px', fontWeight: 600 }}>Gold Finger</Typography>
                                <Typography >The PVD Metallization of textilesr</Typography>
                                <Box sx={{ margin: '0 auto' }}>
                                    <Button sx={{ backgroundColor: theme.palette.primary.main, color: 'white' }}>DisCover Now</Button>
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item lg={6}>
                            <Box sx={{ backgroundColor: 'white', padding: '20px', border: '1px solid gray', borderRadius: '5px' }}>
                                <Typography sx={{ fontSize: '32px', fontWeight: 600 }}>Greenlab</Typography>
                                <Typography >Textile factory from the future, now.</Typography>
                                <Box sx={{ margin: '0 auto' }}>
                                    <Button sx={{ backgroundColor: theme.palette.primary.main, color: 'white' }}>DisCover Now</Button>
                                </Box>
                            </Box>

                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Footer />
        </div >
    )
}

export default Services