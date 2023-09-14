import Link from "next/link"
import Image from "next/image"
import { useState } from "react"


function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
}

const BlogList = ({ allBlogs, allTags }) => {
    const [tagFilter, setTagFilter] = useState('');

    const determineTagClass = tag => {
        return tagFilter ? tag === tagFilter ? ' selected-tag' : ' unselected-tag' : '';
    }

    const selectTag = (e) => {
        const value = e.target.textContent;
        const filter = value === tagFilter ? '' : value;
        setTagFilter(filter);
   } 

    return (
        <div className="container">
            <div className="tag-list">
            { allTags && allTags.map((tag, i) => (
                <div className={`post-tag${determineTagClass(tag)}`} key={i}><span className="post-tag-hash">#</span><span onClick={selectTag} className="filter-tag post-tag-text">{tag}</span></div>
            )) }
            </div>
            <div className="blog-list">
                <ul>
                    {
                        allBlogs && allBlogs.length >= 1 &&
                        allBlogs.filter(post => !tagFilter || post.frontmatter.tags.includes(tagFilter)).map(post => (
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
        </div>
    )
}

export default BlogList
