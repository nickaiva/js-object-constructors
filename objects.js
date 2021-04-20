let The7Habits = {
    title: "The 7 habits",
    author: "L.Shaw",
    pages: 100,
    read: "not read yet",
    info: function(){ return `The title is ${this.title} by ${this.author} ,${this.pages}, ${this.read}.`},
   
};

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `The title is ${this.title} by ${this.author} ,${this.pages}, ${this.read}.`;
    }
}

let Book1 = new Book("The hobbit","S.Talkin",500,"not read yet");
console.log(Book1.info());