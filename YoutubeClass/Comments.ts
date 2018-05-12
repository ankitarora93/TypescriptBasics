class Comments {
    commentor: User;
    commentBody: string;
    date: Date;
    upvotes: number;
    downvotes: number;
    spam: boolean;

    constructor(commentor: User, commentBody: string, date: Date, upvotes: number, downvotes: number, spam: boolean) {
        this.commentor = commentor;
        this.commentBody = commentBody;
        this.date = date;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.spam = spam;
    }
}