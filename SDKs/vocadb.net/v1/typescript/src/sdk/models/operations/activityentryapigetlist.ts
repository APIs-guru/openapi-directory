import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ActivityEntryApiGetListEditEventEnum {
    Created = "Created"
,    Updated = "Updated"
,    Deleted = "Deleted"
,    Restored = "Restored"
}

export enum ActivityEntryApiGetListEntryFieldsEnum {
    None = "None"
,    AdditionalNames = "AdditionalNames"
,    Description = "Description"
,    MainPicture = "MainPicture"
,    Names = "Names"
,    PVs = "PVs"
,    Tags = "Tags"
,    WebLinks = "WebLinks"
}

export enum ActivityEntryApiGetListEntryTypeEnum {
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

export enum ActivityEntryApiGetListFieldsEnum {
    None = "None"
,    ArchivedVersion = "ArchivedVersion"
,    Entry = "Entry"
}

export enum ActivityEntryApiGetListLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum ActivityEntryApiGetListSortRuleEnum {
    CreateDateDescending = "CreateDateDescending"
,    CreateDate = "CreateDate"
}


export class ActivityEntryApiGetListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=editEvent" })
  editEvent?: ActivityEntryApiGetListEditEventEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entryFields" })
  entryFields?: ActivityEntryApiGetListEntryFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entryType" })
  entryType?: ActivityEntryApiGetListEntryTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: ActivityEntryApiGetListFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: ActivityEntryApiGetListLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortRule" })
  sortRule?: ActivityEntryApiGetListSortRuleEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: number;
}


export class ActivityEntryApiGetListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ActivityEntryApiGetListQueryParams;
}


export class ActivityEntryApiGetListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultActivityEntryForApiContract?: shared.PartialFindResultActivityEntryForApiContract;

  @Metadata()
  statusCode: number;
}
