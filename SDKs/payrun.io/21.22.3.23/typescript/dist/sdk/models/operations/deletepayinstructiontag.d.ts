import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePayInstructionTagPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    payInstructionId: string;
    tagId: string;
}
export declare class DeletePayInstructionTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeletePayInstructionTagRequest extends SpeakeasyBase {
    pathParams: DeletePayInstructionTagPathParams;
    headers: DeletePayInstructionTagHeaders;
}
export declare class DeletePayInstructionTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
