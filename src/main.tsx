import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NProgress from "nprogress";
import { ThemeProvider } from "@material-tailwind/react";

NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
        <App />
    </ThemeProvider>
  </StrictMode>,
)