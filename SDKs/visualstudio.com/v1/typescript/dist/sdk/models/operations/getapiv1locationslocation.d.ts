import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1LocationsLocationPathParams extends SpeakeasyBase {
    location: string;
}
export declare class GetApiV1LocationsLocationQueryParams extends SpeakeasyBase {
    planId?: string;
}
export declare class GetApiV1LocationsLocationRequest extends SpeakeasyBase {
    pathParams: GetApiV1LocationsLocationPathParams;
    queryParams: GetApiV1LocationsLocationQueryParams;
}
export declare class GetApiV1LocationsLocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    locationInfoResult?: shared.LocationInfoResult;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
