import { render, screen } from '@testing-library/react';
import { Button } from '@/shared/ui/button/index';

describe('Button', () => {
    it('should render', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });
});
