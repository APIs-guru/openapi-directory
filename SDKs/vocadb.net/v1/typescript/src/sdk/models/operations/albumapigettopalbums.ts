import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AlbumApiGetTopAlbumsFieldsEnum {
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

export enum AlbumApiGetTopAlbumsLanguagePreferenceEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}


export class AlbumApiGetTopAlbumsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: AlbumApiGetTopAlbumsFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ignoreIds" })
  ignoreIds?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=languagePreference" })
  languagePreference?: AlbumApiGetTopAlbumsLanguagePreferenceEnum;
}


export class AlbumApiGetTopAlbumsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AlbumApiGetTopAlbumsQueryParams;
}


export class AlbumApiGetTopAlbumsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AlbumForApiContract })
  albumForApiContracts?: shared.AlbumForApiContract[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
