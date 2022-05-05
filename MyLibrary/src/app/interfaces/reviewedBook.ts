export interface IReviewedBook
{
    id?:string;
    title:string;
    author:string;
    publisher:string;
    yearPublished:string;
    description:string;
    isbn:string;
    coverArt:string;
    rating?:string;
    review?:string
}

export class ReviewedBook
{
    id?:string;
    title:string;
    author:string;
    publisher:string;
    yearPublished:string;
    description:string;
    isbn:string;
    coverArt:string;
    rating?:string;
    review?:string

    constructor(title:string, author:string,  publisher:string, yearPublished:string, description:string, isbn:string, coverArt:string, rating:string, review:string)
    {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.yearPublished = yearPublished;
        this.description = description;
        this.isbn = isbn;
        this.coverArt = coverArt;
        this.rating = rating;
        this.review = review;
    }
}
