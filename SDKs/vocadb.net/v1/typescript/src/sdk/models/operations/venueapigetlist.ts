import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum VenueApiGetListDistanceUnitEnum {
    Kilometers = "Kilometers",
    Miles = "Miles"
}

export enum VenueApiGetListFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Description = "Description",
    Events = "Events",
    Names = "Names",
    WebLinks = "WebLinks"
}

export enum VenueApiGetListLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum VenueApiGetListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}

export enum VenueApiGetListSortRuleEnum {
    None = "None",
    Name = "Name",
    Distance = "Distance"
}


export class VenueApiGetListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: VenueApiGetListDistanceUnitEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: VenueApiGetListFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: VenueApiGetListLangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: VenueApiGetListNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortRule" })
  sortRule?: VenueApiGetListSortRuleEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class VenueApiGetListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: VenueApiGetListQueryParams;
}


export class VenueApiGetListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultVenueForApiContract?: shared.PartialFindResultVenueForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
