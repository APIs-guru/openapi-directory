import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams extends SpeakeasyBase {
    poolName: string;
    tenantId: string;
    vmName: string;
}
export declare class PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequests extends SpeakeasyBase {
    claimVmBody?: shared.ClaimVmBody;
    claimVmBody1?: shared.ClaimVmBody;
    claimVmBody2?: shared.ClaimVmBody;
    claimVmBody3?: shared.ClaimVmBody;
}
export declare class PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequest extends SpeakeasyBase {
    pathParams: PutApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams;
    request?: PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequests;
}
export declare class PutApiV1TenantTenantIdPoolPoolNameVmVmNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
    vmResult?: shared.VmResult;
}
