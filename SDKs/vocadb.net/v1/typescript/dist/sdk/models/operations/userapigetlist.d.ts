import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UserApiGetListFieldsEnum {
    None = "None",
    KnownLanguages = "KnownLanguages",
    MainPicture = "MainPicture",
    OldUsernames = "OldUsernames"
}
export declare enum UserApiGetListGroupsEnum {
    Nothing = "Nothing",
    Limited = "Limited",
    Regular = "Regular",
    Trusted = "Trusted",
    Moderator = "Moderator",
    Admin = "Admin"
}
export declare enum UserApiGetListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare enum UserApiGetListSortEnum {
    RegisterDate = "RegisterDate",
    Name = "Name",
    Group = "Group"
}
export declare class UserApiGetListQueryParams extends SpeakeasyBase {
    fields?: UserApiGetListFieldsEnum;
    getTotalCount?: boolean;
    groups?: UserApiGetListGroupsEnum;
    includeDisabled?: boolean;
    joinDateAfter?: Date;
    joinDateBefore?: Date;
    knowsLanguage?: string;
    maxResults?: number;
    nameMatchMode?: UserApiGetListNameMatchModeEnum;
    onlyVerified?: boolean;
    query?: string;
    sort?: UserApiGetListSortEnum;
    start?: number;
}
export declare class UserApiGetListRequest extends SpeakeasyBase {
    queryParams: UserApiGetListQueryParams;
}
export declare class UserApiGetListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultUserForApiContract?: shared.PartialFindResultUserForApiContract;
    statusCode: number;
}
