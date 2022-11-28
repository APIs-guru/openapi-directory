import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateCiscoSwitchSnmpConfigPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateCiscoSwitchSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateCiscoSwitchSnmpConfigRequest extends SpeakeasyBase {
    pathParams: UpdateCiscoSwitchSnmpConfigPathParams;
    request?: shared.SnmpConfig;
    security: UpdateCiscoSwitchSnmpConfigSecurity;
}
export declare class UpdateCiscoSwitchSnmpConfigResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    snmpConfig?: shared.SnmpConfig;
    statusCode: number;
}
