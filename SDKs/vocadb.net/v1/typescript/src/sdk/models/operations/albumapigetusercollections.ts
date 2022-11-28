import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AlbumApiGetUserCollectionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum AlbumApiGetUserCollectionsLanguagePreferenceEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}


export class AlbumApiGetUserCollectionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languagePreference" })
  languagePreference?: AlbumApiGetUserCollectionsLanguagePreferenceEnum;
}


export class AlbumApiGetUserCollectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AlbumApiGetUserCollectionsPathParams;

  @SpeakeasyMetadata()
  queryParams: AlbumApiGetUserCollectionsQueryParams;
}


export class AlbumApiGetUserCollectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AlbumForUserForApiContract })
  albumForUserForApiContracts?: shared.AlbumForUserForApiContract[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
