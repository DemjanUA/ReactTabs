import React from 'react';
import Tab from './Tab.jsx';
import Button from './Button.jsx'

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeTabIndex : 0};

        this.handleTab = this.handleTab.bind(this);
    }

    handleTab (e) {
        const index = e.currentTarget.dataset.index;
        this.setState({activeTabIndex : index});
    }

    render () {
        return (
        <div>
            <ul className="col nav nav-pills">
                <Button index={0} active={ this.state.activeTabIndex } onTab={this.handleTab}>
                    Active
                </Button>
                <Button index={1} active={ this.state.activeTabIndex } onTab={this.handleTab}>
                    Link
                </Button>
                <Button index={2} active={ this.state.activeTabIndex } onTab={this.handleTab}>
                    Link
                    </Button>
                <Button index={3} active={ this.state.activeTabIndex } onTab={this.handleTab}>
                    Disabled
                </Button>
            </ul>
            <Tab tabIndex={ this.state.activeTabIndex } />
        </div>
        );
    }
}

export default Tabs;