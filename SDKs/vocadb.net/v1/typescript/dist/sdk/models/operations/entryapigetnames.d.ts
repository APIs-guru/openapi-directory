import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EntryApiGetNamesNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare class EntryApiGetNamesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nameMatchMode?: EntryApiGetNamesNameMatchModeEnum;
    query?: string;
}
export declare class EntryApiGetNamesRequest extends SpeakeasyBase {
    queryParams: EntryApiGetNamesQueryParams;
}
export declare class EntryApiGetNamesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    entryApiGetNames200ApplicationJsonStrings?: string[];
    entryApiGetNames200ApplicationJsonpStrings?: string[];
    entryApiGetNames200TextJsonStrings?: string[];
    statusCode: number;
}
