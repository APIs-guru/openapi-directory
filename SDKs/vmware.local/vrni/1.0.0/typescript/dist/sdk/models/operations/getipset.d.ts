import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIpSetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetIpSetQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetIpSetSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetIpSetRequest extends SpeakeasyBase {
    pathParams: GetIpSetPathParams;
    queryParams: GetIpSetQueryParams;
    security: GetIpSetSecurity;
}
export declare class GetIpSetResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    baseIpSet?: shared.BaseIpSet;
    contentType: string;
    statusCode: number;
}
