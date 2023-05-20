import React from 'react'
import { NavLinkProps } from './NavLink.props'
import styles from './NavLink.module.css'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavLink({
  route,
  children,
  className,
  ...props
}: NavLinkProps): JSX.Element {
  const router = useRouter()
  return (
    <div
      className={cn(className, styles.wrapper, {
        [styles.active]: `/${route}` === router.asPath,
      })}
      {...props}
    >
      <Link href={`/${route}`} className={styles.link}>
        {children}
      </Link>
    </div>
  )
}
