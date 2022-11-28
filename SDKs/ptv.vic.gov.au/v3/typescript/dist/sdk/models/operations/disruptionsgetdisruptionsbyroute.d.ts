import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisruptionsGetDisruptionsByRoutePathParams extends SpeakeasyBase {
    routeId: number;
}
export declare enum DisruptionsGetDisruptionsByRouteDisruptionStatusEnum {
    Current = "current",
    Planned = "planned"
}
export declare class DisruptionsGetDisruptionsByRouteQueryParams extends SpeakeasyBase {
    devid?: string;
    disruptionStatus?: DisruptionsGetDisruptionsByRouteDisruptionStatusEnum;
    signature?: string;
    token?: string;
}
export declare class DisruptionsGetDisruptionsByRouteRequest extends SpeakeasyBase {
    pathParams: DisruptionsGetDisruptionsByRoutePathParams;
    queryParams: DisruptionsGetDisruptionsByRouteQueryParams;
}
export declare class DisruptionsGetDisruptionsByRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3DisruptionsResponse?: shared.V3DisruptionsResponse;
    v3ErrorResponse?: shared.V3ErrorResponse;
}
