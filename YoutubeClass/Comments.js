var Comments = /** @class */ (function () {
    function Comments(commentor, commentBody, date, upvotes, downvotes, spam) {
        this.commentor = commentor;
        this.commentBody = commentBody;
        this.date = date;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.spam = spam;
    }
    return Comments;
}());
