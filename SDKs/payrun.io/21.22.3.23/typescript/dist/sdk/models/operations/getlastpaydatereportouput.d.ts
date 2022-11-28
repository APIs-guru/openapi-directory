import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLastPayDateReportOuputQueryParams extends SpeakeasyBase {
    employeeKey: string;
    employerKey: string;
}
export declare class GetLastPayDateReportOuputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetLastPayDateReportOuputRequest extends SpeakeasyBase {
    queryParams: GetLastPayDateReportOuputQueryParams;
    headers: GetLastPayDateReportOuputHeaders;
}
export declare class GetLastPayDateReportOuputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getLastPayDateReportOuput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
