class Playlist {
    id: number;
    name: string;
    numberOfVideos: number;
    videoUrls: string[];
}

class User {
    id: number;
    name: string;
    channelName?: string;
    subscribers?: number;
    numberOfVideos?: number;
    playlists?: Playlist[];
}

class Comments {
    commentor: string;
    commentBody: string;
    date: Date;
    upvotes: number;
    downvotes: number;
    spam: boolean;
}


class Video {

    //properties
    private id: number;
    private videoTitle: string;
    private videoView: number;
    private upvotes: number;
    private downvotes: number;
    private uploader: User; //details of the uploader
    private videoDetails: string;
    private comments: Comments[]; //details of the comment

    constructor(id: number, videoTitle: string, videoView: number, upvotes: number, downvotes: number, uploader: User, videoDetails: string, comments: Comments[]) {
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
    public editVideoTitle(uploader: User, newTitle: string): void {
        
        //if the person trying to edit the video is someone other than the uploader
        //reject the request
        if(uploader.id != this.uploader.id) {
            return;
        }
        
        if(newTitle != null || newTitle != "") {
            this.videoTitle = newTitle;
        } else {
            //throwSomeError();
        }
    }

    //a function to increase the upvotes if someone presses the upvote button.
    //A user is passed as an argument to check of the user is valid.
    public editUpvotes(user: User): void {
        //other mechanisms like checking if the user has already upvoted or not can be //added
        if(user.id) {
            this.upvotes++;
        } else {
            //displayError();
        }
    }

    //a function to increase the downvotes if someone presses the downvote button.
    //A user is passed as an argument to check of the user is valid.
    public editDownvotes(user: User): void {
        //other mechanisms like checking if the user has already downvoted or not can be //added
        if(user.id) {
            this.downvotes++;
        } else {
            //displayError();
        }
    }


    public getVideoId(): number {
        return this.id;
    }

    public getVideoTitle = function(): string {
        return this.videoTitle;
    }

    public getVideoViews(): number {
        return this.videoView;
    }

    public getVideoUpvotes(): number {
        return this.upvotes;
    }

    public getVideoDownvotes(): number {
        return this.downvotes;
    }

    public getUploaderDetails(): User {
        return this.uploader;
    }

    public getVideoDetails(): string {
        return this.videoDetails;
    }
}