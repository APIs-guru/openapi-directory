import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopPathParams extends SpeakeasyBase {
    poolName: string;
    tenantId: string;
    vmName: string;
}
export declare class PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopRequest extends SpeakeasyBase {
    pathParams: PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopPathParams;
}
export declare class PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
