import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListMessagingConfigurationServerList: readonly ["https://verify.twilio.com"];
export declare class ListMessagingConfigurationPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListMessagingConfigurationQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListMessagingConfigurationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListMessagingConfigurationListMessagingConfigurationResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListMessagingConfigurationListMessagingConfigurationResponse extends SpeakeasyBase {
    messagingConfigurations?: shared.VerifyV2ServiceMessagingConfiguration[];
    meta?: ListMessagingConfigurationListMessagingConfigurationResponseMeta;
}
export declare class ListMessagingConfigurationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListMessagingConfigurationPathParams;
    queryParams: ListMessagingConfigurationQueryParams;
    security: ListMessagingConfigurationSecurity;
}
export declare class ListMessagingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    listMessagingConfigurationResponse?: ListMessagingConfigurationListMessagingConfigurationResponse;
    statusCode: number;
}
