import React from 'react';
class App extends React.Component {
    constructor() {
        super();
        this.state = { title : "Default title from state" ,
                        template : "Empty template" };
    }
    update(e) {
        var newState = {};
        newState[e.target.attributes['data-ref'].value] = e.target.value ;
        this.setState(newState);        
    }
    render() {
        let title = this.state.title;
        let template = this.state.template;
        return (
            <div>
                <h1>{title}</h1>
                <input type="text" data-ref="title" onChange={this.update.bind(this)}/> 
                <h3>{template}</h3>
                <input type="text" data-ref="template" onChange={this.update.bind(this)}/> 
            </div>
        );
    }
}

App.propTypes = {
    title: React.PropTypes.string.isRequired,
    template: React.PropTypes.string.isRequired
}

App.defaultProps = {
    title: "Default Title",
    template: "Default Template"
}

export default App;