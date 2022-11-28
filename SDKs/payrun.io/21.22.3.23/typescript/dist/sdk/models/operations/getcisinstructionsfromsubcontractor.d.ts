import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCisInstructionsFromSubContractorPathParams extends SpeakeasyBase {
    employerId: string;
    subContractorId: string;
}
export declare class GetCisInstructionsFromSubContractorHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetCisInstructionsFromSubContractorRequest extends SpeakeasyBase {
    pathParams: GetCisInstructionsFromSubContractorPathParams;
    headers: GetCisInstructionsFromSubContractorHeaders;
}
export declare class GetCisInstructionsFromSubContractorResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
