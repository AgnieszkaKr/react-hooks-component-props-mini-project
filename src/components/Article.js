const Article =({id, title, date="January 1, 1970", preview}) =>{
    return(
        <article>
            <h3 key={id}>{title}</h3>
            <small key={id}>{date}</small>
            <p key={id}>{preview}</p>
        </article>
    )
}

export default Article