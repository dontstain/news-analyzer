import {RESULT, NO_RESULT, LOADING} from '../constants/blocks.js';

function renderBlock(block) {
  switch (block) {
    case RESULT:
      RESULT.classList.remove('search-result_hidden');
      if (!NO_RESULT.classList.contains('no-results__fail_hidden')) NO_RESULT.classList.add('no-results__fail_hidden');
      if (!LOADING.classList.contains('no-results__loading_hidden')) LOADING.classList.add('no-results__loading_hidden');
      NO_RESULT.parentElement.classList.add('no-results_hidden');
      break;
      
    case NO_RESULT:
      if (!RESULT.classList.contains('search-result_hidden')) RESULT.classList.add('search-result_hidden');
      NO_RESULT.classList.remove('no-results__fail_hidden');
      if (!LOADING.classList.contains('no-results__loading_hidden')) LOADING.classList.add('no-results__loading_hidden');
      NO_RESULT.parentElement.classList.remove('no-results_hidden');
      break;

    case LOADING:
      if (!RESULT.classList.contains('search-result_hidden')) RESULT.classList.add('search-result_hidden');
      if (!NO_RESULT.classList.contains('no-results__fail_hidden')) NO_RESULT.classList.add('no-results__fail_hidden');
      LOADING.classList.remove('no-results__loading_hidden');
      LOADING.parentElement.classList.remove('no-results_hidden');
      break;
  }
}

export default renderBlock;