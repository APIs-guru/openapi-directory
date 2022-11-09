import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPayInstructionFromEmployeePathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    payInstructionId: string;
}
export declare class GetPayInstructionFromEmployeeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayInstructionFromEmployeeRequest extends SpeakeasyBase {
    pathParams: GetPayInstructionFromEmployeePathParams;
    headers: GetPayInstructionFromEmployeeHeaders;
}
export declare class GetPayInstructionFromEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    payInstruction?: shared.PayInstruction;
    statusCode: number;
}
