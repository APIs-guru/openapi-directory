import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ArtistApiGetNamesNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare class ArtistApiGetNamesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nameMatchMode?: ArtistApiGetNamesNameMatchModeEnum;
    query?: string;
}
export declare class ArtistApiGetNamesRequest extends SpeakeasyBase {
    queryParams: ArtistApiGetNamesQueryParams;
}
export declare class ArtistApiGetNamesResponse extends SpeakeasyBase {
    artistApiGetNames200ApplicationJsonStrings?: string[];
    artistApiGetNames200ApplicationJsonpStrings?: string[];
    artistApiGetNames200TextJsonStrings?: string[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
