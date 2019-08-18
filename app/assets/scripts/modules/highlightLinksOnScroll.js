import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll'; 

class highlightLinksOnScroll {
  constructor() {
    this.pageSections = $('.page-section');
    this.links = $('.header__link')
    this.createPageSectionsWaypoints();
    this.enableSmoothScroll();
  }
  createPageSectionsWaypoints() {
    const that = this;
    this.pageSections.each((index, ele) => {
      new Waypoint({
        element: ele,
        handler: direction => {
         if (direction === 'down') {
          that.links.removeClass('highlight-on-scroll');
          $(ele.dataset.link).addClass('highlight-on-scroll');
         }
        },
        offset: '25%'
      });

      new Waypoint({
        element: ele,
        handler: direction => {
         if (direction === 'up') {
          that.links.removeClass('highlight-on-scroll');
          $(ele.dataset.link).addClass('highlight-on-scroll');
         }
        },
        offset: '-40%'
      });
    });
  }
  enableSmoothScroll() {
    this.links.smoothScroll();
  }
};

export default highlightLinksOnScroll;