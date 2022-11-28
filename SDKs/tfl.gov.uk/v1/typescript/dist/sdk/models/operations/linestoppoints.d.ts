import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineStopPointsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class LineStopPointsQueryParams extends SpeakeasyBase {
    tflOperatedNationalRailStationsOnly?: boolean;
}
export declare class LineStopPointsRequest extends SpeakeasyBase {
    pathParams: LineStopPointsPathParams;
    queryParams: LineStopPointsQueryParams;
}
export declare class LineStopPointsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
