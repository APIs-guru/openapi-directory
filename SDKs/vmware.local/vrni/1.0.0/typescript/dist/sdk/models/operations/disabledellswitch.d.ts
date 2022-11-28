import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisableDellSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DisableDellSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DisableDellSwitchRequest extends SpeakeasyBase {
    pathParams: DisableDellSwitchPathParams;
    security: DisableDellSwitchSecurity;
}
export declare class DisableDellSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
