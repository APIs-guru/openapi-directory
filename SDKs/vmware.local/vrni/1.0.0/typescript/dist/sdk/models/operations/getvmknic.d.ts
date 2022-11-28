import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVmknicPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetVmknicQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetVmknicSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetVmknicRequest extends SpeakeasyBase {
    pathParams: GetVmknicPathParams;
    queryParams: GetVmknicQueryParams;
    security: GetVmknicSecurity;
}
export declare class GetVmknicResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    vmknic?: shared.Vmknic;
}
