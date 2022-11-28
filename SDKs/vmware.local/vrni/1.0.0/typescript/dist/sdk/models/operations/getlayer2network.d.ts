import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLayer2NetworkPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetLayer2NetworkQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetLayer2NetworkSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetLayer2NetworkRequest extends SpeakeasyBase {
    pathParams: GetLayer2NetworkPathParams;
    queryParams: GetLayer2NetworkQueryParams;
    security: GetLayer2NetworkSecurity;
}
export declare class GetLayer2NetworkResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    baseL2Network?: shared.BaseL2Network;
    contentType: string;
    statusCode: number;
}
