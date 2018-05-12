class User {
    id: number;
    name: string;
    channelName?: string;
    subscribers?: number;
    numberOfVideos?: number;
    playlists?: Playlist[];

    constructor(id: number, name: string, channelName?: string, subscribers?: number, numberOfVideos?: number, playlists?: Playlist[]) {
        this.id = id;
        this.name = name;
        if(channelName) {
            this.channelName = channelName;
        }

        if(subscribers) {
            this.subscribers = subscribers;
        }

        if(numberOfVideos) {
            this.numberOfVideos = numberOfVideos;
        }

        if(playlists) {
            this.playlists = playlists;
        }
    }
}