import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchMessageServerList: readonly ["https://api.twilio.com"];
export declare class FetchMessagePathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchMessagePathParams;
    security: FetchMessageSecurity;
}
export declare class FetchMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountMessage?: shared.ApiV2010AccountMessage;
}
