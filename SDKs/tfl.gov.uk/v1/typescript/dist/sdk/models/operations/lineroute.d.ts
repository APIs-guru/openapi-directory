import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum LineRouteServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}
export declare class LineRouteQueryParams extends SpeakeasyBase {
    serviceTypes?: LineRouteServiceTypesEnum[];
}
export declare class LineRouteRequest extends SpeakeasyBase {
    queryParams: LineRouteQueryParams;
}
export declare class LineRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
