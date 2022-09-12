import ScrollSmooth from './modules/scroll-suave.js';
import AnimateScroll from './modules/scroll-animate.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabNav.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import DropDownMenu from './modules/dropdown-menu.js';
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

const animateScroll = new AnimateScroll("[data-anime='scroll']");
animateScroll.init();

const dropdownMenu = new DropDownMenu('[data-dropdown]');
dropdownMenu.init();

initMenuMobile();
initOperation();

initFetchBitcoin('https://blockchain.info/ticker', '.btc-price');
initFetchAnimais('../../animaisapi.json', '.numbers-grid');
