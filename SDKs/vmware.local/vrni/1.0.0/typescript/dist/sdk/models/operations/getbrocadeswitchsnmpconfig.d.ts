import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBrocadeSwitchSnmpConfigPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetBrocadeSwitchSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetBrocadeSwitchSnmpConfigRequest extends SpeakeasyBase {
    pathParams: GetBrocadeSwitchSnmpConfigPathParams;
    security: GetBrocadeSwitchSnmpConfigSecurity;
}
export declare class GetBrocadeSwitchSnmpConfigResponse extends SpeakeasyBase {
    contentType: string;
    snmpConfig?: shared.SnmpConfig;
    statusCode: number;
}
