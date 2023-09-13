import Header from "./Header"
import Meta from "./Meta"
// import styles from "../styles/Layout.module.css"

export default function Layout(props) {
  return (
      <section className='layout'>
        <Meta
            siteTitle={props.siteTitle}
            siteDescription={props.siteDescription}
        />
        <Header siteTitle={props.siteTitle} />
        <div className='content'>{props.children}</div>
      </section>
  )
}
