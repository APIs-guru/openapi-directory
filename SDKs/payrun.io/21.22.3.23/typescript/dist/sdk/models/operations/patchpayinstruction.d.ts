import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchPayInstructionPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    payInstructionId: string;
}
export declare class PatchPayInstructionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PatchPayInstructionRequest extends SpeakeasyBase {
    pathParams: PatchPayInstructionPathParams;
    headers: PatchPayInstructionHeaders;
    request: shared.PayInstruction;
}
export declare class PatchPayInstructionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    payInstruction?: shared.PayInstruction;
    statusCode: number;
}
