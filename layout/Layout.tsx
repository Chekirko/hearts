import React from 'react'
import { LayoutProps } from './Layout.props'
import Footer from './Footer/Footer'

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
