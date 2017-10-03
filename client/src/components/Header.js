import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a className='left brand-logo' href='/'>
            Survey Ape
          </a>
          <ul className='right'>
            <li>
              <a href='/auth/google'>
                Login With Google
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
