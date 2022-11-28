import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SongListApiGetFeaturedListsFeaturedCategoryEnum {
    Nothing = "Nothing",
    Concerts = "Concerts",
    VocaloidRanking = "VocaloidRanking",
    Pools = "Pools",
    Other = "Other"
}
export declare enum SongListApiGetFeaturedListsFieldsEnum {
    None = "None",
    Description = "Description",
    Events = "Events",
    MainPicture = "MainPicture",
    Tags = "Tags"
}
export declare enum SongListApiGetFeaturedListsLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum SongListApiGetFeaturedListsNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare enum SongListApiGetFeaturedListsSortEnum {
    None = "None",
    Name = "Name",
    Date = "Date",
    CreateDate = "CreateDate"
}
export declare class SongListApiGetFeaturedListsQueryParams extends SpeakeasyBase {
    childTags?: boolean;
    featuredCategory?: SongListApiGetFeaturedListsFeaturedCategoryEnum;
    fields?: SongListApiGetFeaturedListsFieldsEnum;
    getTotalCount?: boolean;
    lang?: SongListApiGetFeaturedListsLangEnum;
    maxResults?: number;
    nameMatchMode?: SongListApiGetFeaturedListsNameMatchModeEnum;
    query?: string;
    sort?: SongListApiGetFeaturedListsSortEnum;
    start?: number;
    tagId?: number[];
}
export declare class SongListApiGetFeaturedListsRequest extends SpeakeasyBase {
    queryParams: SongListApiGetFeaturedListsQueryParams;
}
export declare class SongListApiGetFeaturedListsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultSongListForApiContract?: shared.PartialFindResultSongListForApiContract;
    statusCode: number;
}
