import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EntryRefContractEntryTypeEnum {
    Undefined = "Undefined"
,    Album = "Album"
,    Artist = "Artist"
,    DiscussionTopic = "DiscussionTopic"
,    Pv = "PV"
,    ReleaseEvent = "ReleaseEvent"
,    ReleaseEventSeries = "ReleaseEventSeries"
,    Song = "Song"
,    SongList = "SongList"
,    Tag = "Tag"
,    User = "User"
,    Venue = "Venue"
}


export class EntryRefContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=entryType" })
  entryType?: EntryRefContractEntryTypeEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;
}
