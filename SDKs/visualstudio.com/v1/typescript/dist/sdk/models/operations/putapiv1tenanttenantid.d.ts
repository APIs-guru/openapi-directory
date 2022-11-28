import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutApiV1TenantTenantIdPathParams extends SpeakeasyBase {
    tenantId: string;
}
export declare class PutApiV1TenantTenantIdRequest extends SpeakeasyBase {
    pathParams: PutApiV1TenantTenantIdPathParams;
}
export declare class PutApiV1TenantTenantIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
