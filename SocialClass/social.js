///<reference path="Classes/Details.ts" />
var About = /** @class */ (function () {
    function About(id, name, phone, address, locations, currentLocation, school, college, email, familyMembers, otherDetails) {
        this.id = id;
        this.name = name;
        if (phone) {
            this.phone = phone;
        }
        if (address) {
            this.address = address;
        }
        if (locations) {
            this.locations = locations;
        }
        if (currentLocation) {
            this.currentLocation = currentLocation;
        }
        if (school) {
            this.school = school;
        }
        if (college) {
            this.college = college;
        }
        this.email = email;
        if (this.familyMember) {
            this.familyMember = this.familyMember;
        }
        if (otherDetails) {
            this.otherDetails = otherDetails;
        }
    }
    About.prototype.editName = function (newName) {
        if (newName != null && newName != "") {
            this.name = newName;
        }
    };
    About.prototype.editAddress = function (newAddress) {
        if (newAddress != null && newAddress != "") {
            this.address = this.address;
        }
    };
    About.prototype.editOtherDetails = function (about, otherNames, quote) {
        if (about) {
            this.otherDetails.setAbout(about);
        }
        if (otherNames) {
            this.otherDetails.setOtherNames(quote);
        }
        if (quote) {
            this.otherDetails.setFavouriteQuote(quote);
        }
    };
    About.prototype.getName = function () {
        return this.name;
    };
    About.prototype.getPhoneNumbers = function () {
        if (this.phone) {
            return this.phone;
        }
    };
    About.prototype.getAddress = function () {
        if (this.address) {
            return this.address;
        }
    };
    About.prototype.getLocations = function () {
        if (this.locations) {
            return this.locations;
        }
    };
    About.prototype.getEmail = function () {
        return this.email;
    };
    return About;
}());
