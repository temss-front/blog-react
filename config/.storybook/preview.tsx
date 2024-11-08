import React from 'react';

import type { Preview } from "@storybook/react";
import '../../src/app/styles/index.scss'

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={{minHeight: 'auto'}} className="app light">
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};



export default preview;
