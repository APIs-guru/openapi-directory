import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AlbumApiGetListArtistParticipationStatusEnum {
    Everything = "Everything"
,    OnlyMainAlbums = "OnlyMainAlbums"
,    OnlyCollaborations = "OnlyCollaborations"
}

export enum AlbumApiGetListDiscTypesEnum {
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

export enum AlbumApiGetListFieldsEnum {
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

export enum AlbumApiGetListLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum AlbumApiGetListNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}

export enum AlbumApiGetListSortEnum {
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

export enum AlbumApiGetListStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class AlbumApiGetListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=advancedFilters" })
  advancedFilters?: any[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=artistId" })
  artistId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=artistParticipationStatus" })
  artistParticipationStatus?: AlbumApiGetListArtistParticipationStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=barcode" })
  barcode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=childTags" })
  childTags?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=childVoicebanks" })
  childVoicebanks?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=discTypes" })
  discTypes?: AlbumApiGetListDiscTypesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: AlbumApiGetListFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeMembers" })
  includeMembers?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: AlbumApiGetListLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: AlbumApiGetListNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=preferAccurateMatches" })
  preferAccurateMatches?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=releaseDateAfter" })
  releaseDateAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=releaseDateBefore" })
  releaseDateBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: AlbumApiGetListSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: AlbumApiGetListStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagName" })
  tagName?: string[];
}


export class AlbumApiGetListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AlbumApiGetListQueryParams;
}


export class AlbumApiGetListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultAlbumForApiContract?: shared.PartialFindResultAlbumForApiContract;

  @Metadata()
  statusCode: number;
}
