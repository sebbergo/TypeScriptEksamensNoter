interface IBook {
    title: string,
    readonly author: string,
    published?: Date,
    pages?: number
}

function makeIBook(book: IBook){
    console.log(book)
}

//Duck-Typing is known from TypeScript as when you make an instance of an interface
//and the compiler checks with the interface and instance that they have the same
//properties. As in this example the interface IBook and the instance below, has
//the same amount and are titled the same. Else the compiler throws an error
makeIBook({title: "Gustavs Verden", author: "Mikkel Strandsøe", published: new Date(1999, 1, 10), pages: 10001})

//Her har vi eksempel på at man kan gøre nogen properties på interfacet
//til optional ved at sætte et ? tegn bag navnet på property.
makeIBook({title: "Bølle Bob", author: "En dansk forfatter"})

//Man kan også lave properties til at være readonly, som gør at man
//ikke kan ændre værdien efter instanceringen af interfacet er sket

class Book implements IBook {
    title: string
    author: string
    published?: Date | undefined
    pages?: number | undefined

    constructor(title: string, author: string){
        this.title = title;
        this.author = author;
    }
}
