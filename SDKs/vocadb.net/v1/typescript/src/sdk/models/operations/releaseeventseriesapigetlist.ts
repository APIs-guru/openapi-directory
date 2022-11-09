import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ReleaseEventSeriesApiGetListFieldsEnum {
    None = "None"
,    AdditionalNames = "AdditionalNames"
,    Description = "Description"
,    Events = "Events"
,    MainPicture = "MainPicture"
,    Names = "Names"
,    WebLinks = "WebLinks"
}

export enum ReleaseEventSeriesApiGetListLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum ReleaseEventSeriesApiGetListNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}


export class ReleaseEventSeriesApiGetListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: ReleaseEventSeriesApiGetListFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: ReleaseEventSeriesApiGetListLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: ReleaseEventSeriesApiGetListNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class ReleaseEventSeriesApiGetListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ReleaseEventSeriesApiGetListQueryParams;
}


export class ReleaseEventSeriesApiGetListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultReleaseEventSeriesForApiContract?: shared.PartialFindResultReleaseEventSeriesForApiContract;

  @Metadata()
  statusCode: number;
}
