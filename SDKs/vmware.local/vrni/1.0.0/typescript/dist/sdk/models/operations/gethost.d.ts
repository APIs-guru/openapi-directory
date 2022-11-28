import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHostPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetHostQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetHostSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetHostRequest extends SpeakeasyBase {
    pathParams: GetHostPathParams;
    queryParams: GetHostQueryParams;
    security: GetHostSecurity;
}
export declare class GetHostResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    host?: shared.Host;
    statusCode: number;
}
