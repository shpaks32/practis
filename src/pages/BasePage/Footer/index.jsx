import React from 'react'
import CONSTANTS from './../../../constants'
import { Link, NavLink } from 'react-router-dom'
import { TiSocialLinkedinCircular, TiSocialInstagram } from 'react-icons/ti'
import { TfiYoutube } from 'react-icons/tfi'

import { FaFacebookF, FaTwitter } from 'react-icons/fa'

import styles from './Footer.module.sass'

function Footer () {
  return (
    <>
      <div className={styles.footerWrapper}>
        <div className={styles.footerLinks}>
          {CONSTANTS.FOOTER_ITEMS.map(({ label, to }, index) => (
            <NavLink key={index} to={to} className={styles.link}>
              {label}
            </NavLink>
          ))}
        </div>
        <ul className={styles.socialNetworkWrapper}>
          <li>
            <a
              className={styles.socialLink}
              href='https://google.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <TiSocialLinkedinCircular />
            </a>
          </li>
          <li>
            <a
              className={styles.socialLink}
              href='https://google.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <TiSocialInstagram />
            </a>
          </li>
          <li>
            <a
              className={styles.socialLink}
              href='https://google.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <TfiYoutube />
            </a>
          </li>
          <li>
            <a
              className={styles.socialLink}
              href='https://google.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              className={styles.socialLink}
              href='https://google.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebookF />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.secondFooter}>
        <h3>AGRIDERA SEEDS & AGRICULTURE LTD. © 2020</h3>
      </div>
    </>
  )
}

export default Footer
