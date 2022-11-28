import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ReleaseEventApiGetListCategoryEnum {
    Unspecified = "Unspecified",
    AlbumRelease = "AlbumRelease",
    Anniversary = "Anniversary",
    Club = "Club",
    Concert = "Concert",
    Contest = "Contest",
    Convention = "Convention",
    Other = "Other"
}

export enum ReleaseEventApiGetListFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Artists = "Artists",
    Description = "Description",
    MainPicture = "MainPicture",
    Names = "Names",
    Series = "Series",
    SongList = "SongList",
    Tags = "Tags",
    Venue = "Venue",
    WebLinks = "WebLinks"
}

export enum ReleaseEventApiGetListLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum ReleaseEventApiGetListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}

export enum ReleaseEventApiGetListSortEnum {
    None = "None",
    Name = "Name",
    Date = "Date",
    AdditionDate = "AdditionDate",
    SeriesName = "SeriesName",
    VenueName = "VenueName"
}

export enum ReleaseEventApiGetListStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class ReleaseEventApiGetListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=afterDate" })
  afterDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistId" })
  artistId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=beforeDate" })
  beforeDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: ReleaseEventApiGetListCategoryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childTags" })
  childTags?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childVoicebanks" })
  childVoicebanks?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: ReleaseEventApiGetListFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeMembers" })
  includeMembers?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: ReleaseEventApiGetListLangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: ReleaseEventApiGetListNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seriesId" })
  seriesId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ReleaseEventApiGetListSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: ReleaseEventApiGetListStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userCollectionId" })
  userCollectionId?: number;
}


export class ReleaseEventApiGetListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReleaseEventApiGetListQueryParams;
}


export class ReleaseEventApiGetListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultReleaseEventForApiContract?: shared.PartialFindResultReleaseEventForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
