// Public routes
const HOME = '/';
const ABOUT = '/about';
const SIGN_UP = '/signup';
const LOG_IN = '/login';
const LIBRARY = '/library';

// Post routes
const ITEMS = '/items';
const ITEM = '/item/:id';
const ITEM_INSERT = '/item/create';
const ITEM_UPDATE = '/item/update/:id';
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
