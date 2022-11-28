import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReleaseEventSeriesApiGetOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum ReleaseEventSeriesApiGetOneFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Description = "Description",
    Events = "Events",
    MainPicture = "MainPicture",
    Names = "Names",
    WebLinks = "WebLinks"
}

export enum ReleaseEventSeriesApiGetOneLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}


export class ReleaseEventSeriesApiGetOneQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: ReleaseEventSeriesApiGetOneFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: ReleaseEventSeriesApiGetOneLangEnum;
}


export class ReleaseEventSeriesApiGetOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReleaseEventSeriesApiGetOnePathParams;

  @SpeakeasyMetadata()
  queryParams: ReleaseEventSeriesApiGetOneQueryParams;
}


export class ReleaseEventSeriesApiGetOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  releaseEventSeriesForApiContract?: shared.ReleaseEventSeriesForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
