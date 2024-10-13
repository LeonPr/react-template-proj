import { BookPreview} from "./BookPreview.jsx"
import { BookEdit } from "../pages/BookEdit.jsx"

export function BooksList({ books, onRemoveBook, onSelectBookId }){

    return (
        <ul className="book-list">
            {books.map(book =>
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section>
                        <button onClick={() => onRemoveBook(book.id)}>Remove</button>
                        <button onClick={() => onSelectBookId(book.id)}>Details</button>
                    </section>
                </li>
            )}
        </ul>
    )

}