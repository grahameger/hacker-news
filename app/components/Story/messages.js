/*
 * Story Messages
 *
 * This contains all the text for the Story component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Story';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Story component!',
  },
});
