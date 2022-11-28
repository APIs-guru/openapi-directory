import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchServiceConfigurationServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchServiceConfigurationPathParams extends SpeakeasyBase {
    chatServiceSid: string;
}
export declare class FetchServiceConfigurationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchServiceConfigurationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchServiceConfigurationPathParams;
    security: FetchServiceConfigurationSecurity;
}
export declare class FetchServiceConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConfiguration?: shared.ConversationsV1ServiceServiceConfiguration;
}
