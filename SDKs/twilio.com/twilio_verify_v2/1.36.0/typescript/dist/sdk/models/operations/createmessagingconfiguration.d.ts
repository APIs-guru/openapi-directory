import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEMESSAGINGCONFIGURATION_SERVERS: string[];
export declare class CreateMessagingConfigurationPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateMessagingConfigurationCreateMessagingConfigurationRequest extends SpeakeasyBase {
    country: string;
    messagingServiceSid: string;
}
export declare class CreateMessagingConfigurationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateMessagingConfigurationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateMessagingConfigurationPathParams;
    request?: CreateMessagingConfigurationCreateMessagingConfigurationRequest;
    security: CreateMessagingConfigurationSecurity;
}
export declare class CreateMessagingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceMessagingConfiguration?: shared.VerifyV2ServiceMessagingConfiguration;
}
