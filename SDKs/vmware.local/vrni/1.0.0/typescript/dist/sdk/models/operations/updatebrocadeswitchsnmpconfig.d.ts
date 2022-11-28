import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBrocadeSwitchSnmpConfigPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateBrocadeSwitchSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateBrocadeSwitchSnmpConfigRequest extends SpeakeasyBase {
    pathParams: UpdateBrocadeSwitchSnmpConfigPathParams;
    request?: shared.SnmpConfig;
    security: UpdateBrocadeSwitchSnmpConfigSecurity;
}
export declare class UpdateBrocadeSwitchSnmpConfigResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    snmpConfig?: shared.SnmpConfig;
    statusCode: number;
}
