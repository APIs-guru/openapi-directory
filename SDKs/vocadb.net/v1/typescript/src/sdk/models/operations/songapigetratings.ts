import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SongApiGetRatingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum SongApiGetRatingsLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum SongApiGetRatingsUserFieldsEnum {
    None = "None",
    KnownLanguages = "KnownLanguages",
    MainPicture = "MainPicture",
    OldUsernames = "OldUsernames"
}


export class SongApiGetRatingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: SongApiGetRatingsLangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userFields" })
  userFields: SongApiGetRatingsUserFieldsEnum;
}


export class SongApiGetRatingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SongApiGetRatingsPathParams;

  @SpeakeasyMetadata()
  queryParams: SongApiGetRatingsQueryParams;
}


export class SongApiGetRatingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RatedSongForUserForApiContract })
  ratedSongForUserForApiContracts?: shared.RatedSongForUserForApiContract[];

  @SpeakeasyMetadata()
  statusCode: number;
}
