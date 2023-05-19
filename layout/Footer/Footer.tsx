import React from 'react'
import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'
import cn from 'classnames'
// import format from 'date-fns/format'

export default function Footer({
  className,
  ...props
}: FooterProps): JSX.Element {
  return (
    <div className={cn(className, styles.footer)} {...props}>
      Footer
    </div>
  )
}
