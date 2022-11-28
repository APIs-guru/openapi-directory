import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EntryRefContractEntryTypeEnum {
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
export declare class EntryRefContract extends SpeakeasyBase {
    entryType?: EntryRefContractEntryTypeEnum;
    id?: number;
}
