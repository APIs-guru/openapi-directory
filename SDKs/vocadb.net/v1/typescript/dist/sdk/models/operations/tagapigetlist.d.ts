import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagApiGetListFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    AliasedTo = "AliasedTo",
    Description = "Description",
    MainPicture = "MainPicture",
    Names = "Names",
    Parent = "Parent",
    RelatedTags = "RelatedTags",
    TranslatedDescription = "TranslatedDescription",
    WebLinks = "WebLinks"
}
export declare enum TagApiGetListLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum TagApiGetListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare enum TagApiGetListSortEnum {
    Nothing = "Nothing",
    Name = "Name",
    AdditionDate = "AdditionDate",
    UsageCount = "UsageCount"
}
export declare enum TagApiGetListTargetEnum {
    Nothing = "Nothing",
    Album = "Album",
    Artist = "Artist",
    AlbumArtist = "AlbumArtist",
    Event = "Event",
    Song = "Song",
    AlbumSong = "AlbumSong",
    ArtistSong = "ArtistSong",
    All = "All"
}
export declare class TagApiGetListQueryParams extends SpeakeasyBase {
    allowChildren?: boolean;
    categoryName?: string;
    fields?: TagApiGetListFieldsEnum;
    getTotalCount?: boolean;
    lang?: TagApiGetListLangEnum;
    maxResults?: number;
    nameMatchMode?: TagApiGetListNameMatchModeEnum;
    preferAccurateMatches?: boolean;
    query?: string;
    sort?: TagApiGetListSortEnum;
    start?: number;
    target?: TagApiGetListTargetEnum;
}
export declare class TagApiGetListRequest extends SpeakeasyBase {
    queryParams: TagApiGetListQueryParams;
}
export declare class TagApiGetListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultTagForApiContract?: shared.PartialFindResultTagForApiContract;
    statusCode: number;
}
