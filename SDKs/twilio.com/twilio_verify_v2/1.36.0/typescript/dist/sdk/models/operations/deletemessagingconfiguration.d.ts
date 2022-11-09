import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEMESSAGINGCONFIGURATION_SERVERS: string[];
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
