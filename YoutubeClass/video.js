///<reference path="Classes/User.ts" />
///<reference path="Classes/Playlist.ts" />
///<reference path="Classes/Comments.ts" />
var Video = /** @class */ (function () {
    function Video(id, videoTitle, videoView, upvotes, downvotes, uploader, videoDetails, comments) {
        this.id = id;
        this.videoTitle = videoTitle;
        this.videoView = videoView;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.uploader = uploader;
        this.videoDetails = videoDetails;
        this.comments = comments;
    }
    //to edit video title. Requires uploader as an argument because we need to 
    //who is actually trying to edit the video
    Video.prototype.editVideoTitle = function (uploader, newTitle) {
        //if the person trying to edit the video is someone other than the uploader
        //reject the request
        if (uploader.id != this.uploader.id) {
            return;
        }
        if (newTitle != null || newTitle != "") {
            this.videoTitle = newTitle;
        }
        else {
            //throwSomeError();
        }
    };
    //a function to increase the upvotes if someone presses the upvote button.
    //A user is passed as an argument to check of the user is valid.
    Video.prototype.editUpvotes = function (user) {
        //other mechanisms like checking if the user has already upvoted or not can be //added
        if (user.id) {
            this.upvotes++;
        }
        else {
            //displayError();
        }
    };
    //a function to increase the downvotes if someone presses the downvote button.
    //A user is passed as an argument to check of the user is valid.
    Video.prototype.editDownvotes = function (user) {
        //other mechanisms like checking if the user has already downvoted or not can be //added
        if (user.id) {
            this.downvotes++;
        }
        else {
            //displayError();
        }
    };
    Video.prototype.getVideoId = function () {
        return this.id;
    };
    Video.prototype.getVideoTitle = function () {
        return this.videoTitle;
    };
    Video.prototype.getVideoViews = function () {
        return this.videoView;
    };
    Video.prototype.getVideoUpvotes = function () {
        return this.upvotes;
    };
    Video.prototype.getVideoDownvotes = function () {
        return this.downvotes;
    };
    Video.prototype.getUploaderDetails = function () {
        return this.uploader;
    };
    Video.prototype.getVideoDetails = function () {
        return this.videoDetails;
    };
    Video.prototype.getRelatedVideos = function () {
        console.log("Related Videos List will be displayed here.");
    };
    return Video;
}());
