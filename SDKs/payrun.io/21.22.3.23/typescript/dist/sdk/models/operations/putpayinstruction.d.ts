import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutPayInstructionPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    payInstructionId: string;
}
export declare class PutPayInstructionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutPayInstructionRequest extends SpeakeasyBase {
    pathParams: PutPayInstructionPathParams;
    headers: PutPayInstructionHeaders;
    request: shared.PayInstruction;
}
export declare class PutPayInstructionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    payInstruction?: shared.PayInstruction;
    statusCode: number;
}
