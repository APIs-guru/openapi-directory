import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteReportingInstructionPathParams extends SpeakeasyBase {
    employerId: string;
    reportingInstructionId: string;
}
export declare class DeleteReportingInstructionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteReportingInstructionRequest extends SpeakeasyBase {
    pathParams: DeleteReportingInstructionPathParams;
    headers: DeleteReportingInstructionHeaders;
}
export declare class DeleteReportingInstructionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
