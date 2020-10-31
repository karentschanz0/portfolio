import Head from 'next/head'
import Layout from '../../../components/layout/layout'
import Date from '../../../components/date/date'
import utilStyles from '../../../styles/utils.module.css'
import { getAllPostIds, getPostData } from '../../../lib/posts-watercolor'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <div>
          <img src={postData.imageFull} />
        </div>

        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      </article>

    </Layout>
  )
}

// VA RECUPERER LES DATAS
export async function getStaticPaths() {
  // return a list of posts
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

// VA SPECIER QU'ON VEUT L'ID EN PARAMETRE
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}