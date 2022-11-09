import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum TagApiGetListFieldsEnum {
    None = "None"
,    AdditionalNames = "AdditionalNames"
,    AliasedTo = "AliasedTo"
,    Description = "Description"
,    MainPicture = "MainPicture"
,    Names = "Names"
,    Parent = "Parent"
,    RelatedTags = "RelatedTags"
,    TranslatedDescription = "TranslatedDescription"
,    WebLinks = "WebLinks"
}

export enum TagApiGetListLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum TagApiGetListNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}

export enum TagApiGetListSortEnum {
    Nothing = "Nothing"
,    Name = "Name"
,    AdditionDate = "AdditionDate"
,    UsageCount = "UsageCount"
}

export enum TagApiGetListTargetEnum {
    Nothing = "Nothing"
,    Album = "Album"
,    Artist = "Artist"
,    AlbumArtist = "AlbumArtist"
,    Event = "Event"
,    Song = "Song"
,    AlbumSong = "AlbumSong"
,    ArtistSong = "ArtistSong"
,    All = "All"
}


export class TagApiGetListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=allowChildren" })
  allowChildren?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=categoryName" })
  categoryName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: TagApiGetListFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: TagApiGetListLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: TagApiGetListNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=preferAccurateMatches" })
  preferAccurateMatches?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: TagApiGetListSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target" })
  target?: TagApiGetListTargetEnum;
}


export class TagApiGetListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TagApiGetListQueryParams;
}


export class TagApiGetListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultTagForApiContract?: shared.PartialFindResultTagForApiContract;

  @Metadata()
  statusCode: number;
}
