export interface IReview
{
    id?:string;
    bookId:string;
    rating:string;
    review:string;
}

export class Review
{
    id?:string;
    bookId:string;
    rating:string;
    review:string;

    constructor(bookID:string, rating:string, review:string)
    {
            this.bookId = bookID;
            this.rating = rating;
            this.review = review;
    }
}