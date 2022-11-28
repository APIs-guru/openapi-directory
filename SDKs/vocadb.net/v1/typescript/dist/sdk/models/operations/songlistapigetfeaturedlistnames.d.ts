import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SongListApiGetFeaturedListNamesFeaturedCategoryEnum {
    Nothing = "Nothing",
    Concerts = "Concerts",
    VocaloidRanking = "VocaloidRanking",
    Pools = "Pools",
    Other = "Other"
}
export declare enum SongListApiGetFeaturedListNamesNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare class SongListApiGetFeaturedListNamesQueryParams extends SpeakeasyBase {
    featuredCategory?: SongListApiGetFeaturedListNamesFeaturedCategoryEnum;
    maxResults?: number;
    nameMatchMode?: SongListApiGetFeaturedListNamesNameMatchModeEnum;
    query?: string;
}
export declare class SongListApiGetFeaturedListNamesRequest extends SpeakeasyBase {
    queryParams: SongListApiGetFeaturedListNamesQueryParams;
}
export declare class SongListApiGetFeaturedListNamesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    songListApiGetFeaturedListNames200ApplicationJsonStrings?: string[];
    songListApiGetFeaturedListNames200ApplicationJsonpStrings?: string[];
    songListApiGetFeaturedListNames200TextJsonStrings?: string[];
    statusCode: number;
}
