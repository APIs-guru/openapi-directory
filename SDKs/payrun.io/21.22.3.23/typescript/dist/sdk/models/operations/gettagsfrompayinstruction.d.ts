import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTagsFromPayInstructionPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    payInstructionId: string;
}
export declare class GetTagsFromPayInstructionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromPayInstructionRequest extends SpeakeasyBase {
    pathParams: GetTagsFromPayInstructionPathParams;
    headers: GetTagsFromPayInstructionHeaders;
}
export declare class GetTagsFromPayInstructionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
