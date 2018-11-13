const instrumentData = require('./data/instrument_families.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const InfoView = require('./views/info_view.js');
const SelectView = require('./views/select_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const instrumentDataModel = new InstrumentFamilies(instrumentData);
  console.log('instrumentDataModel data received in app', instrumentDataModel.instrumentData);
  instrumentDataModel.bindEvents();

  const familySelect = document.querySelector('#instrument-families');
  console.log('familySelect element grabbed by app', familySelect);
  const selectView = new SelectView(familySelect);
  console.log('selectView instance created by app', selectView);
  selectView.bindEvents();
  selectView.populate(instrumentData);

  const familyInfoDiv = document.querySelector('.instrument-family-info');
  console.log('family info div grabbed by app', familyInfoDiv);
  const infoView = new InfoView(familyInfoDiv);
  console.log('info view instance created by app', infoView);
  infoView.bindEvents();

});
