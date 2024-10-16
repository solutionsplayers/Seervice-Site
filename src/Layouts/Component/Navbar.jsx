import { Box, useTheme, Menu, MenuItem } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: '#9B9B9B',
        "&:hover": {
            color: '#418BF9',
            textDecoration: 'underline' // Added underline on hover for clarity
        }
    };


    const menuStyle = {
        '&:hover': {
            color: '#418BF9'
        }

    }
    const theme = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    // const { t, i18n } = useTranslation();
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrolled = currentScrollPos > 0;
            setIsScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
        setAnchorEl(null);
    };

    const currentLanguage = i18n.language || 'en';

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: isScrolled ? '20px 80px' : '30px 80px',
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.secondary,
                    position: 'sticky',
                    top: '0',
                    left: '0',
                    zIndex: 9999999999,
                    transition: 'padding 0.3s ease',
                    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.3)'
                }}
            >
                <Box>
                    <img src="/image 28.png" alt="" style={{ height: isScrolled ? '5vh' : '7vh' }} />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px', }}>
                    <Link to="/" className="link-hover">
                        {t('greeting')}
                    </Link>
                    <Link to="/about_us" className="link-hover">
                        {t('ab')}
                    </Link>
                    <Link to="/partners" className="link-hover">
                        {t('pt')}
                    </Link>
                    <Link to="/services" className="link-hover">
                        {t('ser')}
                    </Link>
                    <Link to="/experience" className="link-hover">
                        {t('ex')}
                    </Link>
                    <Link to="/contact_us" className="link-hover">
                        {t('cu')}
                    </Link>

                    <Box >
                        <div
                            onClick={(event) => setAnchorEl(event.currentTarget)}
                            style={{
                                backgroundColor: 'transparent',
                                color: theme.palette.primary.secondary,
                                cursor: 'pointer',
                                padding: '0 10px'
                            }}
                        >
                            {currentLanguage.toUpperCase()}
                        </div>
                        <Menu
                            id="language-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={() => setAnchorEl(null)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            PaperProps={{
                                sx: {
                                    mt: isScrolled ? '20px' : '40px',
                                    ml: '20px',
                                    zIndex: 99999999999999
                                }
                            }}
                        >
                            <MenuItem style={menuStyle} onClick={() => handleLanguageChange('en')}>English</MenuItem>
                            <MenuItem style={menuStyle} onClick={() => handleLanguageChange('fr')}>Français</MenuItem>
                            <MenuItem style={menuStyle} onClick={() => handleLanguageChange('it')}>Italiano</MenuItem>
                            <MenuItem style={menuStyle} onClick={() => handleLanguageChange('ru')}>русский</MenuItem>
                            <MenuItem style={menuStyle} onClick={() => handleLanguageChange('es')}>Español</MenuItem>

                        </Menu>

                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Navbar;
