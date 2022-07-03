import { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, setBooks] = useState([
        { title: 'name of the wind', id: 1 },
        { title: 'the way of the kings', id: 2 },
        { title: 'a magia da realidade', id: 3 }
    ]);

    return (
        <BookContext.Provider value={{books}}>
            { props.children }
        </BookContext.Provider>
    );
}

export default BookContextProvider;