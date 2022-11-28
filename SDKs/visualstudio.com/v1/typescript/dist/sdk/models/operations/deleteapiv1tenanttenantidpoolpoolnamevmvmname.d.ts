import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams extends SpeakeasyBase {
    poolName: string;
    tenantId: string;
    vmName: string;
}
export declare class DeleteApiV1TenantTenantIdPoolPoolNameVmVmNameRequest extends SpeakeasyBase {
    pathParams: DeleteApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams;
}
export declare class DeleteApiV1TenantTenantIdPoolPoolNameVmVmNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
