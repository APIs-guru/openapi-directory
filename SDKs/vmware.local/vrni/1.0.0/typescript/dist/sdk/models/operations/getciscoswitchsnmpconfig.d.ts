import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCiscoSwitchSnmpConfigPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCiscoSwitchSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetCiscoSwitchSnmpConfigRequest extends SpeakeasyBase {
    pathParams: GetCiscoSwitchSnmpConfigPathParams;
    security: GetCiscoSwitchSnmpConfigSecurity;
}
export declare class GetCiscoSwitchSnmpConfigResponse extends SpeakeasyBase {
    contentType: string;
    snmpConfig?: shared.SnmpConfig;
    statusCode: number;
}
