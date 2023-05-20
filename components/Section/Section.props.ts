import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface SectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: 'primary' | 'secondary'
  children: ReactNode
}
