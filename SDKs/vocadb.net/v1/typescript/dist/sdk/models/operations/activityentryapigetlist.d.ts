import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ActivityEntryApiGetListEditEventEnum {
    Created = "Created",
    Updated = "Updated",
    Deleted = "Deleted",
    Restored = "Restored"
}
export declare enum ActivityEntryApiGetListEntryFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Description = "Description",
    MainPicture = "MainPicture",
    Names = "Names",
    PVs = "PVs",
    Tags = "Tags",
    WebLinks = "WebLinks"
}
export declare enum ActivityEntryApiGetListEntryTypeEnum {
    Undefined = "Undefined",
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
export declare enum ActivityEntryApiGetListFieldsEnum {
    None = "None",
    ArchivedVersion = "ArchivedVersion",
    Entry = "Entry"
}
export declare enum ActivityEntryApiGetListLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum ActivityEntryApiGetListSortRuleEnum {
    CreateDateDescending = "CreateDateDescending",
    CreateDate = "CreateDate"
}
export declare class ActivityEntryApiGetListQueryParams extends SpeakeasyBase {
    before?: Date;
    editEvent?: ActivityEntryApiGetListEditEventEnum;
    entryFields?: ActivityEntryApiGetListEntryFieldsEnum;
    entryType?: ActivityEntryApiGetListEntryTypeEnum;
    fields?: ActivityEntryApiGetListFieldsEnum;
    getTotalCount?: boolean;
    lang?: ActivityEntryApiGetListLangEnum;
    maxResults?: number;
    since?: Date;
    sortRule?: ActivityEntryApiGetListSortRuleEnum;
    userId?: number;
}
export declare class ActivityEntryApiGetListRequest extends SpeakeasyBase {
    queryParams: ActivityEntryApiGetListQueryParams;
}
export declare class ActivityEntryApiGetListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultActivityEntryForApiContract?: shared.PartialFindResultActivityEntryForApiContract;
    statusCode: number;
}
