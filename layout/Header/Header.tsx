import React from 'react'
import { HeaderProps } from './Header.props'
import styles from './Header.module.css'
import cn from 'classnames'
import NavLink from '@/components/NavLink/NavLink'
import LogoIcon from './logo.svg'

export default function Header({
  className,
  ...props
}: HeaderProps): JSX.Element {
  return (
    <div className={cn(className, styles.header)} {...props}>
      <div className={styles.logoWrapper}>
        <LogoIcon className={styles.logo} />
      </div>
      <div className={styles.nav}>
        <NavLink route="">Головна</NavLink>
        <NavLink route="activity">Діяльність</NavLink>
        <NavLink route="about">Про нас</NavLink>
        <NavLink route="contacts">Контакти</NavLink>
        <NavLink route="gallery">Галерея</NavLink>
      </div>
    </div>
  )
}
