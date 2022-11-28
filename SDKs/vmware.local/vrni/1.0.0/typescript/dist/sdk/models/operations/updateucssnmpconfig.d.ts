import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUcsSnmpConfigPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateUcsSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateUcsSnmpConfigRequest extends SpeakeasyBase {
    pathParams: UpdateUcsSnmpConfigPathParams;
    request?: shared.SnmpConfig;
    security: UpdateUcsSnmpConfigSecurity;
}
export declare class UpdateUcsSnmpConfigResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    snmpConfig?: shared.SnmpConfig;
    statusCode: number;
}
