import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHCONFIGURATION_SERVERS: string[];
export declare class FetchConfigurationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchConfigurationRequest extends SpeakeasyBase {
    serverUrl?: string;
    security: FetchConfigurationSecurity;
}
export declare class FetchConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1Configuration?: shared.ConversationsV1Configuration;
}
