import React from 'react';
import ReactDOM from 'react-dom';

class PageBuilder extends React.Component {
    constructor() {
        super();
    }
    render() {
        var source = JSON.parse(this.props.source ? this.props.source : '{"tag": "input", "children": []}');
        var element = createElements(source);

        return element;
    }



}

function createElements(element) {
    if (element.children) {
        var childElements = element.children.map(function(child) {
            return createElements(child);
        });
        return React.createElement(element.tag, element.attrs, childElements);
    }
    var content = element.content ? element.content : '';
    return (<element.tag {...element.attrs}>{content}</element.tag>)
}

export default PageBuilder;
