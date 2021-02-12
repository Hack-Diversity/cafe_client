// Public routes
const HOME = '/';
const ABOUT = '/about';
const SIGN_UP = '/signup';
const LOG_IN = '/login';
const LIBRARY = '/library';

// Post routes
const ITEMS = '/library';
const ITEM = '/book/:id';
const ITEM_INSERT = '/book/create';
const ITEM_UPDATE = '/book/update/:id';
const BOOK = '/library/:_id'

export const routes = {
    HOME,
    ABOUT,
    SIGN_UP,
    LOG_IN,
    ITEMS,
    ITEM,
    ITEM_INSERT,
    ITEM_UPDATE,
    LIBRARY,
    BOOK
};
