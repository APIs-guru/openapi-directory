import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SongApiGetNamesNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare class SongApiGetNamesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nameMatchMode?: SongApiGetNamesNameMatchModeEnum;
    query?: string;
}
export declare class SongApiGetNamesRequest extends SpeakeasyBase {
    queryParams: SongApiGetNamesQueryParams;
}
export declare class SongApiGetNamesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    songApiGetNames200ApplicationJsonStrings?: string[];
    songApiGetNames200ApplicationJsonpStrings?: string[];
    songApiGetNames200TextJsonStrings?: string[];
    statusCode: number;
}
