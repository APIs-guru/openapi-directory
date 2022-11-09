import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHMESSAGINGCONFIGURATION_SERVERS: string[];
export declare class FetchMessagingConfigurationPathParams extends SpeakeasyBase {
    country: string;
    serviceSid: string;
}
export declare class FetchMessagingConfigurationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchMessagingConfigurationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchMessagingConfigurationPathParams;
    security: FetchMessagingConfigurationSecurity;
}
export declare class FetchMessagingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceMessagingConfiguration?: shared.VerifyV2ServiceMessagingConfiguration;
}
