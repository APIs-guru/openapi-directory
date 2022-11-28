import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserApiGetRatedSongsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum UserApiGetRatedSongsArtistGroupingEnum {
    And = "And",
    Or = "Or"
}

export enum UserApiGetRatedSongsFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Albums = "Albums",
    Artists = "Artists",
    Lyrics = "Lyrics",
    MainPicture = "MainPicture",
    Names = "Names",
    PVs = "PVs",
    ReleaseEvent = "ReleaseEvent",
    Tags = "Tags",
    ThumbUrl = "ThumbUrl",
    WebLinks = "WebLinks"
}

export enum UserApiGetRatedSongsLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum UserApiGetRatedSongsNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}

export enum UserApiGetRatedSongsPvServicesEnum {
    Nothing = "Nothing",
    NicoNicoDouga = "NicoNicoDouga",
    Youtube = "Youtube",
    SoundCloud = "SoundCloud",
    Vimeo = "Vimeo",
    Piapro = "Piapro",
    Bilibili = "Bilibili",
    File = "File",
    LocalFile = "LocalFile",
    Creofuga = "Creofuga",
    Bandcamp = "Bandcamp"
}

export enum UserApiGetRatedSongsRatingEnum {
    Nothing = "Nothing",
    Dislike = "Dislike",
    Like = "Like",
    Favorite = "Favorite"
}

export enum UserApiGetRatedSongsSortEnum {
    None = "None",
    Name = "Name",
    AdditionDate = "AdditionDate",
    PublishDate = "PublishDate",
    FavoritedTimes = "FavoritedTimes",
    RatingScore = "RatingScore",
    RatingDate = "RatingDate"
}


export class UserApiGetRatedSongsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advancedFilters" })
  advancedFilters?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistGrouping" })
  artistGrouping?: UserApiGetRatedSongsArtistGroupingEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistId" })
  artistId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childVoicebanks" })
  childVoicebanks?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: UserApiGetRatedSongsFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupByRating" })
  groupByRating?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: UserApiGetRatedSongsLangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: UserApiGetRatedSongsNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pvServices" })
  pvServices?: UserApiGetRatedSongsPvServicesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating?: UserApiGetRatedSongsRatingEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=songListId" })
  songListId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: UserApiGetRatedSongsSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagName" })
  tagName?: string;
}


export class UserApiGetRatedSongsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiGetRatedSongsPathParams;

  @SpeakeasyMetadata()
  queryParams: UserApiGetRatedSongsQueryParams;
}


export class UserApiGetRatedSongsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultRatedSongForUserForApiContract?: shared.PartialFindResultRatedSongForUserForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
