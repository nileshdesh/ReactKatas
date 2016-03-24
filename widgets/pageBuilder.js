import React from 'react';
import ReactDOM from 'react-dom';

class PageBuilder extends React.Component {
    constructor() {
        super();
    }
    render() {
        var source = JSON.parse(this.props.source ? this.props.source : '{"tag": "input"}');
        debugger
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
    if (element.content)
        return (<element.tag {...element.attrs}>{element.content}</element.tag>)
    else
        return (<element.tag {...element.attrs}/>)
}

export default PageBuilder;
