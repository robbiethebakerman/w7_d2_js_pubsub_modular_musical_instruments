const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(instrumentData){
  this.instrumentData = instrumentData;
};

InstrumentFamilies.prototype.bindEvents = function (){
  PubSub.publish('InstrumentFamilies:all-families-ready', this.instrumentData);
  console.log('this.instrumentData published by model', this.instrumentData);

  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    console.log('model subscribe selectedIndex', selectedIndex);
    const selectedFamily = this.instrumentData[selectedIndex];
    console.log('selectedFamily to publish from model', selectedFamily);
    PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily);
  });
};

module.exports = InstrumentFamilies;
