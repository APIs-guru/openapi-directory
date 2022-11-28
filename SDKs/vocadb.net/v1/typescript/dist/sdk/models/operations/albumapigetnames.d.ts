import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AlbumApiGetNamesNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare class AlbumApiGetNamesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nameMatchMode?: AlbumApiGetNamesNameMatchModeEnum;
    query?: string;
}
export declare class AlbumApiGetNamesRequest extends SpeakeasyBase {
    queryParams: AlbumApiGetNamesQueryParams;
}
export declare class AlbumApiGetNamesResponse extends SpeakeasyBase {
    albumApiGetNames200ApplicationJsonStrings?: string[];
    albumApiGetNames200ApplicationJsonpStrings?: string[];
    albumApiGetNames200TextJsonStrings?: string[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
