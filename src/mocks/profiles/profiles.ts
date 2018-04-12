import {Profile} from '../../models/profile/profile.interface';


const userList:Profile[] = [
    {
    
        firstName:'Paul',
        lastName: 'Johns',
        email:'pj@pj.com',
        avatar:'assets/img/avatar.png',
        dateOfBirth: new Date()
    
    },
    
    {
    
        firstName:'Paul',
        lastName: 'Jack',
        email:'pj@pj.com',
        avatar:'assets/img/avatar.png',
        dateOfBirth: new Date()

    },
    
    {
    
        firstName:'Paul',
        lastName: 'Track',
        email:'pj@pj.com',
        avatar:'assets/img/avatar.png',
        dateOfBirth: new Date()

    },
    
    {
    
        firstName:'Paul',
        lastName: 'Williams',
        email:'pj@pj.com',
        avatar:'assets/img/avatar.png',
        dateOfBirth: new Date()

    }
    
    
    
    ];
    export const USER_LIST =userList;