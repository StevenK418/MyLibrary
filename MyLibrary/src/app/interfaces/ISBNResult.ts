export interface IISBNResult
{
    title:string;
    authors:string;
    publishers:string;
    publish_date:string;
    isbn_10:string;
}

export class ISBNResult
{
    title:string;
    authors:string;
    publishers:string;
    publish_date:string;
    isbn_10:string;

    constructor(title:string, authors:string,  publishers:string, publish_date:string, isbn:string)
    {
        this.title = title;
        this.authors = authors;
        this.publishers = publishers;
        this.publish_date = publish_date;
        this.isbn_10 = isbn;
    }
}
