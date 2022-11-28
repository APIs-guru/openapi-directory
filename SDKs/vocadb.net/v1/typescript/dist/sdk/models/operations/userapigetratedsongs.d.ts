import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserApiGetRatedSongsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum UserApiGetRatedSongsArtistGroupingEnum {
    And = "And",
    Or = "Or"
}
export declare enum UserApiGetRatedSongsFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Albums = "Albums",
    Artists = "Artists",
    Lyrics = "Lyrics",
    MainPicture = "MainPicture",
    Names = "Names",
    PVs = "PVs",
    ReleaseEvent = "ReleaseEvent",
    Tags = "Tags",
    ThumbUrl = "ThumbUrl",
    WebLinks = "WebLinks"
}
export declare enum UserApiGetRatedSongsLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum UserApiGetRatedSongsNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare enum UserApiGetRatedSongsPvServicesEnum {
    Nothing = "Nothing",
    NicoNicoDouga = "NicoNicoDouga",
    Youtube = "Youtube",
    SoundCloud = "SoundCloud",
    Vimeo = "Vimeo",
    Piapro = "Piapro",
    Bilibili = "Bilibili",
    File = "File",
    LocalFile = "LocalFile",
    Creofuga = "Creofuga",
    Bandcamp = "Bandcamp"
}
export declare enum UserApiGetRatedSongsRatingEnum {
    Nothing = "Nothing",
    Dislike = "Dislike",
    Like = "Like",
    Favorite = "Favorite"
}
export declare enum UserApiGetRatedSongsSortEnum {
    None = "None",
    Name = "Name",
    AdditionDate = "AdditionDate",
    PublishDate = "PublishDate",
    FavoritedTimes = "FavoritedTimes",
    RatingScore = "RatingScore",
    RatingDate = "RatingDate"
}
export declare class UserApiGetRatedSongsQueryParams extends SpeakeasyBase {
    advancedFilters?: any[];
    artistGrouping?: UserApiGetRatedSongsArtistGroupingEnum;
    artistId?: number[];
    childVoicebanks?: boolean;
    fields?: UserApiGetRatedSongsFieldsEnum;
    getTotalCount?: boolean;
    groupByRating?: boolean;
    lang?: UserApiGetRatedSongsLangEnum;
    maxResults?: number;
    nameMatchMode?: UserApiGetRatedSongsNameMatchModeEnum;
    pvServices?: UserApiGetRatedSongsPvServicesEnum;
    query?: string;
    rating?: UserApiGetRatedSongsRatingEnum;
    songListId?: number;
    sort?: UserApiGetRatedSongsSortEnum;
    start?: number;
    tagId?: number[];
    tagName?: string;
}
export declare class UserApiGetRatedSongsRequest extends SpeakeasyBase {
    pathParams: UserApiGetRatedSongsPathParams;
    queryParams: UserApiGetRatedSongsQueryParams;
}
export declare class UserApiGetRatedSongsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultRatedSongForUserForApiContract?: shared.PartialFindResultRatedSongForUserForApiContract;
    statusCode: number;
}
