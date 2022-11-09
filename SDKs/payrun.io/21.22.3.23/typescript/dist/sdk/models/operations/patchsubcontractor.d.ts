import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PatchSubContractorPathParams extends SpeakeasyBase {
    employerId: string;
    subContractorId: string;
}
export declare class PatchSubContractorHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PatchSubContractorRequest extends SpeakeasyBase {
    pathParams: PatchSubContractorPathParams;
    headers: PatchSubContractorHeaders;
    request: shared.SubContractor;
}
export declare class PatchSubContractorResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    subContractor?: shared.SubContractor;
}
