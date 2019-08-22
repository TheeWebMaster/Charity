import RevealOnScroll from './modules/RevealOnScroll';
import CounterOnScroll from './modules/CounterOnScroll';
import highlightLinksOnScroll from './modules/highlightLinksOnScroll';
import $ from 'jquery';

new RevealOnScroll($('.grid__item'), '75%', 'reveal-item');
new RevealOnScroll($('.slide-right'), '60%', 'slide-right-on-scroll');
new RevealOnScroll($('.slide-left'), '40%', 'slide-left-on-scroll');

new CounterOnScroll($('#total-collections'), '99%', {
  number :589393600,
  speed: 1233041
});
new CounterOnScroll($('#helped-people'), '99%', {
  number :1393600,
  speed: 3041
});
new CounterOnScroll($('#total-volunteers'), '99%', {
  number :304823,
  speed: 641
});
new CounterOnScroll($('#succeeded-missions'), '99%', {
  number :834329,
  speed: 1832
});

new highlightLinksOnScroll();
