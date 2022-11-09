import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSubContractorsFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetSubContractorsFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetSubContractorsFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetSubContractorsFromEmployerPathParams;
    headers: GetSubContractorsFromEmployerHeaders;
}
export declare class GetSubContractorsFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
