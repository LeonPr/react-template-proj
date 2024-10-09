import { booksService } from "../services/book.service.js"

const { useEffect, useState } = React

export function CarDetails({ bookId, onBack }) {

    const [book, setBook] = useState(null)

    useEffect(() => {
        booksService.get(bookId)
            .then(setBook)
            .catch(err=>{
                console.log('Problem getting book:', err)
            })
    }, [])

    if (!book) return <div>Loading...</div>

    const { title, listPrice,description,thumbnail } = book
    return (
        <section className="car-details">
            <h1>Title: {title}</h1>
            <h1>Price: {listPrice.amount} <span>{listPrice.currencyCode}</span></h1>
            <h1>{listPrice.isOnSale ? OnSale : ''}</h1>
            <p>{description}</p>
            <img src={`../assets/img/${thumbnail}`} alt="Book Image" />
            <button onClick={onBack}>Back</button>
        </section>
    )
}