import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPayslip3ReportOutputQueryParams extends SpeakeasyBase {
    employeeCodes?: string;
    employerKey: string;
    maxIndex?: string;
    payScheduleKey: string;
    paymentDate?: Date;
    startIndex?: string;
    taxYear: string;
    transformDefinitionKey?: string;
}
export declare class GetPayslip3ReportOutputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayslip3ReportOutputRequest extends SpeakeasyBase {
    queryParams: GetPayslip3ReportOutputQueryParams;
    headers: GetPayslip3ReportOutputHeaders;
}
export declare class GetPayslip3ReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getPayslip3ReportOutput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
