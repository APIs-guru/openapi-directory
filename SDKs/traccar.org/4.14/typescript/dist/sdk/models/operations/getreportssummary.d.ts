import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportsSummaryQueryParams extends SpeakeasyBase {
    deviceId?: number[];
    from: Date;
    groupId?: number[];
    to: Date;
}
export declare class GetReportsSummaryRequest extends SpeakeasyBase {
    queryParams: GetReportsSummaryQueryParams;
}
export declare class GetReportsSummaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    reportSummaries?: shared.ReportSummary[];
    statusCode: number;
}
