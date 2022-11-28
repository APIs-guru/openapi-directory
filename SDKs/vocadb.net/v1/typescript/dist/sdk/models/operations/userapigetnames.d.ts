import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UserApiGetNamesNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare class UserApiGetNamesQueryParams extends SpeakeasyBase {
    includeDisabled?: boolean;
    maxResults?: number;
    nameMatchMode?: UserApiGetNamesNameMatchModeEnum;
    query?: string;
}
export declare class UserApiGetNamesRequest extends SpeakeasyBase {
    queryParams: UserApiGetNamesQueryParams;
}
export declare class UserApiGetNamesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userApiGetNames200ApplicationJsonStrings?: string[];
    userApiGetNames200ApplicationJsonpStrings?: string[];
    userApiGetNames200TextJsonStrings?: string[];
}
