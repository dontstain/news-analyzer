import '../pages/analytics.css';
import {DataStorage} from '../js/modules/DataStorage.js';
import {Stats} from '../js/components/Stats.js';

const dataStorage = new DataStorage();
const stats = new Stats(dataStorage);

stats.inputStats();




