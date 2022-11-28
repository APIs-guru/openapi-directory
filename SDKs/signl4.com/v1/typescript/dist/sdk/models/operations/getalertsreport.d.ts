import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlertsReportQueryParams extends SpeakeasyBase {
    userId?: string;
}
export declare class GetAlertsReportRequest extends SpeakeasyBase {
    queryParams: GetAlertsReportQueryParams;
}
export declare class GetAlertsReportResponse extends SpeakeasyBase {
    alertReport?: shared.AlertReport;
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
