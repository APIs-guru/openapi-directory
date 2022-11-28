import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetFacilitiesByLocationTypeEnum {
    Health = "health",
    Cemetery = "cemetery",
    Benefits = "benefits",
    VetCenter = "vet_center"
}
export declare class GetFacilitiesByLocationQueryParams extends SpeakeasyBase {
    bbox?: number[];
    ids?: string[];
    lat?: number;
    long?: number;
    mobile?: boolean;
    page?: number;
    perPage?: number;
    services?: string[];
    state?: string;
    type?: GetFacilitiesByLocationTypeEnum;
    visn?: number;
    zip?: string;
}
export declare class GetFacilitiesByLocationSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class GetFacilitiesByLocationRequest extends SpeakeasyBase {
    queryParams: GetFacilitiesByLocationQueryParams;
    security: GetFacilitiesByLocationSecurity;
}
export declare class GetFacilitiesByLocationResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    facilitiesResponse?: shared.FacilitiesResponse;
    genericError?: shared.GenericError;
    geoFacilitiesResponse?: shared.GeoFacilitiesResponse;
    statusCode: number;
}
