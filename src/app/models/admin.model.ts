export interface AdminModel{
    name : string, 
    phone : string, 
    email : string,
    password? : string,
    isAdmin : Boolean,
    lastLogin: Date
}