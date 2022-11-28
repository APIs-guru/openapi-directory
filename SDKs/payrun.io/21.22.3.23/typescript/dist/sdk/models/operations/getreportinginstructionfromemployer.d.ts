import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportingInstructionFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
    reportingInstructionId: string;
}
export declare class GetReportingInstructionFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetReportingInstructionFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetReportingInstructionFromEmployerPathParams;
    headers: GetReportingInstructionFromEmployerHeaders;
}
export declare class GetReportingInstructionFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    reportingInstruction?: shared.ReportingInstruction;
    statusCode: number;
}
