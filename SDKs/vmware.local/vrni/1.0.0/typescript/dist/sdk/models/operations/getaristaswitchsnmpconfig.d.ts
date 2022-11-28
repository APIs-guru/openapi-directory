import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAristaSwitchSnmpConfigPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetAristaSwitchSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetAristaSwitchSnmpConfigRequest extends SpeakeasyBase {
    pathParams: GetAristaSwitchSnmpConfigPathParams;
    security: GetAristaSwitchSnmpConfigSecurity;
}
export declare class GetAristaSwitchSnmpConfigResponse extends SpeakeasyBase {
    contentType: string;
    snmpConfig?: shared.SnmpConfig;
    statusCode: number;
}
