import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AlbumApiGetListArtistParticipationStatusEnum {
    Everything = "Everything",
    OnlyMainAlbums = "OnlyMainAlbums",
    OnlyCollaborations = "OnlyCollaborations"
}
export declare enum AlbumApiGetListDiscTypesEnum {
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
export declare enum AlbumApiGetListFieldsEnum {
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
export declare enum AlbumApiGetListLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum AlbumApiGetListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare enum AlbumApiGetListSortEnum {
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
export declare enum AlbumApiGetListStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class AlbumApiGetListQueryParams extends SpeakeasyBase {
    advancedFilters?: any[];
    artistId?: number[];
    artistParticipationStatus?: AlbumApiGetListArtistParticipationStatusEnum;
    barcode?: string;
    childTags?: boolean;
    childVoicebanks?: boolean;
    deleted?: boolean;
    discTypes?: AlbumApiGetListDiscTypesEnum;
    fields?: AlbumApiGetListFieldsEnum;
    getTotalCount?: boolean;
    includeMembers?: boolean;
    lang?: AlbumApiGetListLangEnum;
    maxResults?: number;
    nameMatchMode?: AlbumApiGetListNameMatchModeEnum;
    preferAccurateMatches?: boolean;
    query?: string;
    releaseDateAfter?: Date;
    releaseDateBefore?: Date;
    sort?: AlbumApiGetListSortEnum;
    start?: number;
    status?: AlbumApiGetListStatusEnum;
    tagId?: number[];
    tagName?: string[];
}
export declare class AlbumApiGetListRequest extends SpeakeasyBase {
    queryParams: AlbumApiGetListQueryParams;
}
export declare class AlbumApiGetListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultAlbumForApiContract?: shared.PartialFindResultAlbumForApiContract;
    statusCode: number;
}
