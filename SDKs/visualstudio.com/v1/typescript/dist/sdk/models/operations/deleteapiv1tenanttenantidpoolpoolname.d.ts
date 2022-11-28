import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteApiV1TenantTenantIdPoolPoolNamePathParams extends SpeakeasyBase {
    poolName: string;
    tenantId: string;
}
export declare class DeleteApiV1TenantTenantIdPoolPoolNameRequest extends SpeakeasyBase {
    pathParams: DeleteApiV1TenantTenantIdPoolPoolNamePathParams;
}
export declare class DeleteApiV1TenantTenantIdPoolPoolNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
