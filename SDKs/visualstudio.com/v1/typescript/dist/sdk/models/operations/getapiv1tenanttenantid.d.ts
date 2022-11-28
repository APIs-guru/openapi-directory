import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1TenantTenantIdPathParams extends SpeakeasyBase {
    tenantId: string;
}
export declare class GetApiV1TenantTenantIdRequest extends SpeakeasyBase {
    pathParams: GetApiV1TenantTenantIdPathParams;
}
export declare class GetApiV1TenantTenantIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
    tenantInfoResult?: shared.TenantInfoResult;
}
