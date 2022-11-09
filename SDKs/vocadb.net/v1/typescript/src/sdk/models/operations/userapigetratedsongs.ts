import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserApiGetRatedSongsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum UserApiGetRatedSongsArtistGroupingEnum {
    And = "And"
,    Or = "Or"
}

export enum UserApiGetRatedSongsFieldsEnum {
    None = "None"
,    AdditionalNames = "AdditionalNames"
,    Albums = "Albums"
,    Artists = "Artists"
,    Lyrics = "Lyrics"
,    MainPicture = "MainPicture"
,    Names = "Names"
,    PVs = "PVs"
,    ReleaseEvent = "ReleaseEvent"
,    Tags = "Tags"
,    ThumbUrl = "ThumbUrl"
,    WebLinks = "WebLinks"
}

export enum UserApiGetRatedSongsLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum UserApiGetRatedSongsNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}

export enum UserApiGetRatedSongsPvServicesEnum {
    Nothing = "Nothing"
,    NicoNicoDouga = "NicoNicoDouga"
,    Youtube = "Youtube"
,    SoundCloud = "SoundCloud"
,    Vimeo = "Vimeo"
,    Piapro = "Piapro"
,    Bilibili = "Bilibili"
,    File = "File"
,    LocalFile = "LocalFile"
,    Creofuga = "Creofuga"
,    Bandcamp = "Bandcamp"
}

export enum UserApiGetRatedSongsRatingEnum {
    Nothing = "Nothing"
,    Dislike = "Dislike"
,    Like = "Like"
,    Favorite = "Favorite"
}

export enum UserApiGetRatedSongsSortEnum {
    None = "None"
,    Name = "Name"
,    AdditionDate = "AdditionDate"
,    PublishDate = "PublishDate"
,    FavoritedTimes = "FavoritedTimes"
,    RatingScore = "RatingScore"
,    RatingDate = "RatingDate"
}


export class UserApiGetRatedSongsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=advancedFilters" })
  advancedFilters?: any[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=artistGrouping" })
  artistGrouping?: UserApiGetRatedSongsArtistGroupingEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=artistId" })
  artistId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=childVoicebanks" })
  childVoicebanks?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: UserApiGetRatedSongsFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupByRating" })
  groupByRating?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: UserApiGetRatedSongsLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: UserApiGetRatedSongsNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pvServices" })
  pvServices?: UserApiGetRatedSongsPvServicesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating?: UserApiGetRatedSongsRatingEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=songListId" })
  songListId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: UserApiGetRatedSongsSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagName" })
  tagName?: string;
}


export class UserApiGetRatedSongsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiGetRatedSongsPathParams;

  @Metadata()
  queryParams: UserApiGetRatedSongsQueryParams;
}


export class UserApiGetRatedSongsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultRatedSongForUserForApiContract?: shared.PartialFindResultRatedSongForUserForApiContract;

  @Metadata()
  statusCode: number;
}
