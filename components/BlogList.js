import Link from "next/link"
import Image from "next/image"

function truncateSummary(content) {
    return content.slice(0, 200).trimEnd()
}

function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
}

const BlogList = ({ allBlogs }) => {
    return (
        <div className="blog-list container">
            <ul>
                {
                    allBlogs && allBlogs.length >= 1 &&
                    allBlogs.map(post => (
                        <li key={post.slug}>
                            <Link href={{ pathname: `/blog/${post.slug}` }} className='blog-link'>
                                <div className='hero-image'>
                                    <Image
                                        width={384}
                                        height={288}
                                        src={post.frontmatter.hero_image}
                                        alt={post.frontmatter.hero_image}
                                    />
                                </div>
                                <div className='blog-info'>
                                    <h2 className="blog-info-title">{post.frontmatter.title}</h2>
                                    <h4 className='blog-info-date'>{reformatDate(post.frontmatter.date)}</h4>
                                    <p>{post.frontmatter.description}</p>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default BlogList
