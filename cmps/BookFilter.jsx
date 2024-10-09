
const { useState, useEffect } = React

export function BookFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
                value = +value
                break;               
            case 'range':
                value = +value
                break;

            case 'checkbox':
                value = target.checked
                break
        }

        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    const { title, description,amount ,isOnSale} = filterByToEdit

    return (
        <section className="book-filter">
            <h2>Filter Our Books</h2>
            <form>
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} value={title} type="text" name="title" id="title" />

                <label htmlFor="description">Description</label>
                <input onChange={handleChange} value={description} type="text" name="description" id="description" /> 
 
                <label htmlFor="amount">Price</label>
                <input onChange={handleChange} value={amount} type="number" name="amount" id="amount" />

                <label htmlFor="isOnSale">OnSale</label>
                <input onChange={handleChange} value={isOnSale} type="checkbox" name="isOnSale" id="isOnSale" />
                
            </form>
        </section>
    )
}