class Playlist {
    id: number;
    name: string;
    numberOfVideos: number;
    videoUrls: string[];

    constructor(id: number, name: string, numberOfVideos: number, videoUrls: string[]) {
        this.id = id;
        this.name = name;
        this.numberOfVideos = numberOfVideos;
        this.videoUrls = videoUrls;
    }
}