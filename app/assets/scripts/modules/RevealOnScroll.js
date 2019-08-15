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
    const that = this;
    this.items.each(function() {
      const item = this;
      new Waypoint({
        element: item,
        handler: function() {
          $(item).addClass('reveal-item--is-visible');
        },
        offset: that.offset
      });
    });
  }
};

export default RevealOnScroll;