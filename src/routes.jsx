import { useRoutes } from "react-router";
import Landing from "./Layouts/Landing";
import AdminLogin from "./views/Auth/Login/AdminLogin";
import About from '../src/Pages/About_Us';
import Partners from "../src/Pages/Partners";
import Services from "./Pages/Services"
import Experience from './Pages/Experience'
import Contact from './Pages/Contact_Us'
export default function Router() {
    let element = useRoutes([
        {
            path: '/',
            element: <Landing />,
        },

        {
            path: '/admin-login',
            element: <AdminLogin />
        },
        {
            path: '/about_us',
            element: <About />
        },
        {
            path: '/partners',
            element: <Partners />
        },
        {
            path: '/services',
            element: <Services />
        },
        {
            path: '/experience',
            element: <Experience />
        },
        {
            path: '/contact_us',
            element: <Contact />
        }
    ])
    return element
}