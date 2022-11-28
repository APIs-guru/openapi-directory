import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopPointReachableFromPathParams extends SpeakeasyBase {
    id: string;
    lineId: string;
}
export declare enum StopPointReachableFromServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}
export declare class StopPointReachableFromQueryParams extends SpeakeasyBase {
    serviceTypes?: StopPointReachableFromServiceTypesEnum[];
}
export declare class StopPointReachableFromRequest extends SpeakeasyBase {
    pathParams: StopPointReachableFromPathParams;
    queryParams: StopPointReachableFromQueryParams;
}
export declare class StopPointReachableFromResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
