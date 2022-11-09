import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeletePayInstructionPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    payInstructionId: string;
}
export declare class DeletePayInstructionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeletePayInstructionRequest extends SpeakeasyBase {
    pathParams: DeletePayInstructionPathParams;
    headers: DeletePayInstructionHeaders;
}
export declare class DeletePayInstructionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
