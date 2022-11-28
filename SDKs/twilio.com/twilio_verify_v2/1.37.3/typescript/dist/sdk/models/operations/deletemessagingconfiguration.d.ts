import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteMessagingConfigurationServerList: readonly ["https://verify.twilio.com"];
export declare class DeleteMessagingConfigurationPathParams extends SpeakeasyBase {
    country: string;
    serviceSid: string;
}
export declare class DeleteMessagingConfigurationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteMessagingConfigurationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteMessagingConfigurationPathParams;
    security: DeleteMessagingConfigurationSecurity;
}
export declare class DeleteMessagingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
