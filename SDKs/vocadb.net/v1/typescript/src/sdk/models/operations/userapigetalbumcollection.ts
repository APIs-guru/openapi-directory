import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserApiGetAlbumCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum UserApiGetAlbumCollectionAlbumTypesEnum {
    Unknown = "Unknown",
    Album = "Album",
    Single = "Single",
    Ep = "EP",
    SplitAlbum = "SplitAlbum",
    Compilation = "Compilation",
    Video = "Video",
    Artbook = "Artbook",
    Game = "Game",
    Fanmade = "Fanmade",
    Instrumental = "Instrumental",
    Other = "Other"
}

export enum UserApiGetAlbumCollectionFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Artists = "Artists",
    Description = "Description",
    Discs = "Discs",
    Identifiers = "Identifiers",
    MainPicture = "MainPicture",
    Names = "Names",
    PVs = "PVs",
    ReleaseEvent = "ReleaseEvent",
    Tags = "Tags",
    Tracks = "Tracks",
    WebLinks = "WebLinks"
}

export enum UserApiGetAlbumCollectionLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum UserApiGetAlbumCollectionNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}

export enum UserApiGetAlbumCollectionPurchaseStatusesEnum {
    Nothing = "Nothing",
    Wishlisted = "Wishlisted",
    Ordered = "Ordered",
    Owned = "Owned",
    All = "All"
}

export enum UserApiGetAlbumCollectionSortEnum {
    None = "None",
    Name = "Name",
    ReleaseDate = "ReleaseDate",
    ReleaseDateWithNulls = "ReleaseDateWithNulls",
    AdditionDate = "AdditionDate",
    RatingAverage = "RatingAverage",
    RatingTotal = "RatingTotal",
    NameThenReleaseDate = "NameThenReleaseDate",
    CollectionCount = "CollectionCount"
}


export class UserApiGetAlbumCollectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advancedFilters" })
  advancedFilters?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=albumTypes" })
  albumTypes?: UserApiGetAlbumCollectionAlbumTypesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistId" })
  artistId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: UserApiGetAlbumCollectionFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: UserApiGetAlbumCollectionLangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: UserApiGetAlbumCollectionNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=purchaseStatuses" })
  purchaseStatuses?: UserApiGetAlbumCollectionPurchaseStatusesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=releaseEventId" })
  releaseEventId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: UserApiGetAlbumCollectionSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number;
}


export class UserApiGetAlbumCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiGetAlbumCollectionPathParams;

  @SpeakeasyMetadata()
  queryParams: UserApiGetAlbumCollectionQueryParams;
}


export class UserApiGetAlbumCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultAlbumForUserForApiContract?: shared.PartialFindResultAlbumForUserForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
