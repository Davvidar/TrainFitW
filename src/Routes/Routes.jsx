import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Root } from './Root';
import { Home } from '../Pages/Home';
import { KcalCalculator } from '../Pages/KcalCalculator'; // Importación por defecto
import {RmCalculator} from '../Pages/RmCalculator';
import ContactPage from '../Pages/ContactPage';
import CalculatorSelection from '../Pages/CalculatorSelection';
import TermsConditions from '../Pages/TermsConditions';
import Politics from '../Pages/Politics';
import AboutUs from '../Pages/AboutUs/AboutUs';
import FaqsPage from '../Pages/FaqsPage';
import NotFound from '../Pages/NotFound';

const router = createBrowserRouter([
{
  path: "/",
  element: <Root />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/CalculadoraKcal",
      element: <KcalCalculator />,
    },
    {
      path: "/CalculadoraRm",
      element: <RmCalculator />,
    },
    {
      path: "/contacto",
      element: <ContactPage />,
    },
    {
      path: "/calculadoras",
      element: <CalculatorSelection />,
    },
    {
      path: "/terminosycondiciones",
      element: <TermsConditions />,
    },
    {
      path: "/politicas",
      element: <Politics />,
    },
    {
      path: "/SobreNosotros",
      element: <AboutUs />,
    },
    {
      path: "/FAQs",
      element: <FaqsPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    }
  ],
}




])

export default router;
