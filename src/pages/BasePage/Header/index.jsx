import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { CiSearch } from 'react-icons/ci'
import styles from './Header.module.sass'
import CONSTANTS from './../../../constants'

const getNavLinkClass = ({ isActive }) =>
  classNames(styles.menuLink, { [styles.activeLink]: isActive })

function Header () {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <NavLink to='/'>
          <img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt='Logo' />
        </NavLink>
      </div>
      <div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type='text'
            name=''
            id=''
            placeholder='Search'
          />
          <button className={styles.btnLup}>
            <CiSearch />
          </button>
        </div>
        <div className={styles.menuContainer}>
          {CONSTANTS.MENU_ITEMS.map(({ label, to }, index) => (
            <NavLink key={index} to={to} className={getNavLinkClass}>
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
