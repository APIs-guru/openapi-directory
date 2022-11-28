import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddTierPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AddTierSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class AddTierRequest extends SpeakeasyBase {
    pathParams: AddTierPathParams;
    request: shared.TierRequest;
    security: AddTierSecurity;
}
export declare class AddTierResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    tier?: shared.Tier;
}
