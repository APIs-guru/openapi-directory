import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDellSwitchSnmpConfigPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateDellSwitchSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateDellSwitchSnmpConfigRequest extends SpeakeasyBase {
    pathParams: UpdateDellSwitchSnmpConfigPathParams;
    request?: shared.SnmpConfig;
    security: UpdateDellSwitchSnmpConfigSecurity;
}
export declare class UpdateDellSwitchSnmpConfigResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    snmpConfig?: shared.SnmpConfig;
    statusCode: number;
}
