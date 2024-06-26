import React from 'react';
import { withTranslation } from 'react-i18next';

interface ErrorBoundaryProps {
    t: (key: string) => string
    children: React.ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { t, children } = this.props;
        const { hasError } = this.state;

        if (hasError) {
            return <h1>{t('Error')}</h1>;
        }

        return children;
    }
}

export default withTranslation()(ErrorBoundary);
