import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostPensionIntoEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class PostPensionIntoEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostPensionIntoEmployerRequest extends SpeakeasyBase {
    pathParams: PostPensionIntoEmployerPathParams;
    headers: PostPensionIntoEmployerHeaders;
    request: shared.Pension;
}
export declare class PostPensionIntoEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
