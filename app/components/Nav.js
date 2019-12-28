import React, {useContext} from 'react'
import ThemeContext from '../contexts/theme'
import { NavLink } from 'react-router-dom'
import {FaGithub} from 'react-icons/fa';

const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

export default function Nav ({onToggleTheme}) {
  const theme = useContext(ThemeContext);
  return (
      <nav className='row space-between'>
          <ul className='row nav'>
            <li>
              <NavLink
                to='/'
                exact
                activeStyle={activeStyle}
                className='nav-link'>
                  Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/battle'
                activeStyle={activeStyle}
                className='nav-link'>
                  Battle
              </NavLink>
            </li>
          </ul>
          <div className='row'>
            <button
              style={{fontSize: 30}}
              className='btn-clear'
              onClick={onToggleTheme}
            >
              {theme === 'light' ? '🔦' : '💡'}
            </button>
            <a
              style={{marginLeft: 5, marginTop:15}}
              href="https://github.com/deepak-chandani/github-battle-hooks"
              target="_blank"
            >
              <FaGithub color={theme==='light' ? 'black' : 'white'} size={35} />
            </a>
          </div>
      </nav>
  )
}
