import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportsRouteQueryParams extends SpeakeasyBase {
    deviceId?: number[];
    from: Date;
    groupId?: number[];
    to: Date;
}
export declare class GetReportsRouteRequest extends SpeakeasyBase {
    queryParams: GetReportsRouteQueryParams;
}
export declare class GetReportsRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    positions?: shared.Position[];
    statusCode: number;
}
