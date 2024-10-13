import { booksService } from "../services/book.service.js"
import { LongTxt } from "../cmps/LongTxt.jsx"


const { useEffect, useState } = React

export function BookDetails({ bookId, onBack }) {

    const [book, setBook] = useState(null)

    useEffect(() => {
        booksService.get(bookId)
            .then(setBook)
            .catch(err=>{
                console.log('Problem getting book:', err)
            })
    }, [])

    if (!book) return <div>Loading...</div>

    const { title, listPrice,description,thumbnail ,pageCount,publishedDate} = book
    return (
        <section className="books-details">
            <h1>Title: {title}</h1>
            <h1>Price: {listPrice.amount} <span>{listPrice.currencyCode}</span></h1>
            <h1>{listPrice.isOnSale ? 'OnSale' : ''}</h1>
            <LongTxt txt={description}/>
            <h3>Book Lenth : { readingType(pageCount) }</h3>
            <img src={`${thumbnail}`} alt="Book Image" />
            <button onClick={onBack}>Back</button>
        </section>
       
    )
}
function readingType(pageCount){
    if(pageCount<100){
        return 'Light Reading'
    }else if(pageCount>500){
        return 'Serious Reading'
    }else{
        return 'Descent Reading'
    }
}
