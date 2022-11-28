import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteApiV1SecretsSecretIdPathParams extends SpeakeasyBase {
    secretId: string;
}
export declare class DeleteApiV1SecretsSecretIdQueryParams extends SpeakeasyBase {
    planId?: string;
    scope?: number;
}
export declare class DeleteApiV1SecretsSecretIdRequest extends SpeakeasyBase {
    pathParams: DeleteApiV1SecretsSecretIdPathParams;
    queryParams: DeleteApiV1SecretsSecretIdQueryParams;
}
export declare class DeleteApiV1SecretsSecretIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
