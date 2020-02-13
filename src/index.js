import './pages/index.css';
import {NewsApi} from './js/modules/NewsApi.js';
import {HandlingEvents} from './js/components/HandlingEvents.js';

let newsApi = new NewsApi();
new HandlingEvents(newsApi);

// newsApi.getNews();
