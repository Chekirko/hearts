import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: 's' | 'm' | 'l'
  children: ReactNode
}
