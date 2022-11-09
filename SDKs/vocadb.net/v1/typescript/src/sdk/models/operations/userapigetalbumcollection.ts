import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserApiGetAlbumCollectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum UserApiGetAlbumCollectionAlbumTypesEnum {
    Unknown = "Unknown"
,    Album = "Album"
,    Single = "Single"
,    Ep = "EP"
,    SplitAlbum = "SplitAlbum"
,    Compilation = "Compilation"
,    Video = "Video"
,    Artbook = "Artbook"
,    Game = "Game"
,    Fanmade = "Fanmade"
,    Instrumental = "Instrumental"
,    Other = "Other"
}

export enum UserApiGetAlbumCollectionFieldsEnum {
    None = "None"
,    AdditionalNames = "AdditionalNames"
,    Artists = "Artists"
,    Description = "Description"
,    Discs = "Discs"
,    Identifiers = "Identifiers"
,    MainPicture = "MainPicture"
,    Names = "Names"
,    PVs = "PVs"
,    ReleaseEvent = "ReleaseEvent"
,    Tags = "Tags"
,    Tracks = "Tracks"
,    WebLinks = "WebLinks"
}

export enum UserApiGetAlbumCollectionLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum UserApiGetAlbumCollectionNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}

export enum UserApiGetAlbumCollectionPurchaseStatusesEnum {
    Nothing = "Nothing"
,    Wishlisted = "Wishlisted"
,    Ordered = "Ordered"
,    Owned = "Owned"
,    All = "All"
}

export enum UserApiGetAlbumCollectionSortEnum {
    None = "None"
,    Name = "Name"
,    ReleaseDate = "ReleaseDate"
,    ReleaseDateWithNulls = "ReleaseDateWithNulls"
,    AdditionDate = "AdditionDate"
,    RatingAverage = "RatingAverage"
,    RatingTotal = "RatingTotal"
,    NameThenReleaseDate = "NameThenReleaseDate"
,    CollectionCount = "CollectionCount"
}


export class UserApiGetAlbumCollectionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=advancedFilters" })
  advancedFilters?: any[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=albumTypes" })
  albumTypes?: UserApiGetAlbumCollectionAlbumTypesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=artistId" })
  artistId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: UserApiGetAlbumCollectionFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: UserApiGetAlbumCollectionLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: UserApiGetAlbumCollectionNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=purchaseStatuses" })
  purchaseStatuses?: UserApiGetAlbumCollectionPurchaseStatusesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=releaseEventId" })
  releaseEventId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: UserApiGetAlbumCollectionSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number;
}


export class UserApiGetAlbumCollectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiGetAlbumCollectionPathParams;

  @Metadata()
  queryParams: UserApiGetAlbumCollectionQueryParams;
}


export class UserApiGetAlbumCollectionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultAlbumForUserForApiContract?: shared.PartialFindResultAlbumForUserForApiContract;

  @Metadata()
  statusCode: number;
}
