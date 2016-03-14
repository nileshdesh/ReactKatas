import React from 'react';
class App extends React.Component {
    render() {
        let title = this.props.title;
        let template = this.props.title;
        return (
            <div>
                <h1>{title}</h1>
                <h3>{template}</h3>
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