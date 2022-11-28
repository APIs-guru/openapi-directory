import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container Class for the Web API
**/
export declare class User extends SpeakeasyBase {
    childUsers?: User[];
    email?: string;
    id?: number;
    idAsString?: string;
    isAdmin?: boolean;
    permissions?: string[];
    username?: string;
}
