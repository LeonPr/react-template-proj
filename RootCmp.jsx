
const { useState } = React
const Router = ReactRouterDOM.HashRouter
const { Routes, Route, Navigate } = ReactRouterDOM

import { Home } from "./pages/Home.jsx"
import { OnLineBooks } from "./pages/BookIndex.jsx"
import { About } from "./pages/AboutUs.jsx"
import { AppHeader } from "./cmps/AppHeader.jsx"
import { BookDetails } from "./pages/BookDetails.jsx"
import { BookEdit } from "./pages/BookEdit.jsx"
import { Team } from "./cmps/Team.jsx"
import { Vision } from "./cmps/Vision.jsx"

export function App() {
    const [page, setPage] = useState('books')

    return (
        <Router>
            <section className="app">
                <AppHeader />
                <main className="main-layout">
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />

                        <Route path="/about" element={<About />} >
                            <Route path="/about/team" element={<Team />} />
                            <Route path="/about/vision" element={<Vision />} />
                        </Route>

                        <Route path="/book" element={<OnLineBooks />} />
                        <Route path="/book/:bookId" element={<BookDetails />} />
                        <Route path="/book/book" element={<BookEdit />} />
                        <Route path="/book/edit/:bookId" element={<BookEdit />} />
                        {/* <Route path="*" element={<NotFound />} /> */}
                    </Routes>
                </main>
            </section>
        </Router>
    )
}