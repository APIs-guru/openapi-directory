import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1SecretsQueryParams extends SpeakeasyBase {
    planId?: string;
}
export declare class GetApiV1SecretsRequest extends SpeakeasyBase {
    queryParams: GetApiV1SecretsQueryParams;
}
export declare class GetApiV1SecretsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    scopedSecretResultBodies?: shared.ScopedSecretResultBody[];
    statusCode: number;
}
