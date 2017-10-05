let menu = React.createClass({ // eslint-disable-line no-unused-vars 
    render: function () {
        return (React.createElement('ul', {
            className: 'nav-menu'
        }, React.createElement('li', {}, React.createElement('a', {
            href: '#'
        }, 'Contacts')), React.createElement('li', {}, React.createElement('a', {
            href: '#new'
        }, 'New Contact'))));
    }
});