import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTierPathParams extends SpeakeasyBase {
    tierId: string;
}
export declare class GetTierHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class GetTierSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetTierRequest extends SpeakeasyBase {
    pathParams: GetTierPathParams;
    headers: GetTierHeaders;
    security: GetTierSecurity;
}
export declare class GetTierResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tier?: shared.Tier;
}
