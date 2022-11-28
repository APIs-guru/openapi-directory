import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmployerSecretPathParams extends SpeakeasyBase {
    employerId: string;
    secretId: string;
}
export declare class GetEmployerSecretHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployerSecretRequest extends SpeakeasyBase {
    pathParams: GetEmployerSecretPathParams;
    headers: GetEmployerSecretHeaders;
}
export declare class GetEmployerSecretResponse extends SpeakeasyBase {
    contentType: string;
    employerSecret?: shared.EmployerSecret;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
