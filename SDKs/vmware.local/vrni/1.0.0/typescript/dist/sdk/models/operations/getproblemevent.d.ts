import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProblemEventPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetProblemEventQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetProblemEventSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetProblemEventRequest extends SpeakeasyBase {
    pathParams: GetProblemEventPathParams;
    queryParams: GetProblemEventQueryParams;
    security: GetProblemEventSecurity;
}
export declare class GetProblemEventResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    problemEvent?: shared.ProblemEvent;
    statusCode: number;
}
