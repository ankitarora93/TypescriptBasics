var User = /** @class */ (function () {
    function User(id, name, channelName, subscribers, numberOfVideos, playlists) {
        this.id = id;
        this.name = name;
        if (channelName) {
            this.channelName = channelName;
        }
        if (subscribers) {
            this.subscribers = subscribers;
        }
        if (numberOfVideos) {
            this.numberOfVideos = numberOfVideos;
        }
        if (playlists) {
            this.playlists = playlists;
        }
    }
    return User;
}());
