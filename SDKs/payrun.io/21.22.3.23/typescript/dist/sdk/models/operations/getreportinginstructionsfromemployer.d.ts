import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetReportingInstructionsFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetReportingInstructionsFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetReportingInstructionsFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetReportingInstructionsFromEmployerPathParams;
    headers: GetReportingInstructionsFromEmployerHeaders;
}
export declare class GetReportingInstructionsFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
