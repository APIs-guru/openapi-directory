import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1TenantTenantIdPoolPoolNameVmPathParams extends SpeakeasyBase {
    poolName: string;
    tenantId: string;
}
export declare class GetApiV1TenantTenantIdPoolPoolNameVmRequest extends SpeakeasyBase {
    pathParams: GetApiV1TenantTenantIdPoolPoolNameVmPathParams;
}
export declare class GetApiV1TenantTenantIdPoolPoolNameVmResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
    vmResults?: shared.VmResult[];
}
