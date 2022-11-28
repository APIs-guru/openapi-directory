import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EntryRefContractEntryTypeEnum {
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


export class EntryRefContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entryType" })
  entryType?: EntryRefContractEntryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
