const PubSub = require('../helpers/pub_sub.js');

const InfoView = function(container){
  this.container = container;
};

InfoView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (event) => {
    const family = event.detail;
    console.log('payload received by info view subscribe', event.detail);
    this.render(family);
  })
};

InfoView.prototype.render = function (family) {
  const name = document.createElement('h3');
  const description = document.createElement('p');
  name.textContent = family.name;
  description.textContent = family.description;
  const instrumentList = this.createInstrumentList(family.instruments);
  this.container.innerHTML = '';
  this.container.appendChild(name);
  this.container.appendChild(description);
  this.container.appendChild(instrumentList);
};

InfoView.prototype.createInstrumentList = function (instrumentArray) {
  const list = document.createElement('ul');
  for (instrument of instrumentArray) {
    const listItem = document.createElement('li');
    listItem.textContent = instrument;
    list.appendChild(listItem);
  };
  return list;
};

module.exports = InfoView;
