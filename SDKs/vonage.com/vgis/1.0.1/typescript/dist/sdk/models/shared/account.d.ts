import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountStatusEnum {
    Pending = "PENDING",
    Active = "ACTIVE",
    Deleted = "DELETED",
    Archived = "ARCHIVED"
}
export declare class AccountUcisHealth extends SpeakeasyBase {
    message?: string;
    status?: string;
}
export declare class AccountUcis extends SpeakeasyBase {
    health?: AccountUcisHealth;
    id?: number;
    type?: string;
    ucpAccountId?: string;
    ucpLabel?: string;
}
export declare class Account extends SpeakeasyBase {
    id?: number;
    name?: string;
    org?: string;
    status?: AccountStatusEnum;
    ucis?: AccountUcis[];
}
