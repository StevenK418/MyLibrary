import { stringify } from "querystring";


export interface IBook
{
    id?: string;
    title: string;
    author: string;
    publisher: string;
    yearPublished: string;
    description: string;
    isbn: string;
}

export class Book
{
    id?: string;
    title: string;
    author: string;
    publisher: string;
    yearPublished: string;
    description: string;
    isbn: string;

    constructor(title: string, author: string,  publisher: string, yearPublished: string, description: string, isbn: string)
    {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.yearPublished = yearPublished;
        this.description = description;
        this.isbn = isbn;
    }
}