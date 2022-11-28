import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchDeactivationServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchDeactivationQueryParams extends SpeakeasyBase {
    date?: Date;
}
export declare class FetchDeactivationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchDeactivationRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: FetchDeactivationQueryParams;
    security: FetchDeactivationSecurity;
}
export declare class FetchDeactivationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1Deactivation?: shared.MessagingV1Deactivation;
}
