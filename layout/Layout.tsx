/* eslint-disable indent */
import React, { FunctionComponent } from 'react'
import { LayoutProps } from './Layout.props'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) =>
  function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
