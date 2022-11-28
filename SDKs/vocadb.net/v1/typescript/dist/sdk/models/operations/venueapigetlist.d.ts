import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum VenueApiGetListDistanceUnitEnum {
    Kilometers = "Kilometers",
    Miles = "Miles"
}
export declare enum VenueApiGetListFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Description = "Description",
    Events = "Events",
    Names = "Names",
    WebLinks = "WebLinks"
}
export declare enum VenueApiGetListLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum VenueApiGetListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare enum VenueApiGetListSortRuleEnum {
    None = "None",
    Name = "Name",
    Distance = "Distance"
}
export declare class VenueApiGetListQueryParams extends SpeakeasyBase {
    distanceUnit?: VenueApiGetListDistanceUnitEnum;
    fields?: VenueApiGetListFieldsEnum;
    getTotalCount?: boolean;
    lang?: VenueApiGetListLangEnum;
    latitude?: number;
    longitude?: number;
    maxResults?: number;
    nameMatchMode?: VenueApiGetListNameMatchModeEnum;
    query?: string;
    radius?: number;
    sortRule?: VenueApiGetListSortRuleEnum;
    start?: number;
}
export declare class VenueApiGetListRequest extends SpeakeasyBase {
    queryParams: VenueApiGetListQueryParams;
}
export declare class VenueApiGetListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultVenueForApiContract?: shared.PartialFindResultVenueForApiContract;
    statusCode: number;
}
