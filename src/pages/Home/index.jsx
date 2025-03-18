import React from 'react'
import CONSTANTS from './../../constants'
import styles from './Home.module.sass'

function Home () {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.imgContainer}>
          <img
            className={styles.bgImg}
            src={`${CONSTANTS.STATIC_IMAGES_PATH}home-bg.png`}
            alt='home-bg'
          />
        </div>
        <div className={styles.mainInfo}>
          <h1 className={styles.mainTitle}>
            Agridera Seeds and Agriculture Ltd
          </h1>
          <button className={styles.btn}>READ MORE</button>
        </div>
      </div>

      <div className={styles.cropsContainer}>
        {CONSTANTS.CROPS.map((crop, index) => (
          <div key={index} className={styles.item}>
            <img src={crop.img} alt={crop.name} className={styles.icon} />
            <p className={styles.name}>{crop.name}</p>
          </div>
        ))}
      </div>

      <div className={styles.sectionWrapper}>
        <div className={styles.sectionsContainer}>
          {CONSTANTS.HOME_SECTIONS.map((section, index) => (
            <div
              key={index}
              className={`${styles.section} ${
                index % 2 !== 0 ? styles.sectionReverse : ''
              }`}
            >
              <div className={styles.sectionInfo}>
                <h2 className={styles.secTitle}>{section.title}</h2>
                <p className={styles.secDecoratEl}>*****</p>
                <p className={styles.secDescription}>{section.description}</p>
              </div>
              <div className={styles.secImgWrapper}>
                <img
                  src={section.img}
                  alt={section.title}
                  className={styles.sectionImg}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.seedWrapper}>
        <h2 className={styles.seedTitleH2}>AGRIDERA’S MAIN ACTIVITIES</h2>
        <div className={styles.seedList}>
          {CONSTANTS.SEED_CATEGORIES.map((category, index) => (
            <div key={index} className={styles.seedItem}>
              <img
                className={styles.seedImg}
                src={category.image}
                alt={category.title}
              />
              <h3 className={styles.seedTitle}>{category.title}</h3>
              <p className={styles.seed}>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
