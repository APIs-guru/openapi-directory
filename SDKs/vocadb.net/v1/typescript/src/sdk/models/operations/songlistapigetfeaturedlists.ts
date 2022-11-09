import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SongListApiGetFeaturedListsFeaturedCategoryEnum {
    Nothing = "Nothing"
,    Concerts = "Concerts"
,    VocaloidRanking = "VocaloidRanking"
,    Pools = "Pools"
,    Other = "Other"
}

export enum SongListApiGetFeaturedListsFieldsEnum {
    None = "None"
,    Description = "Description"
,    Events = "Events"
,    MainPicture = "MainPicture"
,    Tags = "Tags"
}

export enum SongListApiGetFeaturedListsLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum SongListApiGetFeaturedListsNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}

export enum SongListApiGetFeaturedListsSortEnum {
    None = "None"
,    Name = "Name"
,    Date = "Date"
,    CreateDate = "CreateDate"
}


export class SongListApiGetFeaturedListsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=childTags" })
  childTags?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=featuredCategory" })
  featuredCategory?: SongListApiGetFeaturedListsFeaturedCategoryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: SongListApiGetFeaturedListsFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: SongListApiGetFeaturedListsLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: SongListApiGetFeaturedListsNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SongListApiGetFeaturedListsSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];
}


export class SongListApiGetFeaturedListsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SongListApiGetFeaturedListsQueryParams;
}


export class SongListApiGetFeaturedListsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultSongListForApiContract?: shared.PartialFindResultSongListForApiContract;

  @Metadata()
  statusCode: number;
}
