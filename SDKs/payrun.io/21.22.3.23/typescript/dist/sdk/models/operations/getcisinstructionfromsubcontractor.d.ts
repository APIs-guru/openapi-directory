import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCisInstructionFromSubContractorPathParams extends SpeakeasyBase {
    cisInstructionId: string;
    employerId: string;
    subContractorId: string;
}
export declare class GetCisInstructionFromSubContractorHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetCisInstructionFromSubContractorRequest extends SpeakeasyBase {
    pathParams: GetCisInstructionFromSubContractorPathParams;
    headers: GetCisInstructionFromSubContractorHeaders;
}
export declare class GetCisInstructionFromSubContractorResponse extends SpeakeasyBase {
    cisInstruction?: shared.CisInstruction;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
