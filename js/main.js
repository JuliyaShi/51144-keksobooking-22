import './utils.js';
import './data.js';
import './template.js';
import './forminput.js';
import './map.js';
import {getData} from './api.js';
import {renderSimilarList} from './template.js';

getData((createObjs) => {
  renderSimilarList(createObjs);
});


