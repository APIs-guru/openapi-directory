import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams extends SpeakeasyBase {
    poolName: string;
    tenantId: string;
    vmName: string;
}
export declare class GetApiV1TenantTenantIdPoolPoolNameVmVmNameRequest extends SpeakeasyBase {
    pathParams: GetApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams;
}
export declare class GetApiV1TenantTenantIdPoolPoolNameVmVmNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
    vmResult?: shared.VmResult;
}
