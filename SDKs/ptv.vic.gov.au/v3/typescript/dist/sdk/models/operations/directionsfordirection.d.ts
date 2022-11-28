import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectionsForDirectionPathParams extends SpeakeasyBase {
    directionId: number;
}
export declare class DirectionsForDirectionQueryParams extends SpeakeasyBase {
    devid?: string;
    signature?: string;
    token?: string;
}
export declare class DirectionsForDirectionRequest extends SpeakeasyBase {
    pathParams: DirectionsForDirectionPathParams;
    queryParams: DirectionsForDirectionQueryParams;
}
export declare class DirectionsForDirectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3DirectionsResponse?: shared.V3DirectionsResponse;
    v3ErrorResponse?: shared.V3ErrorResponse;
}
