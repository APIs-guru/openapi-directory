import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateJuniperSwitchSnmpConfigPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateJuniperSwitchSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateJuniperSwitchSnmpConfigRequest extends SpeakeasyBase {
    pathParams: UpdateJuniperSwitchSnmpConfigPathParams;
    request?: shared.SnmpConfig;
    security: UpdateJuniperSwitchSnmpConfigSecurity;
}
export declare class UpdateJuniperSwitchSnmpConfigResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    snmpConfig?: shared.SnmpConfig;
    statusCode: number;
}
