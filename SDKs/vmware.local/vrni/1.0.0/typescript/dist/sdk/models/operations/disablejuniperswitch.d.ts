import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisableJuniperSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DisableJuniperSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DisableJuniperSwitchRequest extends SpeakeasyBase {
    pathParams: DisableJuniperSwitchPathParams;
    security: DisableJuniperSwitchSecurity;
}
export declare class DisableJuniperSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
