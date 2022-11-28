import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVnicPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetVnicQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetVnicSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetVnicRequest extends SpeakeasyBase {
    pathParams: GetVnicPathParams;
    queryParams: GetVnicQueryParams;
    security: GetVnicSecurity;
}
export declare class GetVnicResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    baseVnic?: shared.BaseVnic;
    contentType: string;
    statusCode: number;
}
