import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPapdisReportOuputQueryParams extends SpeakeasyBase {
    employerKey: string;
    messageFunctionCode: string;
    payScheduleKey: string;
    paymentDate?: Date;
    pensionKey: string;
    taxYear: string;
    transformDefinitionKey?: string;
}
export declare class GetPapdisReportOuputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPapdisReportOuputRequest extends SpeakeasyBase {
    queryParams: GetPapdisReportOuputQueryParams;
    headers: GetPapdisReportOuputHeaders;
}
export declare class GetPapdisReportOuputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getPapdisReportOuput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
