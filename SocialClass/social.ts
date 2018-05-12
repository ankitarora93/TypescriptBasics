///<reference path="Classes/Details.ts" />

class About {
    id: number; //id of the profile
    name: string;
    phone?: number[]; //can be more than one phone number
    address?: string;
    locations?: string[];
    currentLocation?: string; 
    school?: string;
    college?: string;
    email: string;
    familyMember?: string[];
    otherDetails?: Details;

    constructor(id: number, name: string, phone: number[], address: string, locations: string[], currentLocation: string, school: string, college: string, email: string, familyMembers: string[], otherDetails: Details) {
        this.id = id;
        this.name = name;
        if(phone) { this.phone = phone; }
        if(address) { this.address = address; }
        if(locations) { this.locations = locations; }
        if(currentLocation) { this.currentLocation = currentLocation; }
        if(school) { this.school = school; }
        if(college) { this.college = college; }
        this.email = email;
        if(this.familyMember) { this.familyMember = this.familyMember; }
        if(otherDetails) { this.otherDetails = otherDetails; }

    }

    public editName(newName: string) {
        if(newName != null && newName != "") {
            this.name = newName;
        }
    }

    public editAddress(newAddress: string) {
        if(newAddress != null && newAddress != "") {
            this.address = this.address;
        }
    }

    public editOtherDetails(about?: string, otherNames?: string, quote?: string) {
        if(about) { this.otherDetails.setAbout(about); }
        if(otherNames) { this.otherDetails.setOtherNames(quote); }
        if(quote) { this.otherDetails.setFavouriteQuote(quote); }
    }

    public getName():string {
        return this.name;
    }

    public getPhoneNumbers(): number[] {
        if(this.phone) {
            return this.phone;
        } 
    }

    public getAddress(): string {
        if(this.address) {
            return this.address;
        }
    }

    public getLocations(): string[] {
        if(this.locations) {
            return this.locations;
        }
    }

    public getEmail(): string {
        return this.email;
    }

}