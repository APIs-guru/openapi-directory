import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum EntryApiGetListEntryTypesEnum {
    Nothing = "Nothing"
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

export enum EntryApiGetListFieldsEnum {
    None = "None"
,    AdditionalNames = "AdditionalNames"
,    Description = "Description"
,    MainPicture = "MainPicture"
,    Names = "Names"
,    PVs = "PVs"
,    Tags = "Tags"
,    WebLinks = "WebLinks"
}

export enum EntryApiGetListLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum EntryApiGetListNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}

export enum EntryApiGetListSortEnum {
    None = "None"
,    Name = "Name"
,    AdditionDate = "AdditionDate"
,    ActivityDate = "ActivityDate"
}

export enum EntryApiGetListStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class EntryApiGetListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=childTags" })
  childTags?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entryTypes" })
  entryTypes?: EntryApiGetListEntryTypesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: EntryApiGetListFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: EntryApiGetListLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: EntryApiGetListNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: EntryApiGetListSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: EntryApiGetListStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagName" })
  tagName?: string[];
}


export class EntryApiGetListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EntryApiGetListQueryParams;
}


export class EntryApiGetListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultEntryForApiContract?: shared.PartialFindResultEntryForApiContract;

  @Metadata()
  statusCode: number;
}
