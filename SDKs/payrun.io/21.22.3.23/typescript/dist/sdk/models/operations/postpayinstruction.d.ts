import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostPayInstructionPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
}
export declare class PostPayInstructionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostPayInstructionRequest extends SpeakeasyBase {
    pathParams: PostPayInstructionPathParams;
    headers: PostPayInstructionHeaders;
    request: shared.PayInstruction;
}
export declare class PostPayInstructionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
