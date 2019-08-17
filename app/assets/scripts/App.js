import RevealOnScroll from './modules/RevealOnScroll';
import CounterOnScroll from './modules/CounterOnScroll';
import $ from 'jquery';

new RevealOnScroll($('.grid__item'), '85%', 'reveal-item');
new RevealOnScroll($('.slide-right'), '85%', 'slide-right-on-scroll');
new RevealOnScroll($('.slide-left'), '55%', 'slide-left-on-scroll');

new CounterOnScroll($('#total-collections'), '90%', {
  number :589393600,
  speed: 1233041
});
new CounterOnScroll($('#helped-people'), '90%', {
  number :1393600,
  speed: 3041
});
new CounterOnScroll($('#total-volunteers'), '90%', {
  number :304823,
  speed: 641
});
new CounterOnScroll($('#succeeded-missions'), '90%', {
  number :834329,
  speed: 1832
});
