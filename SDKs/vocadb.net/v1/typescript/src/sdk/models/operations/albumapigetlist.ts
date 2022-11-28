import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AlbumApiGetListArtistParticipationStatusEnum {
    Everything = "Everything",
    OnlyMainAlbums = "OnlyMainAlbums",
    OnlyCollaborations = "OnlyCollaborations"
}

export enum AlbumApiGetListDiscTypesEnum {
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

export enum AlbumApiGetListFieldsEnum {
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

export enum AlbumApiGetListLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum AlbumApiGetListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}

export enum AlbumApiGetListSortEnum {
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

export enum AlbumApiGetListStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class AlbumApiGetListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advancedFilters" })
  advancedFilters?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistId" })
  artistId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistParticipationStatus" })
  artistParticipationStatus?: AlbumApiGetListArtistParticipationStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=barcode" })
  barcode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childTags" })
  childTags?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childVoicebanks" })
  childVoicebanks?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=discTypes" })
  discTypes?: AlbumApiGetListDiscTypesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: AlbumApiGetListFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeMembers" })
  includeMembers?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: AlbumApiGetListLangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: AlbumApiGetListNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preferAccurateMatches" })
  preferAccurateMatches?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=releaseDateAfter" })
  releaseDateAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=releaseDateBefore" })
  releaseDateBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: AlbumApiGetListSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: AlbumApiGetListStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagName" })
  tagName?: string[];
}


export class AlbumApiGetListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AlbumApiGetListQueryParams;
}


export class AlbumApiGetListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultAlbumForApiContract?: shared.PartialFindResultAlbumForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
