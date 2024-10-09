import { booksService } from "../services/book.service.js"
import { BooksList } from "../cmps/BookList.jsx"
import { BookDetails } from "./BookDetails.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"

const { useState, useEffect } = React

export function OnLineBooks() {

    const [books, setBooks] = useState([])
    const [selectedBookId, setSelectedBookId] = useState(null)
    const [filterBy, setFilterBy] = useState(booksService.getDefaultFilter())


    useEffect(() => {
        loadBooks()

    }, [filterBy])

    function loadBooks() {
        booksService.query(filterBy).then(books => setBooks(books)).catch(err => {
            console.log('err', err)
        })
    }

    function onRemoveBook(BookId) {
        booksService.remove(BookId)
            .then(() => {
                setBooks(books =>
                    books.filter(book => book.id !== BookId)
                )
            })
            .catch(err => {
                console.log('Problems removing book:', err)
            })
    }

    function onSelectBookId(bookId) {
        setSelectedBookId(bookId)
    }

    function onSetFilter(filterByToEdit) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterByToEdit }))
    }

    if (!books) return
    return (
        <section className="books-index">
            <h2>Books on-line</h2>
            {!selectedBookId ?
                <React.Fragment>
                    <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} />
                    <BooksList onSelectBookId={onSelectBookId} onRemoveBook={onRemoveBook} books={books} />
                </React.Fragment>
                : <BookDetails onBack={() => setSelectedBookId(null)} bookId={selectedBookId} />
            }
        </section>
    )
}