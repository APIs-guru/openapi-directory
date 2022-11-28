import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AlbumApiGetNewAlbumsFieldsEnum {
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

export enum AlbumApiGetNewAlbumsLanguagePreferenceEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}


export class AlbumApiGetNewAlbumsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: AlbumApiGetNewAlbumsFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languagePreference" })
  languagePreference?: AlbumApiGetNewAlbumsLanguagePreferenceEnum;
}


export class AlbumApiGetNewAlbumsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AlbumApiGetNewAlbumsQueryParams;
}


export class AlbumApiGetNewAlbumsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AlbumForApiContract })
  albumForApiContracts?: shared.AlbumForApiContract[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
