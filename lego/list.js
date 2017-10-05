let main = React.createClass({ // eslint-disable-line no-unused-vars 
    propTypes: {
        items: React.PropTypes.array.isRequired
    }
    , render: function () {
        return (React.createElement(contactList, {
            items: this.props.items
        }));
    }
});
let contactList = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    }
    , render: function () {
        return (React.createElement('ul', {
            className: 'contact-list'
        }, this.props.items.map(i => React.createElement(contact, i))));
    }
});
let contact = React.createClass({
    propTypes: {
        id: React.PropTypes.number
        , name: React.PropTypes.string
        , email: React.PropTypes.string
        , country: React.PropTypes.string
    }
    , render: function () {
        return (React.createElement('li', {
            className: 'contact'
        }, React.createElement('a', {
            href: '#/item/' + this.props.id
        }, React.createElement('h2', {
            className: 'name'
        }, this.props.name), React.createElement('p', {
            className: 'email'
        }, 'E-mail: ' + this.props.email), React.createElement('p', {
            className: 'country'
        }, 'From: ' + this.props.country))));
    }
});