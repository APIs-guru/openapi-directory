import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AlbumApiGetTracksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum AlbumApiGetTracksFieldsEnum {
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

export enum AlbumApiGetTracksLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}


export class AlbumApiGetTracksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: AlbumApiGetTracksFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: AlbumApiGetTracksLangEnum;
}


export class AlbumApiGetTracksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AlbumApiGetTracksPathParams;

  @SpeakeasyMetadata()
  queryParams: AlbumApiGetTracksQueryParams;
}


export class AlbumApiGetTracksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.SongInAlbumForApiContract })
  songInAlbumForApiContracts?: shared.SongInAlbumForApiContract[];

  @SpeakeasyMetadata()
  statusCode: number;
}
