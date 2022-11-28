import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportsStopsQueryParams extends SpeakeasyBase {
    deviceId?: number[];
    from: Date;
    groupId?: number[];
    to: Date;
}
export declare class GetReportsStopsRequest extends SpeakeasyBase {
    queryParams: GetReportsStopsQueryParams;
}
export declare class GetReportsStopsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    reportStops?: shared.ReportStops[];
    statusCode: number;
}
