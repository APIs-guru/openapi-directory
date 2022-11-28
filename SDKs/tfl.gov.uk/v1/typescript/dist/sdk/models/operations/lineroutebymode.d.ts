import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineRouteByModePathParams extends SpeakeasyBase {
    modes: string[];
}
export declare enum LineRouteByModeServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}
export declare class LineRouteByModeQueryParams extends SpeakeasyBase {
    serviceTypes?: LineRouteByModeServiceTypesEnum[];
}
export declare class LineRouteByModeRequest extends SpeakeasyBase {
    pathParams: LineRouteByModePathParams;
    queryParams: LineRouteByModeQueryParams;
}
export declare class LineRouteByModeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
