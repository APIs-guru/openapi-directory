import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum VenueApiGetListDistanceUnitEnum {
    Kilometers = "Kilometers"
,    Miles = "Miles"
}

export enum VenueApiGetListFieldsEnum {
    None = "None"
,    AdditionalNames = "AdditionalNames"
,    Description = "Description"
,    Events = "Events"
,    Names = "Names"
,    WebLinks = "WebLinks"
}

export enum VenueApiGetListLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum VenueApiGetListNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}

export enum VenueApiGetListSortRuleEnum {
    None = "None"
,    Name = "Name"
,    Distance = "Distance"
}


export class VenueApiGetListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: VenueApiGetListDistanceUnitEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: VenueApiGetListFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: VenueApiGetListLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: VenueApiGetListNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortRule" })
  sortRule?: VenueApiGetListSortRuleEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class VenueApiGetListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: VenueApiGetListQueryParams;
}


export class VenueApiGetListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultVenueForApiContract?: shared.PartialFindResultVenueForApiContract;

  @Metadata()
  statusCode: number;
}
