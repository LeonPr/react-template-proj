import { booksService } from "../services/book.service.js"


const { useState, useEffect} = React

export function OnLineBooks() {
    
    const [Books, setBooks] = useState([])
    useEffect(()=>{
        loadBooks()

    },[])

    function loadBooks() {
        Bookservice.query().then(Books => setBooks(Books))
    }
      
    if(!Books) return
    return (
        <section className="Books-table">
            <h2>Books on-line</h2>
            <table >
            {Books.map(animal=>(
                <tbody>
                <tr key={animal.id}>
                    <td >{animal.type}</td>
                    <td >{animal.count}</td>
                    <td ><a href={`https://www.google.com/search?q= ${animal.type}`}>{animal.type}</a></td>
                </tr></tbody>))}
            </table>
        </section>
    )
}