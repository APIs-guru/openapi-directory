import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetP11SummaryReportOutputQueryParams extends SpeakeasyBase {
    employerKey: string;
    maxIndex?: string;
    payScheduleKey: string;
    startIndex?: string;
    taxYear: string;
}
export declare class GetP11SummaryReportOutputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetP11SummaryReportOutputRequest extends SpeakeasyBase {
    queryParams: GetP11SummaryReportOutputQueryParams;
    headers: GetP11SummaryReportOutputHeaders;
}
export declare class GetP11SummaryReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getP11SummaryReportOutput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
