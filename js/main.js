import './utils.js';
import './data.js';
import './template.js';
import './forminput.js';
import './map.js';
import {getData} from './api.js';
import {renderSimilarList} from './template.js';

const SIMILAR_ARRAY_COUNT = 10;
getData((createObjs) => {
  renderSimilarList(createObjs.slice(0,SIMILAR_ARRAY_COUNT));
});


