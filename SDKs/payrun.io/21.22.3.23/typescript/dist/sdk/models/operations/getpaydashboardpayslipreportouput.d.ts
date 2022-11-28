import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayDashboardPayslipReportOuputQueryParams extends SpeakeasyBase {
    employeeCodes?: string;
    employerKey: string;
    maxIndex?: string;
    payScheduleKey: string;
    paymentDate?: Date;
    publicationDate: Date;
    startIndex?: string;
    taxYear: string;
    transformDefinitionKey?: string;
}
export declare class GetPayDashboardPayslipReportOuputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayDashboardPayslipReportOuputRequest extends SpeakeasyBase {
    queryParams: GetPayDashboardPayslipReportOuputQueryParams;
    headers: GetPayDashboardPayslipReportOuputHeaders;
}
export declare class GetPayDashboardPayslipReportOuputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getPayDashboardPayslipReportOuput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
