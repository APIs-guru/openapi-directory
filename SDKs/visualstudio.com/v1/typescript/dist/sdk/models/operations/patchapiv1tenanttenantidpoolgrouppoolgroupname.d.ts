import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams extends SpeakeasyBase {
    poolGroupName: string;
    tenantId: string;
}
export declare class PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequests extends SpeakeasyBase {
    updatePoolGroupBody?: shared.UpdatePoolGroupBody;
    updatePoolGroupBody1?: shared.UpdatePoolGroupBody;
    updatePoolGroupBody2?: shared.UpdatePoolGroupBody;
    updatePoolGroupBody3?: shared.UpdatePoolGroupBody;
}
export declare class PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequest extends SpeakeasyBase {
    pathParams: PatchApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams;
    request?: PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequests;
}
export declare class PatchApiV1TenantTenantIdPoolGroupPoolGroupNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
