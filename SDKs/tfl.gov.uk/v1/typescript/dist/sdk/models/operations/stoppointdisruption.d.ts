import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopPointDisruptionPathParams extends SpeakeasyBase {
    ids: string[];
}
export declare class StopPointDisruptionQueryParams extends SpeakeasyBase {
    flattenResponse?: boolean;
    getFamily?: boolean;
    includeRouteBlockedStops?: boolean;
}
export declare class StopPointDisruptionRequest extends SpeakeasyBase {
    pathParams: StopPointDisruptionPathParams;
    queryParams: StopPointDisruptionQueryParams;
}
export declare class StopPointDisruptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesDisruptedPoints?: shared.TflApiPresentationEntitiesDisruptedPoint[];
}
