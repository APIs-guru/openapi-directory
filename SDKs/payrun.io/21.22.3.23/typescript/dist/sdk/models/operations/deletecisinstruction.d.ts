import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCisInstructionPathParams extends SpeakeasyBase {
    cisInstructionId: string;
    employerId: string;
    subContractorId: string;
}
export declare class DeleteCisInstructionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteCisInstructionRequest extends SpeakeasyBase {
    pathParams: DeleteCisInstructionPathParams;
    headers: DeleteCisInstructionHeaders;
}
export declare class DeleteCisInstructionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
