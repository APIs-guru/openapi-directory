import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UserApiPostRefreshEntryEditEntryTypeEnum {
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


export class UserApiPostRefreshEntryEditQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=entryId" })
  entryId: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entryType" })
  entryType: UserApiPostRefreshEntryEditEntryTypeEnum;
}


export class UserApiPostRefreshEntryEditRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UserApiPostRefreshEntryEditQueryParams;
}


export class UserApiPostRefreshEntryEditResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
