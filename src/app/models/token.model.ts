import { AdminModel } from "./admin.model";

export interface CustomToken{
    token:string;
    user:AdminModel;
}