import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum TagApiGetListFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    AliasedTo = "AliasedTo",
    Description = "Description",
    MainPicture = "MainPicture",
    Names = "Names",
    Parent = "Parent",
    RelatedTags = "RelatedTags",
    TranslatedDescription = "TranslatedDescription",
    WebLinks = "WebLinks"
}

export enum TagApiGetListLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum TagApiGetListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}

export enum TagApiGetListSortEnum {
    Nothing = "Nothing",
    Name = "Name",
    AdditionDate = "AdditionDate",
    UsageCount = "UsageCount"
}

export enum TagApiGetListTargetEnum {
    Nothing = "Nothing",
    Album = "Album",
    Artist = "Artist",
    AlbumArtist = "AlbumArtist",
    Event = "Event",
    Song = "Song",
    AlbumSong = "AlbumSong",
    ArtistSong = "ArtistSong",
    All = "All"
}


export class TagApiGetListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowChildren" })
  allowChildren?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categoryName" })
  categoryName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: TagApiGetListFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: TagApiGetListLangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: TagApiGetListNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preferAccurateMatches" })
  preferAccurateMatches?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: TagApiGetListSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target" })
  target?: TagApiGetListTargetEnum;
}


export class TagApiGetListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TagApiGetListQueryParams;
}


export class TagApiGetListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultTagForApiContract?: shared.PartialFindResultTagForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
