import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineArrivalsPathParams extends SpeakeasyBase {
    ids: string[];
    stopPointId: string;
}
export declare enum LineArrivalsDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound",
    All = "all"
}
export declare class LineArrivalsQueryParams extends SpeakeasyBase {
    destinationStationId?: string;
    direction?: LineArrivalsDirectionEnum;
}
export declare class LineArrivalsRequest extends SpeakeasyBase {
    pathParams: LineArrivalsPathParams;
    queryParams: LineArrivalsQueryParams;
}
export declare class LineArrivalsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesPredictions?: shared.TflApiPresentationEntitiesPrediction[];
}
