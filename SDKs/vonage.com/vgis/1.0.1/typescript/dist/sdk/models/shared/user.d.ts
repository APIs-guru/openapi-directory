import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UserRoles extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare enum UserStatusEnum {
    Pending = "PENDING",
    Active = "ACTIVE",
    Deleted = "DELETED",
    Archived = "ARCHIVED"
}
export declare class UserUcisHealth extends SpeakeasyBase {
    message?: string;
    status?: string;
}
export declare class UserUcis extends SpeakeasyBase {
    health?: UserUcisHealth;
    id?: number;
    type?: string;
    ucpLabel?: string;
}
export declare class User extends SpeakeasyBase {
    accountId?: number;
    acountLabel?: string;
    contactNumber?: string;
    emailAddress?: string;
    firstName?: string;
    id?: number;
    lastName?: string;
    roles?: UserRoles[];
    status?: UserStatusEnum;
    ucis?: UserUcis[];
}
