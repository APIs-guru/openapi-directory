import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EntryThumbContractEntryTypeEnum {
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
export declare class EntryThumbContract extends SpeakeasyBase {
    entryType?: EntryThumbContractEntryTypeEnum;
    id?: number;
    mime?: string;
    version?: number;
}
