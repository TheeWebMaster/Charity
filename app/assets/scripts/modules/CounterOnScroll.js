import $ from 'jquery';
import '../../../../node_modules/waypoints/lib/noframework.waypoints';
 
class CounterOnScroll {
  constructor(elements, offset, info){
    this.elements = elements;
    this.offset = offset;
    this.info = info;
    this.intialState();
    this.createWaypoints();
  }
  intialState() {
    this.elements.text('2,000');
  }
  createWaypoints() {
    const that = this;
    this.elements.each((index, item) => {
      new Waypoint({
        element: item,
        handler: direction => {
          let counter = 2;
          const interval = setInterval(() => {
            $(item).text(that.adjust(counter));
            counter += that.info.speed;
            if (counter > that.info.number) {
              clearInterval(interval);
            }
          }, 1); 
          console.log(direction);
        },
        offset: that.offset
      });
    });
  }
  adjust(number) {
    if (number < 999) {
      return number ;
    } else {
      let numberArr = number.toString(10).split('');
      let counter = 0
      for (let i = numberArr.length - 1; i > -1 ; i--) {
        counter ++;
          if (counter === 3 & i !== 0) { 
            numberArr.splice(i, 0, ',');
            counter = 0;
          }
      }
      return numberArr.join('');
    }
  }
};

export default CounterOnScroll;