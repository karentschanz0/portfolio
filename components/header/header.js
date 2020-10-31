import styles from './header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={ 'fixed top-0 w-3/12 py-32 ' + styles.header}>
      <Link href={`/`}>
        <a className={styles.wrapper}><div className={styles.logo}></div></a>
      </Link>
      <nav>
        <ul className={styles.container__list}>
          <li>
            Gallery
            <ul>
              <li>
                <Link href={`/gallery/sketch`}>
                  <a>sketch</a>
                </Link>
              </li>
              <li>
                <Link href={`/gallery/watercolor/all`}>
                  <a>watercolor</a>
                </Link>
              </li>
              <li>
                <Link href={`/gallery/digital/all`}>
                  <a>digital</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}