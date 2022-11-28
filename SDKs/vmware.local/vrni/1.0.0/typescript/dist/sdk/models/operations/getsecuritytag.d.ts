import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSecurityTagPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSecurityTagQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetSecurityTagSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetSecurityTagRequest extends SpeakeasyBase {
    pathParams: GetSecurityTagPathParams;
    queryParams: GetSecurityTagQueryParams;
    security: GetSecurityTagSecurity;
}
export declare class GetSecurityTagResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    securityTag?: shared.SecurityTag;
    statusCode: number;
}
