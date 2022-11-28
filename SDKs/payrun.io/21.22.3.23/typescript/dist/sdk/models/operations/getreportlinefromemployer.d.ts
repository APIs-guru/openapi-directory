import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportLineFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
    reportLineId: string;
}
export declare class GetReportLineFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetReportLineFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetReportLineFromEmployerPathParams;
    headers: GetReportLineFromEmployerHeaders;
}
export declare class GetReportLineFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    reportLine?: shared.ReportLine;
    statusCode: number;
}
