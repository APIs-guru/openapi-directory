import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineSearchPathParams extends SpeakeasyBase {
    query: string;
}
export declare enum LineSearchServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}
export declare class LineSearchQueryParams extends SpeakeasyBase {
    modes?: string[];
    serviceTypes?: LineSearchServiceTypesEnum[];
}
export declare class LineSearchRequest extends SpeakeasyBase {
    pathParams: LineSearchPathParams;
    queryParams: LineSearchQueryParams;
}
export declare class LineSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesRouteSearchResponse?: shared.TflApiPresentationEntitiesRouteSearchResponse;
}
