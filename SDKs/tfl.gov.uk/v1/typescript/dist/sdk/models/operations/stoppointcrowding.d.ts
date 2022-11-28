import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopPointCrowdingPathParams extends SpeakeasyBase {
    id: string;
    line: string;
}
export declare enum StopPointCrowdingDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound",
    All = "all"
}
export declare class StopPointCrowdingQueryParams extends SpeakeasyBase {
    direction: StopPointCrowdingDirectionEnum;
}
export declare class StopPointCrowdingRequest extends SpeakeasyBase {
    pathParams: StopPointCrowdingPathParams;
    queryParams: StopPointCrowdingQueryParams;
}
export declare class StopPointCrowdingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
