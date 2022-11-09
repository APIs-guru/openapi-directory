import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPassReportOuputQueryParams extends SpeakeasyBase {
    documentId: string;
    employerKey: string;
    intermediaryId: string;
    messageFunctionCode: string;
    payScheduleKey: string;
    paymentDate?: Date;
    pensionKey: string;
    taxYear: string;
}
export declare class GetPassReportOuputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPassReportOuputRequest extends SpeakeasyBase {
    queryParams: GetPassReportOuputQueryParams;
    headers: GetPassReportOuputHeaders;
}
export declare class GetPassReportOuputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getPassReportOuput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
