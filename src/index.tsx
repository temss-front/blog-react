import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import { ThemeProvider } from '@/app/providers/theme-provider';

import '@/shared/config/i18n';
import { ErrorBoundary } from '@/app/providers/error-boundary';

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
