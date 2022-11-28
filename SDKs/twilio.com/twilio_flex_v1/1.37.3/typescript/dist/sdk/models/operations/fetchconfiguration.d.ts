import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchConfigurationServerList: readonly ["https://flex-api.twilio.com"];
export declare class FetchConfigurationQueryParams extends SpeakeasyBase {
    uiVersion?: string;
}
export declare class FetchConfigurationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchConfigurationRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: FetchConfigurationQueryParams;
    security: FetchConfigurationSecurity;
}
export declare class FetchConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    flexV1Configuration?: shared.FlexV1Configuration;
}
