import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface NavLinkProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
  route: string
}
