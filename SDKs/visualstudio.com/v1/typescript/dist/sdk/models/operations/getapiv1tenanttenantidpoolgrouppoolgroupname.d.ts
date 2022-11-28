import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams extends SpeakeasyBase {
    poolGroupName: string;
    tenantId: string;
}
export declare class GetApiV1TenantTenantIdPoolGroupPoolGroupNameRequest extends SpeakeasyBase {
    pathParams: GetApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams;
}
export declare class GetApiV1TenantTenantIdPoolGroupPoolGroupNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    poolGroupResult?: shared.PoolGroupResult;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
