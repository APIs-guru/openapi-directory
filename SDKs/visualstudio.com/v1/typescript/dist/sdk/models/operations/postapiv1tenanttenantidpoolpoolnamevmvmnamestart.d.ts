import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartPathParams extends SpeakeasyBase {
    poolName: string;
    tenantId: string;
    vmName: string;
}
export declare class PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartRequest extends SpeakeasyBase {
    pathParams: PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartPathParams;
}
export declare class PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
