import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAllFacilitiesAcceptEnum {
    ApplicationGeoPlusJson = "application/geo+json",
    ApplicationVndGeoPlusJson = "application/vnd.geo+json",
    TextCsv = "text/csv"
}
export declare class GetAllFacilitiesHeaders extends SpeakeasyBase {
    accept: GetAllFacilitiesAcceptEnum;
}
export declare class GetAllFacilitiesSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class GetAllFacilitiesRequest extends SpeakeasyBase {
    headers: GetAllFacilitiesHeaders;
    security: GetAllFacilitiesSecurity;
}
export declare class GetAllFacilitiesResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    genericError?: shared.GenericError;
    geoFacilitiesResponse?: shared.GeoFacilitiesResponse;
    statusCode: number;
    getAllFacilities200TextCsvString?: string;
}
