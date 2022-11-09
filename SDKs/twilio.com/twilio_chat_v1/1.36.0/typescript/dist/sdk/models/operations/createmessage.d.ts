import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEMESSAGE_SERVERS: string[];
export declare class CreateMessagePathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
}
export declare class CreateMessageCreateMessageRequest extends SpeakeasyBase {
    attributes?: string;
    body: string;
    from?: string;
}
export declare class CreateMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateMessagePathParams;
    request?: CreateMessageCreateMessageRequest;
    security: CreateMessageSecurity;
}
export declare class CreateMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    chatV1ServiceChannelMessage?: shared.ChatV1ServiceChannelMessage;
}
