import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateMessageServerList: readonly ["https://api.twilio.com"];
export declare class UpdateMessagePathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class UpdateMessageUpdateMessageRequest extends SpeakeasyBase {
    body?: string;
    status?: shared.MessageEnumUpdateStatusEnum;
}
export declare class UpdateMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateMessagePathParams;
    request?: UpdateMessageUpdateMessageRequest;
    security: UpdateMessageSecurity;
}
export declare class UpdateMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountMessage?: shared.ApiV2010AccountMessage;
}
