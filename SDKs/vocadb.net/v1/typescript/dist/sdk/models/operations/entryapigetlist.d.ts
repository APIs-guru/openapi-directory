import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EntryApiGetListEntryTypesEnum {
    Nothing = "Nothing",
    Album = "Album",
    Artist = "Artist",
    DiscussionTopic = "DiscussionTopic",
    Pv = "PV",
    ReleaseEvent = "ReleaseEvent",
    ReleaseEventSeries = "ReleaseEventSeries",
    Song = "Song",
    SongList = "SongList",
    Tag = "Tag",
    User = "User",
    Venue = "Venue"
}
export declare enum EntryApiGetListFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Description = "Description",
    MainPicture = "MainPicture",
    Names = "Names",
    PVs = "PVs",
    Tags = "Tags",
    WebLinks = "WebLinks"
}
export declare enum EntryApiGetListLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum EntryApiGetListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare enum EntryApiGetListSortEnum {
    None = "None",
    Name = "Name",
    AdditionDate = "AdditionDate",
    ActivityDate = "ActivityDate"
}
export declare enum EntryApiGetListStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class EntryApiGetListQueryParams extends SpeakeasyBase {
    childTags?: boolean;
    entryTypes?: EntryApiGetListEntryTypesEnum;
    fields?: EntryApiGetListFieldsEnum;
    getTotalCount?: boolean;
    lang?: EntryApiGetListLangEnum;
    maxResults?: number;
    nameMatchMode?: EntryApiGetListNameMatchModeEnum;
    query?: string;
    sort?: EntryApiGetListSortEnum;
    start?: number;
    status?: EntryApiGetListStatusEnum;
    tagId?: number[];
    tagName?: string[];
}
export declare class EntryApiGetListRequest extends SpeakeasyBase {
    queryParams: EntryApiGetListQueryParams;
}
export declare class EntryApiGetListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultEntryForApiContract?: shared.PartialFindResultEntryForApiContract;
    statusCode: number;
}
