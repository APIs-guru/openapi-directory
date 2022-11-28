import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJuniperSwitchSnmpConfigPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetJuniperSwitchSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetJuniperSwitchSnmpConfigRequest extends SpeakeasyBase {
    pathParams: GetJuniperSwitchSnmpConfigPathParams;
    security: GetJuniperSwitchSnmpConfigSecurity;
}
export declare class GetJuniperSwitchSnmpConfigResponse extends SpeakeasyBase {
    contentType: string;
    snmpConfig?: shared.SnmpConfig;
    statusCode: number;
}
