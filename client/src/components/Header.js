import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <li>
            <a href='/auth/google'>
              Login With Google
            </a>
          </li>
        )
      default:
        return <li>Logout</li>
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a className='left brand-logo' href='/'>
            Survey Ape
          </a>
          <ul className='right'>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Header)
