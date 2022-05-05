import { IISBNResult } from "./ISBNResult";

export interface IBook
{
    id?:string;
    title:string;
    author:string;
    publisher:string;
    yearPublished:string;
    description:string;
    isbn:string;
    coverArt:string;
    dateAdded:number;
}



export interface IBookAPI
{
    numFound:string;
    docs:docs[];
}

interface docs extends IBookAPI
{
    key:string;
    title:string;
    publish_date: string;
    isbn:string;
    publisher:string;
    author_name:string;
    first_sentence:string;
}

export class Book
{
    id?:string;
    title:string;
    author:string;
    publisher:string;
    yearPublished:string;
    description:string;
    isbn:string;
    coverArt:string;
    dateAdded:number;

    constructor(title:string, author:string,  publisher:string, yearPublished:string, description:string, isbn:string, coverArt:string, dateAdded:number)
    {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.yearPublished = yearPublished;
        this.description = description;
        this.isbn = isbn;
        this.coverArt = coverArt;
        this.dateAdded = dateAdded;
    }
}
