import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteCisInstructionTagPathParams extends SpeakeasyBase {
    cisInstructionId: string;
    employerId: string;
    subContractorId: string;
    tagId: string;
}
export declare class DeleteCisInstructionTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteCisInstructionTagRequest extends SpeakeasyBase {
    pathParams: DeleteCisInstructionTagPathParams;
    headers: DeleteCisInstructionTagHeaders;
}
export declare class DeleteCisInstructionTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
