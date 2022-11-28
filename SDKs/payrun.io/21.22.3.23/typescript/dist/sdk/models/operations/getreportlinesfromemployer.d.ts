import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportLinesFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetReportLinesFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetReportLinesFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetReportLinesFromEmployerPathParams;
    headers: GetReportLinesFromEmployerHeaders;
}
export declare class GetReportLinesFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
