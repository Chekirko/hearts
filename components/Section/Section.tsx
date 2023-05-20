import React from 'react'
import styles from './Section.module.css'
import { SectionProps } from './Section.props'
import cn from 'classnames'

export default function Section({
  type = 'primary',
  className,
  children,
  ...props
}: SectionProps): JSX.Element {
  return (
    <div
      className={cn(className, styles.section, {
        [styles.primary]: type === 'primary',
        [styles.secondary]: type === 'secondary',
      })}
      {...props}
    >
      {children}
    </div>
  )
}
