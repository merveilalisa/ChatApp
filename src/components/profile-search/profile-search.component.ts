import { Component } from "@angular/core";
import { DataService } from "../../providers/data/data.service";
import { Profile } from "../../models/profile/profile.interface";


@Component({
    selector: 'app-profile-search',
    templateUrl:'profile-search.component.html'
})


export class ProfileSearchComponent{


    query: string;
    profileList: Profile[]

    constructor(private data: DataService){

    }

    searchUser(query: string){
        this.data.searchUser(query).subscribe(profiles => {
        this.profileList = profiles as Profile[];
        console.log(this.profileList);
        })
    }
}

