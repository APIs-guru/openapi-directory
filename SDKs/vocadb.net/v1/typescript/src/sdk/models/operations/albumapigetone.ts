import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AlbumApiGetOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum AlbumApiGetOneFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Artists = "Artists",
    Description = "Description",
    Discs = "Discs",
    Identifiers = "Identifiers",
    MainPicture = "MainPicture",
    Names = "Names",
    PVs = "PVs",
    ReleaseEvent = "ReleaseEvent",
    Tags = "Tags",
    Tracks = "Tracks",
    WebLinks = "WebLinks"
}

export enum AlbumApiGetOneLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum AlbumApiGetOneSongFieldsEnum {
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


export class AlbumApiGetOneQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: AlbumApiGetOneFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: AlbumApiGetOneLangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=songFields" })
  songFields?: AlbumApiGetOneSongFieldsEnum;
}


export class AlbumApiGetOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AlbumApiGetOnePathParams;

  @SpeakeasyMetadata()
  queryParams: AlbumApiGetOneQueryParams;
}


export class AlbumApiGetOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  albumForApiContract?: shared.AlbumForApiContract;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
