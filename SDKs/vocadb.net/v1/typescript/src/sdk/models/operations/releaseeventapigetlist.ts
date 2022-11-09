import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ReleaseEventApiGetListCategoryEnum {
    Unspecified = "Unspecified"
,    AlbumRelease = "AlbumRelease"
,    Anniversary = "Anniversary"
,    Club = "Club"
,    Concert = "Concert"
,    Contest = "Contest"
,    Convention = "Convention"
,    Other = "Other"
}

export enum ReleaseEventApiGetListFieldsEnum {
    None = "None"
,    AdditionalNames = "AdditionalNames"
,    Artists = "Artists"
,    Description = "Description"
,    MainPicture = "MainPicture"
,    Names = "Names"
,    Series = "Series"
,    SongList = "SongList"
,    Tags = "Tags"
,    Venue = "Venue"
,    WebLinks = "WebLinks"
}

export enum ReleaseEventApiGetListLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum ReleaseEventApiGetListNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}

export enum ReleaseEventApiGetListSortEnum {
    None = "None"
,    Name = "Name"
,    Date = "Date"
,    AdditionDate = "AdditionDate"
,    SeriesName = "SeriesName"
,    VenueName = "VenueName"
}

export enum ReleaseEventApiGetListStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class ReleaseEventApiGetListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=afterDate" })
  afterDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=artistId" })
  artistId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=beforeDate" })
  beforeDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: ReleaseEventApiGetListCategoryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=childTags" })
  childTags?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=childVoicebanks" })
  childVoicebanks?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: ReleaseEventApiGetListFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeMembers" })
  includeMembers?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: ReleaseEventApiGetListLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: ReleaseEventApiGetListNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=seriesId" })
  seriesId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ReleaseEventApiGetListSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: ReleaseEventApiGetListStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=userCollectionId" })
  userCollectionId?: number;
}


export class ReleaseEventApiGetListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ReleaseEventApiGetListQueryParams;
}


export class ReleaseEventApiGetListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultReleaseEventForApiContract?: shared.PartialFindResultReleaseEventForApiContract;

  @Metadata()
  statusCode: number;
}
