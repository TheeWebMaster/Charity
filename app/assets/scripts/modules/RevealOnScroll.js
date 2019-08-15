import $ from 'jquery';
import '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {
    this.items = els;
    this.offset = offset;
    this.hiddenInitially();
    this.createWaypoints();
  }
  hiddenInitially() {
    this.items.addClass('reveal-item');
  } 
  createWaypoints() {
    const offset = this.offset;
    this.items.each(function() {
      const item = this;
      new Waypoint({
        element: item,
        handler: function() {
          $(item).addClass('reveal-item--is-visible');
        },
        offset
      });
    });
  }
};

export default RevealOnScroll;