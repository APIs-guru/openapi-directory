import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFlowPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFlowQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetFlowSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetFlowRequest extends SpeakeasyBase {
    pathParams: GetFlowPathParams;
    queryParams: GetFlowQueryParams;
    security: GetFlowSecurity;
}
export declare class GetFlowResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    flow?: shared.Flow;
    statusCode: number;
}
