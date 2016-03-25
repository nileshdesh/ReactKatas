import React from 'react';
import ReactDOM from 'react-dom';

class PageBuilder extends React.Component {
    constructor() {
        super();
    }
    render() {
        var source = JSON.parse(this.props.source ? this.props.source : '{"tag": "input"}');
        var element = createElements(source);

        return element;
    }



}

function createElements(element, index = 0) {
    if (element.children) {
        var childElements = element.children.map(function(child, index) {
          return createElements(child, index);
        });
          return (<element.tag {...element.attrs}>{childElements}</element.tag>);
        
    }
    if (element.content)
        return (<element.tag {...element.attrs}>{element.content}</element.tag>)
    else
        return (<element.tag {...element.attrs}/>)
}

export default PageBuilder;
