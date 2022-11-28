import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagFromPayInstructionPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    payInstructionId: string;
    tagId: string;
}
export declare class GetTagFromPayInstructionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagFromPayInstructionRequest extends SpeakeasyBase {
    pathParams: GetTagFromPayInstructionPathParams;
    headers: GetTagFromPayInstructionHeaders;
}
export declare class GetTagFromPayInstructionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
