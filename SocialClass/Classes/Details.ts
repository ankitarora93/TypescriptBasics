class Details {
    about?: string;
    otherNames?: string;
    favouriteQuotes?: string;

    constructor(about: string, otherNames: string, favouriteQuotes: string) {
        this.about = about;
        this.otherNames = otherNames;
        this.favouriteQuotes = favouriteQuotes;
    }

    public setAbout(newAbout: string) {
        if(newAbout != null && newAbout != "") {
            this.about = newAbout;
        }
    }

    public setOtherNames(newOtherName: string) {
        if(newOtherName != null || newOtherName != "") {
            this.otherNames = newOtherName;
        }
    }

    public setFavouriteQuote(quote: string) {
        if(quote != null || quote != "") {
            this.favouriteQuotes = quote;
        }
    }

    public getAbout(): string {
        if(this.about && this.about != "") {
            return this.about; 
        } else {
            //throwSomeError();
        }
    }

    public getOtherName(): string {
        if(this.otherNames && this.otherNames != "") {
            return this.otherNames;
        } else {
            //throwSomeError();
        }
    }
}