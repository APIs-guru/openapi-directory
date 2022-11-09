import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SongApiGetByPvFieldsEnum {
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

export enum SongApiGetByPvLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum SongApiGetByPvPvServiceEnum {
    NicoNicoDouga = "NicoNicoDouga"
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


export class SongApiGetByPvQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: SongApiGetByPvFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: SongApiGetByPvLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pvId" })
  pvId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pvService" })
  pvService: SongApiGetByPvPvServiceEnum;
}


export class SongApiGetByPvRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SongApiGetByPvQueryParams;
}


export class SongApiGetByPvResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  songForApiContract?: shared.SongForApiContract;

  @Metadata()
  statusCode: number;
}
