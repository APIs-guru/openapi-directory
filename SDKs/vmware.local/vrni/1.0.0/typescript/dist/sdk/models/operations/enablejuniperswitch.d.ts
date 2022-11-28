import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableJuniperSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EnableJuniperSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class EnableJuniperSwitchRequest extends SpeakeasyBase {
    pathParams: EnableJuniperSwitchPathParams;
    security: EnableJuniperSwitchSecurity;
}
export declare class EnableJuniperSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
