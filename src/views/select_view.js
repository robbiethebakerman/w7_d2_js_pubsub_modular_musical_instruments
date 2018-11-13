const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(selectElement){
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function(){
  console.log('SelectView bindEvents running');
  PubSub.subscribe('InstrumentFamilies:all-families-ready', (event) => {
    const allFamilies = event.detail;
    console.log('allFamilies received by SelectView', event.detail);
    this.populate(allFamilies);
  });

  this.selectElement.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    console.log('selectView addEventListener selectedIndex', selectedIndex);
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populate = function(instrumentFamilyData){
  instrumentFamilyData.forEach((family, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = family.name;
    this.selectElement.appendChild(option);
  });
};

module.exports = SelectView;
