let contactPage = React.createClass({ // eslint-disable-line no-unused-vars 
    propTypes: {
        name: React.PropTypes.string
        , email: React.PropTypes.string
        , country: React.PropTypes.string
    }
    , render: function () {
        return (React.createElement('div', {
            className: 'contact-card'
        }, React.createElement('h1', {}, this.props.name), React.createElement('a', {
            className: 'mail'
            , href: 'mailto:' + this.props.email
        }, 'E-mail: ' + this.props.email), React.createElement('p', {
            className: 'country'
        }, 'From: ' + this.props.country)));
    }
});