import React from 'react'
import Image from 'next/image'
import { TopPageComponentProps } from './TopPageComponent.props'
import styles from './TopPageComponent.module.css'
import cn from 'classnames'
import Section from '@/components/Section/Section'
import Card from '@/components/Card/Card'

// import format from 'date-fns/format'

export default function TopPageComponent({
  className,
  ...props
}: TopPageComponentProps): JSX.Element {
  return (
    <div className={cn(className, styles.wrapper)} {...props}>
      <section className={styles.hero}>
        <div className={styles.imgWrapper}>
          <Image
            className={cn(styles.img, styles.cover)}
            src="/pexels-rdne-stock-project-6709142.jpg"
            alt="Picture of the author"
            width={1600}
            height={800}
            // fill={true}
            layout="fixed"
          />
        </div>
        <div className={styles.textContainer}>
          <p>Громадська організація</p>
          <h1>Небайдужі серця України</h1>
        </div>
      </section>
      <Section type="primary">
        <div className={styles.h2Wrapper}>
          <h2>Напрямки діяльності</h2>
        </div>
        <div className={styles.ministries}>
          <Card size="s">
            <img src="/001-helping-hand (2).png" alt="" />
            <h3>Гуманітарна допомога</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam
              sollicitudin tempor id eu nisl. Magnis dis parturient montes
              nascetur ridiculus mus mauris.
            </p>
          </Card>
          <Card size="s">
            <img src="/002-house (2).png" alt="" />
            <h3>Допомога внутрішньо переміщеним особам</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam
              sollicitudin tempor id eu nisl. Magnis dis parturient montes
              nascetur ridiculus mus mauris.
            </p>
          </Card>
          <Card size="s">
            <img src="/003-food-and-drink (2).png" alt="" />
            <h3>Годування безхатченків</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam
              sollicitudin tempor id eu nisl. Magnis dis parturient montes
              nascetur ridiculus mus mauris.
            </p>
          </Card>
          <Card size="s">
            <img src="/004-problems (2).png" alt="" />
            <h3>Реабілітація залежних</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam
              sollicitudin tempor id eu nisl. Magnis dis parturient montes
              nascetur ridiculus mus mauris.
            </p>
          </Card>
          <Card size="s">
            <img src="/005-orphan (2).png" alt="" />
            <h3>Служіння дітям-сиротам</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam
              sollicitudin tempor id eu nisl. Magnis dis parturient montes
              nascetur ridiculus mus mauris.
            </p>
          </Card>
          <Card size="s">
            <img src="/006-soldier (2).png" alt="" />
            <h3>Допомога воїнам</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam
              sollicitudin tempor id eu nisl. Magnis dis parturient montes
              nascetur ridiculus mus mauris.
            </p>
          </Card>
          <Card size="s">
            <img src="/007-beach-vacation (2).png" alt="" />
            <h3>Дитячий відпочинок</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam
              sollicitudin tempor id eu nisl. Magnis dis parturient montes
              nascetur ridiculus mus mauris.
            </p>
          </Card>
          <Card size="s">
            <img src="/008- (2).png" alt="" />
            <h3>Підтримка сімей загиблих воїнів</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam
              sollicitudin tempor id eu nisl. Magnis dis parturient montes
              nascetur ridiculus mus mauris.
            </p>
          </Card>
        </div>
      </Section>
      <Section type="secondary">hshfskshfksh</Section>
    </div>
  )
}
