import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

new RevealOnScroll($('.grid__item'), '85%', 'reveal-item');
new RevealOnScroll($('.slide-right'), '85%', 'slide-right-on-scroll');
new RevealOnScroll($('.slide-left'), '55%', 'slide-left-on-scroll');