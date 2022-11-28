import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SongApiGetListArtistParticipationStatusEnum {
    Everything = "Everything",
    OnlyMainAlbums = "OnlyMainAlbums",
    OnlyCollaborations = "OnlyCollaborations"
}
export declare enum SongApiGetListFieldsEnum {
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
export declare enum SongApiGetListLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum SongApiGetListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare enum SongApiGetListPvServicesEnum {
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
export declare enum SongApiGetListSortEnum {
    None = "None",
    Name = "Name",
    AdditionDate = "AdditionDate",
    PublishDate = "PublishDate",
    FavoritedTimes = "FavoritedTimes",
    RatingScore = "RatingScore",
    TagUsageCount = "TagUsageCount"
}
export declare enum SongApiGetListStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class SongApiGetListQueryParams extends SpeakeasyBase {
    advancedFilters?: any[];
    afterDate?: Date;
    artistId?: number[];
    artistParticipationStatus?: SongApiGetListArtistParticipationStatusEnum;
    beforeDate?: Date;
    childTags?: boolean;
    childVoicebanks?: boolean;
    fields?: SongApiGetListFieldsEnum;
    getTotalCount?: boolean;
    includeMembers?: boolean;
    lang?: SongApiGetListLangEnum;
    maxResults?: number;
    minScore?: number;
    nameMatchMode?: SongApiGetListNameMatchModeEnum;
    onlyWithPvs?: boolean;
    parentSongId?: number;
    preferAccurateMatches?: boolean;
    pvServices?: SongApiGetListPvServicesEnum;
    query?: string;
    releaseEventId?: number;
    since?: number;
    songTypes?: string;
    sort?: SongApiGetListSortEnum;
    start?: number;
    status?: SongApiGetListStatusEnum;
    tagId?: number[];
    tagName?: string[];
    unifyTypesAndTags?: boolean;
    userCollectionId?: number;
}
export declare class SongApiGetListRequest extends SpeakeasyBase {
    queryParams: SongApiGetListQueryParams;
}
export declare class SongApiGetListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultSongForApiContract?: shared.PartialFindResultSongForApiContract;
    statusCode: number;
}
