import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader, elementStrings } from './views/base';


// will store all neccesary info ex. recipes result
const state = {};

/**
 * SEARCH CONTROLLER
 */
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
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

/**
 * RECIPE CONTROLLER
 */

const controlRecipe = async () => {
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if(id) {
        // Prepare UI for changes

        // Create new recipe object
        state.recipe = new Recipe(id);

        // Get recipe data
        await state.recipe.getRecipe();

        // Calculate servings and time
        state.recipe.calcTime();
        state.recipe.calcServings();

        // Render recipe to UI
        console.log(state.recipe);
    }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));;