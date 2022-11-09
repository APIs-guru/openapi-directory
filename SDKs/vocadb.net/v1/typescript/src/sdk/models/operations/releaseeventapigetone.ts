import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReleaseEventApiGetOnePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum ReleaseEventApiGetOneFieldsEnum {
    None = "None"
,    AdditionalNames = "AdditionalNames"
,    Artists = "Artists"
,    Description = "Description"
,    MainPicture = "MainPicture"
,    Names = "Names"
,    Series = "Series"
,    SongList = "SongList"
,    Tags = "Tags"
,    Venue = "Venue"
,    WebLinks = "WebLinks"
}

export enum ReleaseEventApiGetOneLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}


export class ReleaseEventApiGetOneQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: ReleaseEventApiGetOneFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: ReleaseEventApiGetOneLangEnum;
}


export class ReleaseEventApiGetOneRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReleaseEventApiGetOnePathParams;

  @Metadata()
  queryParams: ReleaseEventApiGetOneQueryParams;
}


export class ReleaseEventApiGetOneResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  releaseEventForApiContract?: shared.ReleaseEventForApiContract;

  @Metadata()
  statusCode: number;
}
