import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutEmployerSecretPathParams extends SpeakeasyBase {
    employerId: string;
    secretId: string;
}
export declare class PutEmployerSecretHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutEmployerSecretRequest extends SpeakeasyBase {
    pathParams: PutEmployerSecretPathParams;
    headers: PutEmployerSecretHeaders;
}
export declare class PutEmployerSecretResponse extends SpeakeasyBase {
    contentType: string;
    employerSecret?: shared.EmployerSecret;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
