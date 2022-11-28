import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateMessagingConfigurationServerList: readonly ["https://verify.twilio.com"];
export declare class UpdateMessagingConfigurationPathParams extends SpeakeasyBase {
    country: string;
    serviceSid: string;
}
export declare class UpdateMessagingConfigurationUpdateMessagingConfigurationRequest extends SpeakeasyBase {
    messagingServiceSid: string;
}
export declare class UpdateMessagingConfigurationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateMessagingConfigurationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateMessagingConfigurationPathParams;
    request?: UpdateMessagingConfigurationUpdateMessagingConfigurationRequest;
    security: UpdateMessagingConfigurationSecurity;
}
export declare class UpdateMessagingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceMessagingConfiguration?: shared.VerifyV2ServiceMessagingConfiguration;
}
