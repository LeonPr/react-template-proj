
export function BookPreview({ book }) {

    const { title, description ,thumbnail } = book
    return (
        <article className="book-preview">
            <h2>title: {title}</h2>
            <h4>Description: {description}</h4>

            <img src={`${thumbnail}`} alt="Book Image" />
        </article>
    )
}
