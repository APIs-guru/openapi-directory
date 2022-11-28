import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetServicePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetServiceQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetServiceSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetServiceRequest extends SpeakeasyBase {
    pathParams: GetServicePathParams;
    queryParams: GetServiceQueryParams;
    security: GetServiceSecurity;
}
export declare class GetServiceResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    baseService?: shared.BaseService;
    contentType: string;
    statusCode: number;
}
