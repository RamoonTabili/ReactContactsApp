let newCard = React.createClass({ // eslint-disable-line no-unused-vars 
    propTypes: {
        contact: React.PropTypes.object.isRequired
        , onNewMenuItemChange: React.PropTypes.func.isRequired
        , onSubmitNewItem: React.PropTypes.func.isRequired
    }
    , render: function () {
        return (React.createElement('div', {}, React.createElement(addPeep, {
            contact: this.props.contact
            , onChange: this.props.onNewMenuItemChange
            , onSubmit: this.props.onSubmitNewItem
        })));
    }
});
let addPeep = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
        , onChange: React.PropTypes.func.isRequired
        , onSubmit: React.PropTypes.func.isRequired
    }
    , onNameChange: function (e) {
        this.props.onChange(Object.assign({}, this.props.contact, {
            name: e.target.value
        }));
    }
    , onEmailChange: function (e) {
        this.props.onChange(Object.assign({}, this.props.contact, {
            email: e.target.value
        }));
    }
    , onCountryChange: function (e) {
        this.props.onChange(Object.assign({}, this.props.contact, {
            country: e.target.value
        }));
    }
    , onSubmit: function () {
        this.props.onSubmit(this.props.contact);
    }
    , render: function () {
        return (React.createElement('form', {}, React.createElement('input', {
            type: 'text'
            , placeholder: 'Name'
            , value: this.props.contact.name
            , onChange: this.onNameChange
        }), React.createElement('input', {
            type: 'text'
            , placeholder: 'Email'
            , value: this.props.contact.email
            , onChange: this.onEmailChange
        }), React.createElement('input', {
            placeholder: 'Country Code'
            , value: this.props.contact.country
            , onChange: this.onCountryChange
        }), React.createElement('button', {
            type: 'button'
            , onClick: this.onSubmit
        }, 'Save')));
    }
});