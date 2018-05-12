var Details = /** @class */ (function () {
    function Details(about, otherNames, favouriteQuotes) {
        this.about = about;
        this.otherNames = otherNames;
        this.favouriteQuotes = favouriteQuotes;
    }
    Details.prototype.setAbout = function (newAbout) {
        if (newAbout != null && newAbout != "") {
            this.about = newAbout;
        }
    };
    Details.prototype.setOtherNames = function (newOtherName) {
        if (newOtherName != null || newOtherName != "") {
            this.otherNames = newOtherName;
        }
    };
    Details.prototype.setFavouriteQuote = function (quote) {
        if (quote != null || quote != "") {
            this.favouriteQuotes = quote;
        }
    };
    Details.prototype.getAbout = function () {
        if (this.about && this.about != "") {
            return this.about;
        }
        else {
            //throwSomeError();
        }
    };
    Details.prototype.getOtherName = function () {
        if (this.otherNames && this.otherNames != "") {
            return this.otherNames;
        }
        else {
            //throwSomeError();
        }
    };
    return Details;
}());
