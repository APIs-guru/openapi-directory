import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectionsForDirectionAndTypePathParams extends SpeakeasyBase {
    directionId: number;
    routeType: number;
}
export declare class DirectionsForDirectionAndTypeQueryParams extends SpeakeasyBase {
    devid?: string;
    signature?: string;
    token?: string;
}
export declare class DirectionsForDirectionAndTypeRequest extends SpeakeasyBase {
    pathParams: DirectionsForDirectionAndTypePathParams;
    queryParams: DirectionsForDirectionAndTypeQueryParams;
}
export declare class DirectionsForDirectionAndTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3DirectionsResponse?: shared.V3DirectionsResponse;
    v3ErrorResponse?: shared.V3ErrorResponse;
}
