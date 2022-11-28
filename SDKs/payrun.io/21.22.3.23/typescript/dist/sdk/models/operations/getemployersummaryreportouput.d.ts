import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmployerSummaryReportOuputQueryParams extends SpeakeasyBase {
    contextDate: Date;
    employerKey: string;
}
export declare class GetEmployerSummaryReportOuputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployerSummaryReportOuputRequest extends SpeakeasyBase {
    queryParams: GetEmployerSummaryReportOuputQueryParams;
    headers: GetEmployerSummaryReportOuputHeaders;
}
export declare class GetEmployerSummaryReportOuputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getEmployerSummaryReportOuput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
