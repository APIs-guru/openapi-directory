import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNearbyFacilitiesQueryParams extends SpeakeasyBase {
    city?: string;
    driveTime?: number;
    lat?: number;
    lng?: number;
    page?: number;
    perPage?: number;
    services?: string[];
    state?: string;
    streetAddress?: string;
    zip?: string;
}
export declare class GetNearbyFacilitiesSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class GetNearbyFacilitiesRequest extends SpeakeasyBase {
    queryParams: GetNearbyFacilitiesQueryParams;
    security: GetNearbyFacilitiesSecurity;
}
export declare class GetNearbyFacilitiesResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    genericError?: shared.GenericError;
    nearbyResponse?: shared.NearbyResponse;
    statusCode: number;
}
