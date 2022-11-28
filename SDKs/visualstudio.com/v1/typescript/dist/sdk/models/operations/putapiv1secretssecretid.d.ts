import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutApiV1SecretsSecretIdPathParams extends SpeakeasyBase {
    secretId: string;
}
export declare class PutApiV1SecretsSecretIdQueryParams extends SpeakeasyBase {
    planId?: string;
}
export declare class PutApiV1SecretsSecretIdRequests extends SpeakeasyBase {
    scopedUpdateSecretBody?: shared.ScopedUpdateSecretBody;
    scopedUpdateSecretBody1?: shared.ScopedUpdateSecretBody;
    scopedUpdateSecretBody2?: shared.ScopedUpdateSecretBody;
    scopedUpdateSecretBody3?: shared.ScopedUpdateSecretBody;
}
export declare class PutApiV1SecretsSecretIdRequest extends SpeakeasyBase {
    pathParams: PutApiV1SecretsSecretIdPathParams;
    queryParams: PutApiV1SecretsSecretIdQueryParams;
    request?: PutApiV1SecretsSecretIdRequests;
}
export declare class PutApiV1SecretsSecretIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    scopedSecretResultBody?: shared.ScopedSecretResultBody;
    statusCode: number;
}
