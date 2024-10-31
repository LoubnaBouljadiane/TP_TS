export enum Status {
    Read = 'Read',
    ReRead = 'Re-read',
    DNF = 'DNF',
    CurrentlyReading = 'Currently reading',
    ReturnedUnread = 'Returned Unread',
    WantToRead = 'Want to read'
  }
  
  export enum Format {
    Print = 'Print',
    PDF = 'PDF',
    Ebook = 'Ebook',
    AudioBook = 'AudioBook'
  }
  
  export class Book {
    constructor(
      public title: string,
      public author: string,
      public pages: number,
<<<<<<< HEAD
      public pagesRead: number,
      public status: Status,
      public format: Format,
      public suggestedBy: string ,
      public price: number ,
=======
      public status: Status,
      public price: number ,
      public pages_read: number,
      public format: Format,
      public suggested_by: string ,
>>>>>>> d3ca953 (Dernierres modifs)
      public finished:boolean
    ) {}
  
    currentlyAt(): number {
<<<<<<< HEAD
      return this.pagesRead;
    }
  
    updateFinished(): void {
    this.finished = this.pagesRead >= this.pages;
=======
      return this.pages_read;
    }
  
    updateFinished(): void {
    this.finished = this.pages_read >= this.pages;
>>>>>>> d3ca953 (Dernierres modifs)
    }
  }
  