

import { Home } from "./pages/Home.jsx"
import { OnLineBooks } from "./pages/BookIndex.jsx"
import { About } from "./pages/AboutUs.jsx"
import { AppHeader } from "./cmps/AppHeader.jsx"

const { useState } = React

export function App() {
    const [page, setPage] = useState('books')

    return (
        <section className="app">
            <AppHeader onSetPage={(page) => setPage(page)} />
            {/* <header className="app-header main-layout">
                <h1>Miss Books</h1>
            </header> */}
            <main className="main-layout">

                {page === 'home' && <Home />}
                {page === 'about' && <About />}
                {page === 'books' && <OnLineBooks />}

                {/* <Home /> */}
            </main>
        </section>
    )
}