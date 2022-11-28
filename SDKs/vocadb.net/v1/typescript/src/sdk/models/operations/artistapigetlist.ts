import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ArtistApiGetListFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    ArtistLinks = "ArtistLinks",
    ArtistLinksReverse = "ArtistLinksReverse",
    BaseVoicebank = "BaseVoicebank",
    Description = "Description",
    MainPicture = "MainPicture",
    Names = "Names",
    Tags = "Tags",
    WebLinks = "WebLinks"
}

export enum ArtistApiGetListLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum ArtistApiGetListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}

export enum ArtistApiGetListSortEnum {
    None = "None",
    Name = "Name",
    AdditionDate = "AdditionDate",
    AdditionDateAsc = "AdditionDateAsc",
    ReleaseDate = "ReleaseDate",
    SongCount = "SongCount",
    SongRating = "SongRating",
    FollowerCount = "FollowerCount"
}

export enum ArtistApiGetListStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class ArtistApiGetListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advancedFilters" })
  advancedFilters?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowBaseVoicebanks" })
  allowBaseVoicebanks?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistTypes" })
  artistTypes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childTags" })
  childTags?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: ArtistApiGetListFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=followedByUserId" })
  followedByUserId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: ArtistApiGetListLangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: ArtistApiGetListNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preferAccurateMatches" })
  preferAccurateMatches?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ArtistApiGetListSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: ArtistApiGetListStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagName" })
  tagName?: string[];
}


export class ArtistApiGetListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ArtistApiGetListQueryParams;
}


export class ArtistApiGetListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultArtistForApiContract?: shared.PartialFindResultArtistForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
