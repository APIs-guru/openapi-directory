import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutReportingInstructionPathParams extends SpeakeasyBase {
    employerId: string;
    reportingInstructionId: string;
}
export declare class PutReportingInstructionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutReportingInstructionRequest extends SpeakeasyBase {
    pathParams: PutReportingInstructionPathParams;
    headers: PutReportingInstructionHeaders;
    request: shared.ReportingInstruction;
}
export declare class PutReportingInstructionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    reportingInstruction?: shared.ReportingInstruction;
    statusCode: number;
}
