import './pages/index.css';
import {NewsApi} from './js/modules/NewsApi.js';
import {HandlingEvents} from './js/components/HandlingEvents.js';
import './js/utils/render-block';
import {NewsCard} from './js/components/NewsCard.js';
import {DataStorage} from './js/modules/DataStorage.js';
import {NEWS_API_KEY} from './js/constants/news-api-key.js';


const newsApi = new NewsApi(NEWS_API_KEY);
const newsCard = new NewsCard();
const dataStorage = new DataStorage();
new HandlingEvents(newsApi, newsCard, dataStorage);
