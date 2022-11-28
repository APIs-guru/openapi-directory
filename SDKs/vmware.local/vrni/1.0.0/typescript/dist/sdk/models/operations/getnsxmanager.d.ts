import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNsxManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetNsxManagerQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetNsxManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetNsxManagerRequest extends SpeakeasyBase {
    pathParams: GetNsxManagerPathParams;
    queryParams: GetNsxManagerQueryParams;
    security: GetNsxManagerSecurity;
}
export declare class GetNsxManagerResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    baseEntity?: shared.BaseEntity;
    contentType: string;
    statusCode: number;
}
