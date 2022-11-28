import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchCisInstructionPathParams extends SpeakeasyBase {
    cisInstructionId: string;
    employerId: string;
    subContractorId: string;
}
export declare class PatchCisInstructionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PatchCisInstructionRequest extends SpeakeasyBase {
    pathParams: PatchCisInstructionPathParams;
    headers: PatchCisInstructionHeaders;
}
export declare class PatchCisInstructionResponse extends SpeakeasyBase {
    cisInstruction?: shared.CisInstruction;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
