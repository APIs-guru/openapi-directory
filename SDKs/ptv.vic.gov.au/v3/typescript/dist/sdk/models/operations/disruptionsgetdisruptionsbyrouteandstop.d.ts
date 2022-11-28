import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisruptionsGetDisruptionsByRouteAndStopPathParams extends SpeakeasyBase {
    routeId: number;
    stopId: number;
}
export declare enum DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum {
    Current = "current",
    Planned = "planned"
}
export declare class DisruptionsGetDisruptionsByRouteAndStopQueryParams extends SpeakeasyBase {
    devid?: string;
    disruptionStatus?: DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum;
    signature?: string;
    token?: string;
}
export declare class DisruptionsGetDisruptionsByRouteAndStopRequest extends SpeakeasyBase {
    pathParams: DisruptionsGetDisruptionsByRouteAndStopPathParams;
    queryParams: DisruptionsGetDisruptionsByRouteAndStopQueryParams;
}
export declare class DisruptionsGetDisruptionsByRouteAndStopResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3DisruptionsResponse?: shared.V3DisruptionsResponse;
    v3ErrorResponse?: shared.V3ErrorResponse;
}
