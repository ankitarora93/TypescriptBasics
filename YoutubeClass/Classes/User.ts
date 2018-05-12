class User {
    id: number;
    name: string;
    channelName?: string; //channel name, if any
    subscribers?: number; //number of subscribers, if any
    numberOfVideos?: number; //number of videos uploaded, if any
    playlists?: Playlist[]; //number of playlists created, if any

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