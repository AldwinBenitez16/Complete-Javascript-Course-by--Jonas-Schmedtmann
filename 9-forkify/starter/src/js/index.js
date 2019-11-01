import { elements, renderLoader, clearLoader, elementStrings } from './views/base';
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
        renderLoader(elements.searchRes);
        searchView.clearInput();
        searchView.clearResults();

        // 4) Search for recipes
        await state.search.getResults();
        
        // 5) render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if(btn) {
        const goToPage = btn.dataset.goto;
        console.log(goToPage);
    }
});