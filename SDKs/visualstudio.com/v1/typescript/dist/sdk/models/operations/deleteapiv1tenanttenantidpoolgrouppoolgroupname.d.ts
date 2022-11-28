import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams extends SpeakeasyBase {
    poolGroupName: string;
    tenantId: string;
}
export declare class DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameRequest extends SpeakeasyBase {
    pathParams: DeleteApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams;
}
export declare class DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
