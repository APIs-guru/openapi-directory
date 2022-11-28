import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiV1SecretsQueryParams extends SpeakeasyBase {
    planId?: string;
}
export declare class PostApiV1SecretsRequests extends SpeakeasyBase {
    scopedCreateSecretBody?: shared.ScopedCreateSecretBody;
    scopedCreateSecretBody1?: shared.ScopedCreateSecretBody;
    scopedCreateSecretBody2?: shared.ScopedCreateSecretBody;
    scopedCreateSecretBody3?: shared.ScopedCreateSecretBody;
}
export declare class PostApiV1SecretsRequest extends SpeakeasyBase {
    queryParams: PostApiV1SecretsQueryParams;
    request?: PostApiV1SecretsRequests;
}
export declare class PostApiV1SecretsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    scopedSecretResultBody?: shared.ScopedSecretResultBody;
    statusCode: number;
}
