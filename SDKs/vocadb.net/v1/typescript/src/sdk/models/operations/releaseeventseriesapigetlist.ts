import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ReleaseEventSeriesApiGetListFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Description = "Description",
    Events = "Events",
    MainPicture = "MainPicture",
    Names = "Names",
    WebLinks = "WebLinks"
}

export enum ReleaseEventSeriesApiGetListLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum ReleaseEventSeriesApiGetListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}


export class ReleaseEventSeriesApiGetListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: ReleaseEventSeriesApiGetListFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: ReleaseEventSeriesApiGetListLangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: ReleaseEventSeriesApiGetListNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class ReleaseEventSeriesApiGetListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReleaseEventSeriesApiGetListQueryParams;
}


export class ReleaseEventSeriesApiGetListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultReleaseEventSeriesForApiContract?: shared.PartialFindResultReleaseEventSeriesForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
