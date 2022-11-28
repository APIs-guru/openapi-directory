import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFacilityByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFacilityByIdSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class GetFacilityByIdRequest extends SpeakeasyBase {
    pathParams: GetFacilityByIdPathParams;
    security: GetFacilityByIdSecurity;
}
export declare class GetFacilityByIdResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    facilityReadResponse?: shared.FacilityReadResponse;
    genericError?: shared.GenericError;
    geoFacilityReadResponse?: shared.GeoFacilityReadResponse;
    statusCode: number;
}
