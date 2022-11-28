import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportsTripsQueryParams extends SpeakeasyBase {
    deviceId?: number[];
    from: Date;
    groupId?: number[];
    to: Date;
}
export declare class GetReportsTripsRequest extends SpeakeasyBase {
    queryParams: GetReportsTripsQueryParams;
}
export declare class GetReportsTripsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    reportTrips?: shared.ReportTrips[];
    statusCode: number;
}
