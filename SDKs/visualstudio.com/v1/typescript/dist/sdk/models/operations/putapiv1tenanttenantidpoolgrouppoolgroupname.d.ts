import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams extends SpeakeasyBase {
    poolGroupName: string;
    tenantId: string;
}
export declare class PutApiV1TenantTenantIdPoolGroupPoolGroupNameRequests extends SpeakeasyBase {
    createPoolGroupBody?: shared.CreatePoolGroupBody;
    createPoolGroupBody1?: shared.CreatePoolGroupBody;
    createPoolGroupBody2?: shared.CreatePoolGroupBody;
    createPoolGroupBody3?: shared.CreatePoolGroupBody;
}
export declare class PutApiV1TenantTenantIdPoolGroupPoolGroupNameRequest extends SpeakeasyBase {
    pathParams: PutApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams;
    request?: PutApiV1TenantTenantIdPoolGroupPoolGroupNameRequests;
}
export declare class PutApiV1TenantTenantIdPoolGroupPoolGroupNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
