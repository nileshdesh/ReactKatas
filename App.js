import React from 'react';
import PageBuilder from './widgets/pageBuilder';

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
        var style = {width: '97%', tableLayout: 'fixed', height: '400px' };
        return (
            <div>
                <table style={style}>
                    <tbody>
                        <tr>
                            <td >
                                <textarea data-ref="source" onBlur={this.update.bind(this)} style={style}/> 
                            </td>
                            <td>
                            <PageBuilder {...this.state} style={style}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
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