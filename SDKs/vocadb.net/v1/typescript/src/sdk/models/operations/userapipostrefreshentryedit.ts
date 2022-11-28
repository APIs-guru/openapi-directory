import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UserApiPostRefreshEntryEditEntryTypeEnum {
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


export class UserApiPostRefreshEntryEditQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryId" })
  entryId: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryType" })
  entryType: UserApiPostRefreshEntryEditEntryTypeEnum;
}


export class UserApiPostRefreshEntryEditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UserApiPostRefreshEntryEditQueryParams;
}


export class UserApiPostRefreshEntryEditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
