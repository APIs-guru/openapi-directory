import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SongApiGetByPvFieldsEnum {
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

export enum SongApiGetByPvLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum SongApiGetByPvPvServiceEnum {
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


export class SongApiGetByPvQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: SongApiGetByPvFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: SongApiGetByPvLangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pvId" })
  pvId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pvService" })
  pvService: SongApiGetByPvPvServiceEnum;
}


export class SongApiGetByPvRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SongApiGetByPvQueryParams;
}


export class SongApiGetByPvResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  songForApiContract?: shared.SongForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
