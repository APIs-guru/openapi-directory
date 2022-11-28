import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ReleaseEventApiGetListCategoryEnum {
    Unspecified = "Unspecified",
    AlbumRelease = "AlbumRelease",
    Anniversary = "Anniversary",
    Club = "Club",
    Concert = "Concert",
    Contest = "Contest",
    Convention = "Convention",
    Other = "Other"
}
export declare enum ReleaseEventApiGetListFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Artists = "Artists",
    Description = "Description",
    MainPicture = "MainPicture",
    Names = "Names",
    Series = "Series",
    SongList = "SongList",
    Tags = "Tags",
    Venue = "Venue",
    WebLinks = "WebLinks"
}
export declare enum ReleaseEventApiGetListLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum ReleaseEventApiGetListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare enum ReleaseEventApiGetListSortEnum {
    None = "None",
    Name = "Name",
    Date = "Date",
    AdditionDate = "AdditionDate",
    SeriesName = "SeriesName",
    VenueName = "VenueName"
}
export declare enum ReleaseEventApiGetListStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class ReleaseEventApiGetListQueryParams extends SpeakeasyBase {
    afterDate?: Date;
    artistId?: number[];
    beforeDate?: Date;
    category?: ReleaseEventApiGetListCategoryEnum;
    childTags?: boolean;
    childVoicebanks?: boolean;
    fields?: ReleaseEventApiGetListFieldsEnum;
    getTotalCount?: boolean;
    includeMembers?: boolean;
    lang?: ReleaseEventApiGetListLangEnum;
    maxResults?: number;
    nameMatchMode?: ReleaseEventApiGetListNameMatchModeEnum;
    query?: string;
    seriesId?: number;
    sort?: ReleaseEventApiGetListSortEnum;
    start?: number;
    status?: ReleaseEventApiGetListStatusEnum;
    tagId?: number[];
    userCollectionId?: number;
}
export declare class ReleaseEventApiGetListRequest extends SpeakeasyBase {
    queryParams: ReleaseEventApiGetListQueryParams;
}
export declare class ReleaseEventApiGetListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultReleaseEventForApiContract?: shared.PartialFindResultReleaseEventForApiContract;
    statusCode: number;
}
