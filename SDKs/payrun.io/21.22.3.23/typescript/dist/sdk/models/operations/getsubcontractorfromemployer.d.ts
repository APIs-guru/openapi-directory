import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubContractorFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
    subContractorId: string;
}
export declare class GetSubContractorFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetSubContractorFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetSubContractorFromEmployerPathParams;
    headers: GetSubContractorFromEmployerHeaders;
}
export declare class GetSubContractorFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    subContractor?: shared.SubContractor;
}
