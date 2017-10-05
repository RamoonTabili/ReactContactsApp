let state = {};
let setState = function (changes) {
    let component;
    let componentProperties = {};
    Object.assign(state, changes);
    let splittedUrl = state.location.replace(/^#\/?|\/$/g, '').split('/');
    switch (splittedUrl[0]) {
    case 'new':
        component = newCard;
        componentProperties = {
            contact: state.contact
            , onNewMenuItemChange: function (item) {
                setState({
                    contact: item
                });
            }
            , onSubmitNewItem: function (item) {
                let newContact = state.items;
                const newKey = newContact.length + 1;
                newContact.push(Object.assign({}, {
                    key: newKey
                    , id: newKey
                }, item));
                setState({
                    items: newContact
                    , contact: {
                        name: ''
                        , email: ''
                        , country: ''
                    }
                });
            }
        };
        break;
    case 'item':
        component = contactPage;
        componentProperties = state.items.find(i => i.key == splittedUrl[1]);
        break;
    default:
        component = main;
        componentProperties = {
            items: state.items
        };
    }
    let reactCreate = React.createElement('div', {}, React.createElement(menu, {}), React.createElement(component, componentProperties));
    ReactDOM.render(reactCreate, document.getElementById('react-app'));
};
window.addEventListener('hashchange', () => setState({
    location: location.hash
}));
setState({
    contact: {
        name: ''
        , email: ''
        , country: ''
    }
    , location: location.hash
    , items: contactBook
});