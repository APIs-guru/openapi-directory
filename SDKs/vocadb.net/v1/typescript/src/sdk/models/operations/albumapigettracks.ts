import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AlbumApiGetTracksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum AlbumApiGetTracksFieldsEnum {
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

export enum AlbumApiGetTracksLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}


export class AlbumApiGetTracksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: AlbumApiGetTracksFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: AlbumApiGetTracksLangEnum;
}


export class AlbumApiGetTracksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AlbumApiGetTracksPathParams;

  @Metadata()
  queryParams: AlbumApiGetTracksQueryParams;
}


export class AlbumApiGetTracksResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.SongInAlbumForApiContract })
  songInAlbumForApiContracts?: shared.SongInAlbumForApiContract[];

  @Metadata()
  statusCode: number;
}
