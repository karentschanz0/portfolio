import Layout from '../../../components/layout/layout'
import Head from 'next/head'
import GridWatercolor from '../../../components/grid/grid-watercolor'
import { getSortedPostsData } from '../../../lib/posts-watercolor'
import styles from '../../../components/grid/grid.module.scss'
import Link from 'next/link'

export const siteTitle = 'Gallery Watercolor'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Watercolor({allPostsData}) {
  return (
    <>
      <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.masonry}>
       {allPostsData.map(({ id, title, image }) => (
         <Link href={`/gallery/watercolor/${id}`}>
           <a>
            <GridWatercolor galleryImage={image} galleryTitle={title}/>
            </a>
          </Link>
        ))}
      </div>
      </Layout>
    </>
  )
}