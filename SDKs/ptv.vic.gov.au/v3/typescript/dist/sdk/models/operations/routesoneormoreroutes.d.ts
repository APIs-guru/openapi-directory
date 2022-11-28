import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RoutesOneOrMoreRoutesQueryParams extends SpeakeasyBase {
    devid?: string;
    routeName?: string;
    routeTypes?: number[];
    signature?: string;
    token?: string;
}
export declare class RoutesOneOrMoreRoutesRequest extends SpeakeasyBase {
    queryParams: RoutesOneOrMoreRoutesQueryParams;
}
export declare class RoutesOneOrMoreRoutesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3ErrorResponse?: shared.V3ErrorResponse;
    v3RouteResponse?: shared.V3RouteResponse;
}
