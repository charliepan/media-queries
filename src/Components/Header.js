import React, {Component} from 'react';


class Header extends Component {
    constructor(props){
        super(props);
        //Dropdown needs a value to work with conditional rendering
        this.state= {
            dropdownView: false
        }
    }

    handleToggle = () =>{
        this.setState({dropdownView: !this.state.dropdownView});
    }

    render(){
        return (
            <div className='header'>
                <h3 className='header-logo'>Start Bootstrap</h3>
                <div className='button-container'>
                    <button className='dropdown-button' onClick={this.handleToggle}>
                        Menu
                    </button>
                </div>
                {this.state.dropdownView
                ? (<nav className='dropdown-menu'>
                    <span>SERVICES</span>
                    <span>PORTFOLIO</span>
                    <span>ABOUT</span>
                    <span>TEAM</span>
                    <span>CONTACT</span>
                  </nav>)
                : null}
                <nav className="desktop-links">
                    <span>SERVICES</span>
                    <span>PORTFOLIO</span>
                    <span>ABOUT</span>
                    <span>TEAM</span>
                    <span>CONTACT</span>
                </nav>
            </div>
        )
    }
}

export default Header;