import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopPointDisruptionByModePathParams extends SpeakeasyBase {
    modes: string[];
}
export declare class StopPointDisruptionByModeQueryParams extends SpeakeasyBase {
    includeRouteBlockedStops?: boolean;
}
export declare class StopPointDisruptionByModeRequest extends SpeakeasyBase {
    pathParams: StopPointDisruptionByModePathParams;
    queryParams: StopPointDisruptionByModeQueryParams;
}
export declare class StopPointDisruptionByModeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesDisruptedPoints?: shared.TflApiPresentationEntitiesDisruptedPoint[];
}
