let allVal = {
    hash: {main: '#menu', new: '#addNew', view: '#view'}
};
let FullLists = {
    id: 'l1',
    name: 'Student List',
    studentList: [{
        key: 1,
        id: 1,
        name: 'student 1',
        email: 'abc@xyz.com',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }, {
        key: 2,
        id: 2,
        name: 'Student 2',
        email: 'abc@xyz.com',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }, {
        key: 3,
        id: 3,
        name: 'student 3',
        email: 'abc@xyz.com',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }, {
        key: 4,
        id: 4,
        name: 'student 4',
        email: 'abc@xyz.com',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }, {
        key: 5,
        id: 5,
        name: 'student 5',
        email: 'abc@xyz.com',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }]
};

// --------------------------------------------------------------------
//     Navbar code
// --------------------------------------------------------------------

let NavMenu = React.createClass({
    render: function () {
        return (
            React.createElement('ul', {className: 'nav-menu'},
                React.createElement('li', {},
                    React.createElement('a', {href: allVal.hash.main}, 'Menu')
                ),
                React.createElement('li', {},
                    React.createElement('a', {href: allVal.hash.new}, 'Add new Item')
                )
            )
        );
    }
});

// --------------------------------------------------------------------
//     Main page Code
// --------------------------------------------------------------------

let MainPage = React.createClass({
    propTypes: {
        'items': React.PropTypes.array
    },
    render: function () {
        return (
            React.createElement('div', {},
                React.createElement(NavMenu, {}),
                React.createElement('div', {className: 'list-div'},
                    React.createElement('h1', {}, FullLists.name),
                    React.createElement('ul', {className: 'list-ul'},
                        React.createElement(ListLoad, {})
                    )
                )
            )
        );
    }
});


let ListLoad = React.createClass({
    propTypes: {
        'items': React.PropTypes.array,
    },
    render: function () {
        var single = FullLists.studentList.map(function (item) {
            return React.createElement(ListItems, item);
        });

        return React.createElement('ul', {className:'StudentList'}, single);
    }
});

var ListItems = React.createClass({
    propTypes: {
        'id': React.PropTypes.number,
        'name': React.PropTypes.string,
        'email': React.PropTypes.string,
        'description': React.PropTypes.string,
    },
    render: function () {
        return (
            React.createElement('li', {id: 'selectBtn-' + this.props.id},
                React.createElement('a', {href: allVal.hash.view + '/' + this.props.id},
                    React.createElement('span', {}, this.props.name)
                )
            )
        );
    }
});


// --------------------------------------------------------------------
//     Add new form
// --------------------------------------------------------------------

let AddNewForm = React.createClass({
    propTypes: {
        itemsCount: React.PropTypes.number.isRequired,
        menuItem: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSubmit: React.PropTypes.func.isRequired
    },
    onNameChange: function (e) {
        this.props.onChange(Object.assign({}, this.props.menuItem, {name: e.target.value}));
    },
    onEmailChange: function (e) {
        this.props.onChange(Object.assign({}, this.props.menuItem, {email: e.target.value}));
    },
    onDescriptionChange: function (e) {
        this.props.onChange(Object.assign({}, this.props.menuItem, {description: e.target.value}));
    },
    onSubmit: function () {
        if (this.props.menuItem.name != '' && this.props.menuItem.email != '' && this.props.menuItem.description != '') {
            this.props.onSubmit(this.props.menuItem);
            this.props.onChange(Object.assign({}, this.props.menuItem, {name: '', email: '', description: ''}));
        } else {
            alert('All fields are required.');
        }

    },
    render: function () {
        return (
            React.createElement('div', {className: 'form-content'},
                React.createElement('div', {className: 'div-form item-count'}, 'Student Count'),
                React.createElement('div', {className: 'div-form item-count'}, this.props.itemsCount),
                React.createElement('h2', {className: 'div-form'}, 'Add New Student'),
                React.createElement('form', {className:'div-form'},
                    React.createElement('input', {
                        type: 'text',
                        placeholder: 'Name',
                        value: this.props.menuItem.name,
                        onChange: this.onNameChange
                    }),
                    React.createElement('input', {
                        type: 'email',
                        placeholder: 'Email',
                        value: this.props.menuItem.email,
                        onChange: this.onEmailChange
                    }),
                    React.createElement('textarea', {
                        placeholder: 'About Student',
                        rows: '2',
                        maxLength: '999',
                        value: this.props.menuItem.description,
                        onChange: this.onDescriptionChange
                    }),
                    React.createElement('button', {type: 'button', onClick: this.onSubmit}, 'Add')
                )
            )
        );
    }
});

let AddNew = React.createClass({

    getInitialState: function () {
        return {
            menuItem: {
                name: '',
                email: '',
                description: ''
            },
            items: FullLists.studentList,
            onNewMenuItemChange: this.updateNewMenuItem,
            onSubmitNewItem: this.addNewItem
        };
    },

    setState: function (changes) {
        Object.assign(this.state, changes);
        this.forceUpdate();
    },

    updateNewMenuItem: function (item) {
        this.setState({menuItem: item});
    },

    addNewItem: function (item) {
        let itemList = this.state.items;
        itemList.push(Object.assign({}, {key: Math.random(), id: itemList.length + 1}, item));
        this.setState({items: itemList});
    },

    render: function () {
        return (
            React.createElement('div', {className: 'main-content'},
                React.createElement(NavMenu, {}),
                React.createElement(AddNewForm, {
                    id: 'formView',
                    itemsCount: this.state.items.length,
                    menuItem: this.state.menuItem,
                    onChange: this.state.onNewMenuItemChange,
                    onSubmit: this.state.onSubmitNewItem
                })
            )
        );
    }
});

// --------------------------------------------------------------------
//      View Item Page
// --------------------------------------------------------------------

let ViewItem = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        email: React.PropTypes.string.isRequired,
        description: React.PropTypes.string
    },

    render: function() {
        return (
            React.createElement('div', {className: 'main-content'},
                React.createElement(NavMenu,{}),
                React.createElement('div', {className: 'inner-content'},
                    React.createElement('div', {className: 'item-box'},
                        React.createElement('h1', {}, this.props.name),
                        React.createElement('p', {},
                            React.createElement('span',{className:'title'},'Email'),
                            React.createElement('br',{}),
                            this.props.email
                        ),
                        React.createElement('p', {},
                            React.createElement('span',{className:'title'},'About'),
                            React.createElement('br',{}),
                            this.props.description
                        )
                    )
                )
            )
        );
    }
});

// --------------------------------------------------------------------
//     Page Final code
// --------------------------------------------------------------------

let state = {location: ''};

function setState(changes) {
    let component;
    Object.assign(state, changes);
    let splittedUrl = state.location.replace(/^#\w$\/\d/ig).split('/');
    let componentProperties = {};
    //alert(splittedUrl[0]);
    switch (splittedUrl[0]) {
    case allVal.hash.new:
        component = AddNew;
        break;
    case allVal.hash.view:
        componentProperties = FullLists.studentList.find((i) => i.id === parseInt(splittedUrl[1]));
        component = ViewItem;
        break;
    case allVal.hash.main:
    default:
        component = MainPage;
    }

    ReactDOM.render(React.createElement(component, componentProperties), document.getElementById('react-app'));
}

setState({location: location.hash});
window.addEventListener('hashchange', () => setState({location: location.hash}));
