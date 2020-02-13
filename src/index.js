import './pages/index.css';
import {NewsApi} from './js/modules/NewsApi.js';
import {HandlingEvents} from './js/components/HandlingEvents.js';
import './js/utils/render-block'

let newsApi = new NewsApi();
new HandlingEvents(newsApi);

// newsApi.getNews();
