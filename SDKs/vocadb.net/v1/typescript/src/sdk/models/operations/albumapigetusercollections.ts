import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AlbumApiGetUserCollectionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum AlbumApiGetUserCollectionsLanguagePreferenceEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}


export class AlbumApiGetUserCollectionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=languagePreference" })
  languagePreference?: AlbumApiGetUserCollectionsLanguagePreferenceEnum;
}


export class AlbumApiGetUserCollectionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AlbumApiGetUserCollectionsPathParams;

  @Metadata()
  queryParams: AlbumApiGetUserCollectionsQueryParams;
}


export class AlbumApiGetUserCollectionsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AlbumForUserForApiContract })
  albumForUserForApiContracts?: shared.AlbumForUserForApiContract[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
