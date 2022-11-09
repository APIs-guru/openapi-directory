import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The users' permissions
**/
export declare class UserUserPermission extends SpeakeasyBase {
    permission?: any[];
}
/**
 * The users' roles
**/
export declare class UserUserRoles extends SpeakeasyBase {
    role?: string[];
}
export declare class UserUser extends SpeakeasyBase {
    metaData?: Map<string, any>;
    permissions?: UserUserPermission;
    roles?: UserUserRoles;
    userIdentifier?: string;
}
export declare class User extends SpeakeasyBase {
    user?: UserUser;
}
