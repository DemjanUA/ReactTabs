import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active : false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({active : true});
        this.props.onTab(e)
    }

    render() {
        return (
            <li data-index={this.props.index} onClick={this.handleClick} className="nav-item">
                <a className={ `nav-link${(this.props.active == this.props.index) ? ' active' : ''}` } href="#">{ this.props.children }</a>
            </li>
        );
    }
}

export default Button;