/**
 *
 * Asynchronously loads the component for Story
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
