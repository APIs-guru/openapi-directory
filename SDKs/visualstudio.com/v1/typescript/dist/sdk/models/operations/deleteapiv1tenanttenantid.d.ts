import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteApiV1TenantTenantIdPathParams extends SpeakeasyBase {
    tenantId: string;
}
export declare class DeleteApiV1TenantTenantIdRequest extends SpeakeasyBase {
    pathParams: DeleteApiV1TenantTenantIdPathParams;
}
export declare class DeleteApiV1TenantTenantIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
