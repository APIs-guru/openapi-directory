import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchUserBindingServerList: readonly ["https://chat.twilio.com"];
export declare class FetchUserBindingPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
    userSid: string;
}
export declare class FetchUserBindingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUserBindingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUserBindingPathParams;
    security: FetchUserBindingSecurity;
}
export declare class FetchUserBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    chatV2ServiceUserUserBinding?: shared.ChatV2ServiceUserUserBinding;
}
