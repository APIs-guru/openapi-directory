import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostReportingInstructionPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class PostReportingInstructionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostReportingInstructionRequest extends SpeakeasyBase {
    pathParams: PostReportingInstructionPathParams;
    headers: PostReportingInstructionHeaders;
    request: shared.ReportingInstruction;
}
export declare class PostReportingInstructionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
