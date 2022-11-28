import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ActivityEntryApiGetListEditEventEnum {
    Created = "Created",
    Updated = "Updated",
    Deleted = "Deleted",
    Restored = "Restored"
}

export enum ActivityEntryApiGetListEntryFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Description = "Description",
    MainPicture = "MainPicture",
    Names = "Names",
    PVs = "PVs",
    Tags = "Tags",
    WebLinks = "WebLinks"
}

export enum ActivityEntryApiGetListEntryTypeEnum {
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

export enum ActivityEntryApiGetListFieldsEnum {
    None = "None",
    ArchivedVersion = "ArchivedVersion",
    Entry = "Entry"
}

export enum ActivityEntryApiGetListLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum ActivityEntryApiGetListSortRuleEnum {
    CreateDateDescending = "CreateDateDescending",
    CreateDate = "CreateDate"
}


export class ActivityEntryApiGetListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=editEvent" })
  editEvent?: ActivityEntryApiGetListEditEventEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryFields" })
  entryFields?: ActivityEntryApiGetListEntryFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryType" })
  entryType?: ActivityEntryApiGetListEntryTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: ActivityEntryApiGetListFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: ActivityEntryApiGetListLangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortRule" })
  sortRule?: ActivityEntryApiGetListSortRuleEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: number;
}


export class ActivityEntryApiGetListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ActivityEntryApiGetListQueryParams;
}


export class ActivityEntryApiGetListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultActivityEntryForApiContract?: shared.PartialFindResultActivityEntryForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
