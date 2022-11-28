import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchServiceBindingServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchServiceBindingPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    sid: string;
}
export declare class FetchServiceBindingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchServiceBindingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchServiceBindingPathParams;
    security: FetchServiceBindingSecurity;
}
export declare class FetchServiceBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceBinding?: shared.ConversationsV1ServiceServiceBinding;
}
