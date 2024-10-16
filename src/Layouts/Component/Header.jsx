import { Box, Typography } from '@mui/material';
import React from 'react';

const Header = ({ title, src, description, align, w }) => {
    const bg_img = {
        position: 'relative',
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
    }
    const img_overlay = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    }
    const img_text = {
        position: 'absolute',
        top: '30%',
        left: '0',
        // transform: 'translate(-50%, -50%)',
        textAlign: 'left',
        color: 'white',
        zIndex: 1,
        padding: '0px 50px',
        fontFamily: 'roboto'

    }
    return (
        <>
            <Box style={bg_img}>
                <Box style={img_overlay} />
                <Box style={{ ...img_text, textAlign: align, width: w ? w : null }}>
                    <Typography variant="h3">{title}</Typography>
                    <Typography variant='h5' sx={{ padding: '10px 0px' }}>{description}</Typography>

                </Box>
            </Box>
        </>
    );
};

export default Header;
