import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAristaSwitchSnmpConfigPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateAristaSwitchSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateAristaSwitchSnmpConfigRequest extends SpeakeasyBase {
    pathParams: UpdateAristaSwitchSnmpConfigPathParams;
    request?: shared.SnmpConfig;
    security: UpdateAristaSwitchSnmpConfigSecurity;
}
export declare class UpdateAristaSwitchSnmpConfigResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    snmpConfig?: shared.SnmpConfig;
    statusCode: number;
}
