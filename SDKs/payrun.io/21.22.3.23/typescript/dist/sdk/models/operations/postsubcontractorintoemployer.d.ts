import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSubContractorIntoEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class PostSubContractorIntoEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostSubContractorIntoEmployerRequest extends SpeakeasyBase {
    pathParams: PostSubContractorIntoEmployerPathParams;
    headers: PostSubContractorIntoEmployerHeaders;
    request: shared.SubContractor;
}
export declare class PostSubContractorIntoEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
