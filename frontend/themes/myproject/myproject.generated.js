import 'construct-style-sheets-polyfill';
import { css, unsafeCSS, registerStyles } from '@vaadin/vaadin-themable-mixin/register-styles';
// target: Document | ShadowRoot
export const injectGlobalCss = (css, target) => {
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(css);
  target.adoptedStyleSheets = [...target.adoptedStyleSheets, sheet];
};
import globalCss from './global.css';
import vaadinButtonCss from './components/vaadin-button.css';
import vaadinPasswordFieldCss from './components/vaadin-password-field.css';
import vaadinTextAreaCss from './components/vaadin-text-area.css';
import vaadinTextFieldCss from './components/vaadin-text-field.css';
export const applyTheme = (target) => {
  if (!target['_vaadinds_myproject_globalCss']) {
    injectGlobalCss(globalCss.toString(), target);
    
    target['_vaadinds_myproject_globalCss'] = true;
  }
  if (!document['_vaadinds_myproject_componentCss']) {
    registerStyles(
      'vaadin-button',
      css`
        ${unsafeCSS(vaadinButtonCss.toString())}
      `
    );
    registerStyles(
      'vaadin-password-field',
      css`
        ${unsafeCSS(vaadinPasswordFieldCss.toString())}
      `
    );
    registerStyles(
      'vaadin-text-area',
      css`
        ${unsafeCSS(vaadinTextAreaCss.toString())}
      `
    );
    registerStyles(
      'vaadin-text-field',
      css`
        ${unsafeCSS(vaadinTextFieldCss.toString())}
      `
    );
    
    document['_vaadinds_myproject_componentCss'] = true;
  }
}
