import React from 'react'
import styles from './Card.module.css'
import { CardProps } from './Card.props'
import cn from 'classnames'

export default function CardWithIcon({
  size = 's',
  className,
  children,
  ...props
}: CardProps): JSX.Element {
  return (
    <div
      className={cn(className, styles.card, {
        [styles.small]: size === 's',
        [styles.medium]: size === 'm',
        [styles.large]: size === 'l',
      })}
      {...props}
    >
      {children}
    </div>
  )
}
