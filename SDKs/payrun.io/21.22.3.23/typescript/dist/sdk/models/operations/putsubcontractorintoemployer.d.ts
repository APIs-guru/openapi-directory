import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSubContractorIntoEmployerPathParams extends SpeakeasyBase {
    employerId: string;
    subContractorId: string;
}
export declare class PutSubContractorIntoEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutSubContractorIntoEmployerRequest extends SpeakeasyBase {
    pathParams: PutSubContractorIntoEmployerPathParams;
    headers: PutSubContractorIntoEmployerHeaders;
    request: shared.SubContractor;
}
export declare class PutSubContractorIntoEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    subContractor?: shared.SubContractor;
}
