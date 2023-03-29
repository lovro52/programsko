
const books = [
    { title: "The grat gatsby", author: "F. Scott Fitzgeral", publicationYear: 1925 },
    { title: "TO kill mockingbird", author: "Harper Lee", publicationYear: 1960 }
]

for (let book of books) {
    book["sales"] = Math.floor(Math.random() * 100);
}

const booksWithSales = books.map(book => {
    return {
        title: book.title,
        author: book.author,
        publicationYear: book.publicationYear,
        sales: Math.floor(Math.random() * 100)
    }
})
//console.log(booksWithSales);
//console.log(books);
/*
let students = [
    { name: "john", age: 21, gender: "male", grade: 85 },
    { name: "mary", age: 19, gender: "female", grade: 92 },
    { name: "DAVID", age: 25, gender: "male", grade: 78 },
    { name: "ana", age: 22, gender: "female", grade: 89 }
]
//console.log(students);

function findTopStudent() {
    let topGrade = 0;
    let topFemaleStudent = null;

    for (let student of students) {
        if (student.gender === "female" && student.grade > topGrade) {
            topGrade = student.grade;
            topFemaleStudent = student;
        }
    }

    return topFemaleStudent;
}
//console.log(findTopStudent());
/*
//3.
const books = [
    { title: "the great gatsby", author: "f. scott fitgerald", year: 1925 },
    { title: "to kill a mocking bird", author: "harp lee", year: 1960 }
]
//console.log(books);

for (let book of books) {
    book["sales"] = Math.floor(Math.random() * 100);
}

const booksWithSales = book.map(book => {
    return {
        title: book.title,
        author: book.author,
        year: book.year,
        sales: Math.floor(Math.random() * 100)
    }
})

//console.log(booksWithSales);
*/
//4

let bookTitle = books.filter((book) => {
    return book.year == 1925;
}).map((book) => {
    return book.title;
})
console.log(bookTitle);
