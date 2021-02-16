// Public routes
const HOME = '/';
const ABOUT = '/about';
// const SIGN_UP = '/signup';
const LOG_IN = '/admin-signin';
const LOG_OUT = '/admin-signout';
const PW_CHANGE = '/admin-password';
const LIBRARY = '/books';

// Post routes
// const ITEMS = '/books';
const ITEM = '/book/:id';
const ITEM_INSERT = '/book-create';
const ITEM_UPDATE = '/book-update/:id';
const BOOK = '/books/:_id'

export const routes = {
    HOME,
    ABOUT,
    LOG_IN,
    LOG_OUT,
    PW_CHANGE,
    ITEM,
    ITEM_INSERT,
    ITEM_UPDATE,
    LIBRARY,
    BOOK
};
