import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostEmployerSecretPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class PostEmployerSecretHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostEmployerSecretRequest extends SpeakeasyBase {
    pathParams: PostEmployerSecretPathParams;
    headers: PostEmployerSecretHeaders;
}
export declare class PostEmployerSecretResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
