import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReleaseEventSeriesApiGetOnePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum ReleaseEventSeriesApiGetOneFieldsEnum {
    None = "None"
,    AdditionalNames = "AdditionalNames"
,    Description = "Description"
,    Events = "Events"
,    MainPicture = "MainPicture"
,    Names = "Names"
,    WebLinks = "WebLinks"
}

export enum ReleaseEventSeriesApiGetOneLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}


export class ReleaseEventSeriesApiGetOneQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: ReleaseEventSeriesApiGetOneFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: ReleaseEventSeriesApiGetOneLangEnum;
}


export class ReleaseEventSeriesApiGetOneRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReleaseEventSeriesApiGetOnePathParams;

  @Metadata()
  queryParams: ReleaseEventSeriesApiGetOneQueryParams;
}


export class ReleaseEventSeriesApiGetOneResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  releaseEventSeriesForApiContract?: shared.ReleaseEventSeriesForApiContract;

  @Metadata()
  statusCode: number;
}
