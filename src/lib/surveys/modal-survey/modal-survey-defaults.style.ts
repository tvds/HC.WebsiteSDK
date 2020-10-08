import { ClassNamesConfigType } from './class-names-config.type';
import { ModalSurveyStyleConfig } from './modal-survey-style-config.interface';

/**
 * Default logo style
 *
 * @category Modal style
 */
export const logoStyle:
  | Partial<CSSStyleDeclaration>
  | Record<string, string> = {
  height: '31px',
  userSelect: 'none',
  userDrag: 'none',
  '-moz-user-select': 'none',
  '-webkit-user-drag': 'none',
  'webkit-user-select': 'none',
} as Partial<CSSStyleDeclaration>;

/**
 * Default footer appearance
 *
 * @category Modal styles
 */
export const footerStyle: Partial<CSSStyleDeclaration> = {
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '0px 0px 5px 5px',
  height: '44px',
  flexShrink: '0',
  flexBasis: '44px',
  alignItems: 'center',
  background: '#EFEFEF 0% 0% no-repeat padding-box',
};

/**
 * Default modal background styles
 *
 * @category Modal style
 */
export const rootDivStyle: Partial<CSSStyleDeclaration> = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  visibility: 'hidden',
  opacity: '0',
  transition: 'all 0.2s ease-in',
};

/**
 * Default modal window styles
 *
 * @category Modal style
 */
export const windowDivStyle: Partial<CSSStyleDeclaration> = {
  maxWidth: '600px',
  width: '100%',
  maxHeight: '590px',
  height: '100%',
  background: '#FFFFFF 0% 0% no-repeat padding-box',
  borderRadius: '1px 1px 1px 1px',
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'column',
};

/**
 * Default modal close button styles
 *
 * @category Modal style
 */
export const windowCloseButtonStyle: Partial<CSSStyleDeclaration> = {
  height: '25px',
  width: '25px',
  opacity: '0.7',
  cursor: 'pointer',
};

/**
 * Default window bar styles
 *
 * @category Modal style
 */
export const windowBarDivStyle: Partial<CSSStyleDeclaration> = {
  flexBasis: '25px',
  background: '#003161 0% 0% no-repeat padding-box',
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '7.5px',
};

/**
 * Default window bar styles
 *
 * @category Modal style
 */
export const iFrameStyle: Partial<CSSStyleDeclaration> = {
  width: '100%',
  border: '0',
  flexBasis: '100%',
};

/**
 * Default modal background styles
 *
 * @category Modal style
 */
export const modalTranslucentBackground: Partial<CSSStyleDeclaration> = {
  background: '#000000B3 0% 0% no-repeat padding-box',
};

/**
 * Default styles attached to opened modal
 *
 * @category Modal style
 */
export const modalVisible: Partial<CSSStyleDeclaration> = {
  opacity: '1',
  visibility: 'visible',
};

/**
 * Default class names for modal elements
 *
 * @category Modal style
 */
export const classNames: Required<ClassNamesConfigType> = {
  iFrameStyle: 'hello-customer-modal__survey',
  windowDivStyle: 'hello-customer-modal__window',
  windowCloseButtonStyle: 'hello-customer-modal__close-button',
  windowBarDivStyle: 'hello-customer-modal__bar',
  rootDivStyle: 'hello-customer-modal',
  modalVisible: 'hello-customer-modal--visible',
  modalTranslucentBackground: 'hello-customer-modal--show-background',
  footerStyle: 'hello-customer-modal__footer',
  footerLogoStyle: 'hello-customer-modal__logo',
};

/**
 * Default media declarations
 *
 * @category Modal style
 */
export const medias: Record<string, Partial<ModalSurveyStyleConfig>> = {
  '(max-width: 600px)': {
    windowDivStyle: {
      maxHeight: '100%',
    },
  },
};