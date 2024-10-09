import { booksService } from "../services/book.service.js"
import { BooksList } from "../cmps/BookList.jsx"

const { useState, useEffect} = React

export function OnLineBooks() {
    
    const [books, setBooks] = useState([])

    useEffect(()=>{
        loadBooks()

    },[])

    function loadBooks() {
        booksService.query().then(books => setBooks(books)).catch(err=>{
            console.log('err',err)
        })
    }
      
    function onRemoveBook(BookId) {
        booksService.remove(BookId)
            .then(() => {
                setCars(books =>
                    books.filter(book => book.id !== BookId)
                )
            })
            .catch(err => {
                console.log('Problems removing book:', err)
            })
    }

    function onSelectBookId(carId) {
        setSelectedBooId(carId)
    }

    if(!books) return
    return (
        <section className="books-index">
            <h2>Books on-line</h2>
            <BooksList onSelectBookId={onSelectBookId} onRemoveBook={onRemoveBook} books={books}/>
        </section>
    )
}