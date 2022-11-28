import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SongListApiGetFeaturedListsFeaturedCategoryEnum {
    Nothing = "Nothing",
    Concerts = "Concerts",
    VocaloidRanking = "VocaloidRanking",
    Pools = "Pools",
    Other = "Other"
}

export enum SongListApiGetFeaturedListsFieldsEnum {
    None = "None",
    Description = "Description",
    Events = "Events",
    MainPicture = "MainPicture",
    Tags = "Tags"
}

export enum SongListApiGetFeaturedListsLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum SongListApiGetFeaturedListsNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}

export enum SongListApiGetFeaturedListsSortEnum {
    None = "None",
    Name = "Name",
    Date = "Date",
    CreateDate = "CreateDate"
}


export class SongListApiGetFeaturedListsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childTags" })
  childTags?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featuredCategory" })
  featuredCategory?: SongListApiGetFeaturedListsFeaturedCategoryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: SongListApiGetFeaturedListsFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: SongListApiGetFeaturedListsLangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: SongListApiGetFeaturedListsNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SongListApiGetFeaturedListsSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];
}


export class SongListApiGetFeaturedListsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SongListApiGetFeaturedListsQueryParams;
}


export class SongListApiGetFeaturedListsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultSongListForApiContract?: shared.PartialFindResultSongListForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
