import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineLineRoutesByIdsPathParams extends SpeakeasyBase {
    ids: string[];
}
export declare enum LineLineRoutesByIdsServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}
export declare class LineLineRoutesByIdsQueryParams extends SpeakeasyBase {
    serviceTypes?: LineLineRoutesByIdsServiceTypesEnum[];
}
export declare class LineLineRoutesByIdsRequest extends SpeakeasyBase {
    pathParams: LineLineRoutesByIdsPathParams;
    queryParams: LineLineRoutesByIdsQueryParams;
}
export declare class LineLineRoutesByIdsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
