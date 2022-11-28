import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EntryThumbContractEntryTypeEnum {
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


export class EntryThumbContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entryType" })
  entryType?: EntryThumbContractEntryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=mime" })
  mime?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
