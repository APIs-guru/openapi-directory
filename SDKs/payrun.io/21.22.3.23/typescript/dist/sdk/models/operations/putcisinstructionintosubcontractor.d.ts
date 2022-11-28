import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCisInstructionIntoSubContractorPathParams extends SpeakeasyBase {
    cisInstructionId: string;
    employerId: string;
    subContractorId: string;
}
export declare class PutCisInstructionIntoSubContractorHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutCisInstructionIntoSubContractorRequest extends SpeakeasyBase {
    pathParams: PutCisInstructionIntoSubContractorPathParams;
    headers: PutCisInstructionIntoSubContractorHeaders;
    request: shared.CisInstruction;
}
export declare class PutCisInstructionIntoSubContractorResponse extends SpeakeasyBase {
    cisInstruction?: shared.CisInstruction;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
