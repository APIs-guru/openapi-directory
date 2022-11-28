import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUcsSnmpConfigPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetUcsSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetUcsSnmpConfigRequest extends SpeakeasyBase {
    pathParams: GetUcsSnmpConfigPathParams;
    security: GetUcsSnmpConfigSecurity;
}
export declare class GetUcsSnmpConfigResponse extends SpeakeasyBase {
    contentType: string;
    snmpConfig?: shared.SnmpConfig;
    statusCode: number;
}
