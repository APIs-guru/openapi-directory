import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisableCiscoSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DisableCiscoSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DisableCiscoSwitchRequest extends SpeakeasyBase {
    pathParams: DisableCiscoSwitchPathParams;
    security: DisableCiscoSwitchSecurity;
}
export declare class DisableCiscoSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
