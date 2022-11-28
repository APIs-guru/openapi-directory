import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisableBrocadeSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DisableBrocadeSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DisableBrocadeSwitchRequest extends SpeakeasyBase {
    pathParams: DisableBrocadeSwitchPathParams;
    security: DisableBrocadeSwitchSecurity;
}
export declare class DisableBrocadeSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
