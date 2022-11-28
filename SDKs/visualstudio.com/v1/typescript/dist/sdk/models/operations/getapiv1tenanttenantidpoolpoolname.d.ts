import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1TenantTenantIdPoolPoolNamePathParams extends SpeakeasyBase {
    poolName: string;
    tenantId: string;
}
export declare class GetApiV1TenantTenantIdPoolPoolNameRequest extends SpeakeasyBase {
    pathParams: GetApiV1TenantTenantIdPoolPoolNamePathParams;
}
export declare class GetApiV1TenantTenantIdPoolPoolNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    poolResult?: shared.PoolResult;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
