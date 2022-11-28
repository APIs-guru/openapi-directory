import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserApiGetAlbumCollectionPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum UserApiGetAlbumCollectionAlbumTypesEnum {
    Unknown = "Unknown",
    Album = "Album",
    Single = "Single",
    Ep = "EP",
    SplitAlbum = "SplitAlbum",
    Compilation = "Compilation",
    Video = "Video",
    Artbook = "Artbook",
    Game = "Game",
    Fanmade = "Fanmade",
    Instrumental = "Instrumental",
    Other = "Other"
}
export declare enum UserApiGetAlbumCollectionFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Artists = "Artists",
    Description = "Description",
    Discs = "Discs",
    Identifiers = "Identifiers",
    MainPicture = "MainPicture",
    Names = "Names",
    PVs = "PVs",
    ReleaseEvent = "ReleaseEvent",
    Tags = "Tags",
    Tracks = "Tracks",
    WebLinks = "WebLinks"
}
export declare enum UserApiGetAlbumCollectionLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum UserApiGetAlbumCollectionNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare enum UserApiGetAlbumCollectionPurchaseStatusesEnum {
    Nothing = "Nothing",
    Wishlisted = "Wishlisted",
    Ordered = "Ordered",
    Owned = "Owned",
    All = "All"
}
export declare enum UserApiGetAlbumCollectionSortEnum {
    None = "None",
    Name = "Name",
    ReleaseDate = "ReleaseDate",
    ReleaseDateWithNulls = "ReleaseDateWithNulls",
    AdditionDate = "AdditionDate",
    RatingAverage = "RatingAverage",
    RatingTotal = "RatingTotal",
    NameThenReleaseDate = "NameThenReleaseDate",
    CollectionCount = "CollectionCount"
}
export declare class UserApiGetAlbumCollectionQueryParams extends SpeakeasyBase {
    advancedFilters?: any[];
    albumTypes?: UserApiGetAlbumCollectionAlbumTypesEnum;
    artistId?: number;
    fields?: UserApiGetAlbumCollectionFieldsEnum;
    getTotalCount?: boolean;
    lang?: UserApiGetAlbumCollectionLangEnum;
    maxResults?: number;
    nameMatchMode?: UserApiGetAlbumCollectionNameMatchModeEnum;
    purchaseStatuses?: UserApiGetAlbumCollectionPurchaseStatusesEnum;
    query?: string;
    releaseEventId?: number;
    sort?: UserApiGetAlbumCollectionSortEnum;
    start?: number;
    tag?: string;
    tagId?: number;
}
export declare class UserApiGetAlbumCollectionRequest extends SpeakeasyBase {
    pathParams: UserApiGetAlbumCollectionPathParams;
    queryParams: UserApiGetAlbumCollectionQueryParams;
}
export declare class UserApiGetAlbumCollectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultAlbumForUserForApiContract?: shared.PartialFindResultAlbumForUserForApiContract;
    statusCode: number;
}
