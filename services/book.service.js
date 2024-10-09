import { storageService } from "./async-storage.service.js"
import { utilService } from "./util.service.js"

const BOOKS_KEY = 'book-list'
_createBooks() 

export const booksService = {
    query,
    get,
    remove,
    save
}


function query(filterBy = {}) {
    return storageService.query(BOOKS_KEY)
        .then(book => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                book = book.filter(book => regex.test(book.type))
            }
            return book
        })
}

function get(bookId) {
    return storageService.get(BOOKS_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOKS_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOKS_KEY, book)
    } else {
        return storageService.post(BOOKS_KEY, book)
    }
}



function _createBooks() {
    let books = utilService.loadFromStorage(BOOKS_KEY)
    if (!books || !books.length) {
        books = []
        books.push(_createBook('The Adventures of Lori Ipsi',
            utilService.makeLorem(50) ,
            'The Adventures of Lori Ipsi.jpg',
            50,
            'EUR',
            false
        ))
        books.push(_createBook('Word Atlas',
             utilService.makeLorem(50),
             'Word Atlas.jpg',
             250,
             'EUR',
             true
            ))
        books.push(_createBook('Zorba The Greek',
             utilService.makeLorem(50),
             'Zorba The Greek.jpg',
             80,
             'EUR',
             false
            ))
        utilService.saveToStorage(BOOKS_KEY, books)
    }
}

function getBook(title = '', description = 0,thumbnail='',amount=0,currencyCode='',isOnSale=false) {
    return { title: title,
         description: description,
         thumbnail:thumbnail,
         listPrice:{
            amount:amount,
            currencyCode:currencyCode,
            isOnSale:isOnSale
         }
        }
}
function _createBook(title , description,thumbnail,amount,currencyCode,isOnSale) {
    const book = getBook(title , description,thumbnail,amount,currencyCode,isOnSale)
    book.id = utilService.makeId(10)
    return book
}