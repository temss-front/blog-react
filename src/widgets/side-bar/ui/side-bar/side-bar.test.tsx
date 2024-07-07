import { fireEvent, render, screen } from '@testing-library/react';
import { SideBar } from '@/widgets/side-bar';

describe('SideBar', () => {
    it('should render', () => {
        render(<SideBar />);
        expect(screen.getByTestId('side-bar')).toBeInTheDocument();
    });

    it('should toggle open state', async () => {
        render(<SideBar />);
        fireEvent.click(screen.getByTestId('side-bar-toggle'));

        expect(screen.getByTestId('side-bar')).toHaveClass('collapsed');
    });
});
