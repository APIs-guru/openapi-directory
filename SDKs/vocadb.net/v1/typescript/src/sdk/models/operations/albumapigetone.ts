import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AlbumApiGetOnePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum AlbumApiGetOneFieldsEnum {
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

export enum AlbumApiGetOneLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum AlbumApiGetOneSongFieldsEnum {
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


export class AlbumApiGetOneQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: AlbumApiGetOneFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: AlbumApiGetOneLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=songFields" })
  songFields?: AlbumApiGetOneSongFieldsEnum;
}


export class AlbumApiGetOneRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AlbumApiGetOnePathParams;

  @Metadata()
  queryParams: AlbumApiGetOneQueryParams;
}


export class AlbumApiGetOneResponse extends SpeakeasyBase {
  @Metadata()
  albumForApiContract?: shared.AlbumForApiContract;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
