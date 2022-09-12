import ScrollSmooth from './modules/scroll-suave.js';
import initAnimateScroll from './modules/scroll-animacao.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabNav.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOperation from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSmooth = new ScrollSmooth('[data-menu="smooth"] a[href^="#"]');
scrollSmooth.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tavNab = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section",
);
tavNab.init();

const modal = new Modal(
  "[data-modal='open'",
  "[data-modal='close'",
  "[data-modal='container'",
);
modal.init();

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init();

initAnimateScroll();
initDropDownMenu();
initMenuMobile();
initOperation();
initFetchAnimais();
initFetchBitcoin();
