import $ from 'jquery';
import '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset, animationClass) {
    this.items = els;
    this.offset = offset;
    this.animationClass = animationClass;
    this.initialState();
    this.createWaypoints();
  }
  initialState() {
    this.items.addClass(this.animationClass);
  } 
  createWaypoints() {
    const that = this;
    this.items.each((index, item) => {
      new Waypoint({
        element: item,
        handler: function() {
          $(item).addClass(`${that.animationClass}--is-visible`);
        },
        offset: that.offset
      });
    });
  }
};

export default RevealOnScroll;