import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AlbumApiGetTopAlbumsFieldsEnum {
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

export enum AlbumApiGetTopAlbumsLanguagePreferenceEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}


export class AlbumApiGetTopAlbumsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: AlbumApiGetTopAlbumsFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignoreIds" })
  ignoreIds?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languagePreference" })
  languagePreference?: AlbumApiGetTopAlbumsLanguagePreferenceEnum;
}


export class AlbumApiGetTopAlbumsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AlbumApiGetTopAlbumsQueryParams;
}


export class AlbumApiGetTopAlbumsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AlbumForApiContract })
  albumForApiContracts?: shared.AlbumForApiContract[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
