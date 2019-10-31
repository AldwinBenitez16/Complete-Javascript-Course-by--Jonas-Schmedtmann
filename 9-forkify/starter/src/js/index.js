import { elements } from './views/base';
import * as searchView from './views/searchView';

import Search from './models/Search';

// will store all neccesary info ex. recipes result
const state = {};

const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput(); // TODO

    if(query) {

        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results

        // 4) Search for recipes
        await state.search.getResults();

        // 5) render results on UI
        console.log(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});