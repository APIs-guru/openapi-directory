import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDellSwitchSnmpConfigPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDellSwitchSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetDellSwitchSnmpConfigRequest extends SpeakeasyBase {
    pathParams: GetDellSwitchSnmpConfigPathParams;
    security: GetDellSwitchSnmpConfigSecurity;
}
export declare class GetDellSwitchSnmpConfigResponse extends SpeakeasyBase {
    contentType: string;
    snmpConfig?: shared.SnmpConfig;
    statusCode: number;
}
