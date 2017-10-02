// var ListItems = React.createClass({
//     propTypes: {
//         "id": React.PropTypes.number,
//         "name": React.PropTypes.string,
//         "email": React.PropTypes.string,
//         "onDeleteButtonClicked": React.PropTypes.func
//     },
//     render: function() {
//         return (
//             React.createElement("li", {},
//                 React.createElement("span", {}, this.props.name),
//                 React.createElement("a", {
//                     href: this.props.email
//                 }, this.props.email),
//                 React.createElement("button", {
//                     id: "deleteBtn-" + this.props.id,onClick:this.props.onDeleteButtonClicked
//                 }, "x"),
//             )
//         )
//     }
// });
//
//
// var List = React.createClass({
//     propTypes: {
//         "items": React.PropTypes.array,
//         "deleteElement": React.PropTypes.func
//     },
//     render: function() {
//         var deleteElementCallBack = this.props.deleteElement;
//         var listofListItems = this.props.items.map(function(item) {
//             item.onDeleteButtonClicked = deleteElementCallBack;
//             return React.createElement(ListItems, item);
//         });
//
//         return (
//             React.createElement("ul", {}, listofListItems)
//         );
//     }
// });
//
// var state = {};
//
//
// function setState(change) {
//     state = Object.assign({}, state, change);
//     state.deleteElement = function() {
//         alert("hi");
//     }
//
//     var MainView = React.createElement(List, state);
//     ReactDOM.render(MainView, document.getElementById("react-app"));
//
// }
//
//
// setState({
//     items: [{
//         key: 1,
//         id: 1,
//         name: "Harsh Doshi",
//         email: "HD@ac.com"
//     },
//         {
//             key: 2,
//             id: 2,
//             name: "JK",
//             email: "JK@ac.com"
//         },
//         {
//             key: 3,
//             id: 3,
//             name: "RS",
//             email: "RS@ac.com"
//         },
//     ]
//
// });

let MainPage = React.createClass({
    render: function () {
        return (
            React.createElement("div", {},
                React.createElement("div", {}, "This is the main page")
            )
        )
    }
});

let MenuPage = React.createClass({
    render: function () {
        return (
            React.createElement("div", {},
                React.createElement("div", {}, "This is the menu view")
            )
        )
    }
});