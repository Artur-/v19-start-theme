import { applyTheme } from '@vaadin/flow-frontend/theme/theme-generated';
import { Router } from '@vaadin/router';
import { routes } from './routes';

applyTheme(document);

export const router = new Router(document.querySelector('#outlet'));
router.setRoutes(routes);
