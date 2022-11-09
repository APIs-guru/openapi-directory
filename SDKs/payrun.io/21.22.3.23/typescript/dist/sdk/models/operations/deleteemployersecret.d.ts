import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteEmployerSecretPathParams extends SpeakeasyBase {
    employerId: string;
    secretId: string;
}
export declare class DeleteEmployerSecretHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteEmployerSecretRequest extends SpeakeasyBase {
    pathParams: DeleteEmployerSecretPathParams;
    headers: DeleteEmployerSecretHeaders;
}
export declare class DeleteEmployerSecretResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
