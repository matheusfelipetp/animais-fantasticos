import ScrollSmooth from './modules/scroll-suave.js';
import initAnimateScroll from './modules/scroll-animacao.js';
import Accordion from './modules/accordion.js';
import initTabNav from './modules/tabNav.js';
import initModal from './modules/modal.js';
import initToolTip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOperation from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSmooth = new ScrollSmooth('[data-menu="smooth"] a[href^="#"]');
scrollSmooth.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

initAnimateScroll();
initTabNav();
initModal();
initToolTip();
initDropDownMenu();
initMenuMobile();
initOperation();
initFetchAnimais();
initFetchBitcoin();
