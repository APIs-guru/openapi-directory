import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SongListApiGetSongsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=listId" })
  listId: number;
}

export enum SongListApiGetSongsFieldsEnum {
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

export enum SongListApiGetSongsLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum SongListApiGetSongsNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}

export enum SongListApiGetSongsPvServicesEnum {
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

export enum SongListApiGetSongsSortEnum {
    None = "None",
    Name = "Name",
    AdditionDate = "AdditionDate",
    PublishDate = "PublishDate",
    FavoritedTimes = "FavoritedTimes",
    RatingScore = "RatingScore",
    TagUsageCount = "TagUsageCount"
}


export class SongListApiGetSongsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advancedFilters" })
  advancedFilters?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistId" })
  artistId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childVoicebanks" })
  childVoicebanks?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: SongListApiGetSongsFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: SongListApiGetSongsLangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: SongListApiGetSongsNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pvServices" })
  pvServices?: SongListApiGetSongsPvServicesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=songTypes" })
  songTypes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SongListApiGetSongsSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];
}


export class SongListApiGetSongsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SongListApiGetSongsPathParams;

  @SpeakeasyMetadata()
  queryParams: SongListApiGetSongsQueryParams;
}


export class SongListApiGetSongsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultSongInListForApiContract?: shared.PartialFindResultSongInListForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
