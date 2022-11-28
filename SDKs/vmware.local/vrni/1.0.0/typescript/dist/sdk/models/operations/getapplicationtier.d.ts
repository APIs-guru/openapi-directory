import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApplicationTierPathParams extends SpeakeasyBase {
    id: string;
    tierId: string;
}
export declare class GetApplicationTierSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetApplicationTierRequest extends SpeakeasyBase {
    pathParams: GetApplicationTierPathParams;
    security: GetApplicationTierSecurity;
}
export declare class GetApplicationTierResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tier?: shared.Tier;
}
