import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopPointRoutePathParams extends SpeakeasyBase {
    id: string;
}
export declare enum StopPointRouteServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}
export declare class StopPointRouteQueryParams extends SpeakeasyBase {
    serviceTypes?: StopPointRouteServiceTypesEnum[];
}
export declare class StopPointRouteRequest extends SpeakeasyBase {
    pathParams: StopPointRoutePathParams;
    queryParams: StopPointRouteQueryParams;
}
export declare class StopPointRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesStopPointRouteSections?: shared.TflApiPresentationEntitiesStopPointRouteSection[];
}
