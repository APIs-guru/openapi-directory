import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutApiV1TenantTenantIdPoolPoolNamePathParams extends SpeakeasyBase {
    poolName: string;
    tenantId: string;
}
export declare class PutApiV1TenantTenantIdPoolPoolNameRequests extends SpeakeasyBase {
    createOrUpdatePoolBody?: shared.CreateOrUpdatePoolBody;
    createOrUpdatePoolBody1?: shared.CreateOrUpdatePoolBody;
    createOrUpdatePoolBody2?: shared.CreateOrUpdatePoolBody;
    createOrUpdatePoolBody3?: shared.CreateOrUpdatePoolBody;
}
export declare class PutApiV1TenantTenantIdPoolPoolNameRequest extends SpeakeasyBase {
    pathParams: PutApiV1TenantTenantIdPoolPoolNamePathParams;
    request?: PutApiV1TenantTenantIdPoolPoolNameRequests;
}
export declare class PutApiV1TenantTenantIdPoolPoolNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    poolResult?: shared.PoolResult;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
