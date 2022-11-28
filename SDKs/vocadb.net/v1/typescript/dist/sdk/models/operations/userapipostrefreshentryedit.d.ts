import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UserApiPostRefreshEntryEditEntryTypeEnum {
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
export declare class UserApiPostRefreshEntryEditQueryParams extends SpeakeasyBase {
    entryId: number;
    entryType: UserApiPostRefreshEntryEditEntryTypeEnum;
}
export declare class UserApiPostRefreshEntryEditRequest extends SpeakeasyBase {
    queryParams: UserApiPostRefreshEntryEditQueryParams;
}
export declare class UserApiPostRefreshEntryEditResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
