import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCisInstructionIntoSubContractorPathParams extends SpeakeasyBase {
    employerId: string;
    subContractorId: string;
}
export declare class PostCisInstructionIntoSubContractorHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostCisInstructionIntoSubContractorRequest extends SpeakeasyBase {
    pathParams: PostCisInstructionIntoSubContractorPathParams;
    headers: PostCisInstructionIntoSubContractorHeaders;
    request: shared.CisInstruction;
}
export declare class PostCisInstructionIntoSubContractorResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
