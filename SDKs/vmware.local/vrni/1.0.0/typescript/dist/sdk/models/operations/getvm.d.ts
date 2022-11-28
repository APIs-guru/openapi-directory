import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVmPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetVmQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetVmSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetVmRequest extends SpeakeasyBase {
    pathParams: GetVmPathParams;
    queryParams: GetVmQueryParams;
    security: GetVmSecurity;
}
export declare class GetVmResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    baseVirtualMachine?: shared.BaseVirtualMachine;
    contentType: string;
    statusCode: number;
}
