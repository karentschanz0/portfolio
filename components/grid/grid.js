import styles from './grid.module.scss'

export default function Grid(props) {
  return (
          <div className={styles.grid}>
            <img src={props.galleryImage} />
            <div className={styles.grid__body}>
              <div className={styles.relative}>
                <h1 className={styles.grid__title}>{props.galleryTitle}</h1>
                <p className={styles.grid__author}>{props.galleryTitle}</p>
              </div>
              <div>
                <span className={styles.grid__tag}>#tag1</span>
              </div>
            </div>
          </div>
  )
}