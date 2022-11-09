import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ArtistApiGetListFieldsEnum {
    None = "None"
,    AdditionalNames = "AdditionalNames"
,    ArtistLinks = "ArtistLinks"
,    ArtistLinksReverse = "ArtistLinksReverse"
,    BaseVoicebank = "BaseVoicebank"
,    Description = "Description"
,    MainPicture = "MainPicture"
,    Names = "Names"
,    Tags = "Tags"
,    WebLinks = "WebLinks"
}

export enum ArtistApiGetListLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum ArtistApiGetListNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}

export enum ArtistApiGetListSortEnum {
    None = "None"
,    Name = "Name"
,    AdditionDate = "AdditionDate"
,    AdditionDateAsc = "AdditionDateAsc"
,    ReleaseDate = "ReleaseDate"
,    SongCount = "SongCount"
,    SongRating = "SongRating"
,    FollowerCount = "FollowerCount"
}

export enum ArtistApiGetListStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class ArtistApiGetListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=advancedFilters" })
  advancedFilters?: any[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=allowBaseVoicebanks" })
  allowBaseVoicebanks?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=artistTypes" })
  artistTypes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=childTags" })
  childTags?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: ArtistApiGetListFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=followedByUserId" })
  followedByUserId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: ArtistApiGetListLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: ArtistApiGetListNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=preferAccurateMatches" })
  preferAccurateMatches?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ArtistApiGetListSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: ArtistApiGetListStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagName" })
  tagName?: string[];
}


export class ArtistApiGetListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ArtistApiGetListQueryParams;
}


export class ArtistApiGetListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultArtistForApiContract?: shared.PartialFindResultArtistForApiContract;

  @Metadata()
  statusCode: number;
}
