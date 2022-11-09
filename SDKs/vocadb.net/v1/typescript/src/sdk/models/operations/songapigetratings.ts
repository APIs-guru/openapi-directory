import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SongApiGetRatingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum SongApiGetRatingsLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum SongApiGetRatingsUserFieldsEnum {
    None = "None"
,    KnownLanguages = "KnownLanguages"
,    MainPicture = "MainPicture"
,    OldUsernames = "OldUsernames"
}


export class SongApiGetRatingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: SongApiGetRatingsLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userFields" })
  userFields: SongApiGetRatingsUserFieldsEnum;
}


export class SongApiGetRatingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SongApiGetRatingsPathParams;

  @Metadata()
  queryParams: SongApiGetRatingsQueryParams;
}


export class SongApiGetRatingsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RatedSongForUserForApiContract })
  ratedSongForUserForApiContracts?: shared.RatedSongForUserForApiContract[];

  @Metadata()
  statusCode: number;
}
