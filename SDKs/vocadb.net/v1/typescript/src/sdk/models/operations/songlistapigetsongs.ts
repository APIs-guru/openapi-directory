import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SongListApiGetSongsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=listId" })
  listId: number;
}

export enum SongListApiGetSongsFieldsEnum {
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

export enum SongListApiGetSongsLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum SongListApiGetSongsNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}

export enum SongListApiGetSongsPvServicesEnum {
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

export enum SongListApiGetSongsSortEnum {
    None = "None"
,    Name = "Name"
,    AdditionDate = "AdditionDate"
,    PublishDate = "PublishDate"
,    FavoritedTimes = "FavoritedTimes"
,    RatingScore = "RatingScore"
,    TagUsageCount = "TagUsageCount"
}


export class SongListApiGetSongsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=advancedFilters" })
  advancedFilters?: any[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=artistId" })
  artistId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=childVoicebanks" })
  childVoicebanks?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: SongListApiGetSongsFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: SongListApiGetSongsLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: SongListApiGetSongsNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pvServices" })
  pvServices?: SongListApiGetSongsPvServicesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=songTypes" })
  songTypes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SongListApiGetSongsSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];
}


export class SongListApiGetSongsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SongListApiGetSongsPathParams;

  @Metadata()
  queryParams: SongListApiGetSongsQueryParams;
}


export class SongListApiGetSongsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultSongInListForApiContract?: shared.PartialFindResultSongInListForApiContract;

  @Metadata()
  statusCode: number;
}
