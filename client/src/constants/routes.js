// Public routes
const HOME = '/';
const ABOUT = '/about';
// const SIGN_UP = '/signup';
const LOG_IN = '/admin-signin';
const LIBRARY = '/books';

// Post routes
// const ITEMS = '/books';
const ITEM = '/book/:id';
const ITEM_INSERT = '/book-create';
const ITEM_UPDATE = '/book/:id';
const BOOK = '/books/:_id'

export const routes = {
    HOME,
    ABOUT,
    // SIGN_UP,
    LOG_IN,
    // ITEMS,
    ITEM,
    ITEM_INSERT,
    ITEM_UPDATE,
    LIBRARY,
    BOOK
};
