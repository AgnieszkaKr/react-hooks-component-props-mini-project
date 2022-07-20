import Article from './Article'
const ArticleList =({posts}) =>{
    let post = posts.map(post =>{
        return(
            <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
        )
    })
    return(
        <main>
            {post}
        </main>    
    )
}

export default ArticleList