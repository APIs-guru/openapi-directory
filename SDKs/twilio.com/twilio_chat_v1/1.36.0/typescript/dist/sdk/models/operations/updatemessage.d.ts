import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEMESSAGE_SERVERS: string[];
export declare class UpdateMessagePathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    sid: string;
}
export declare class UpdateMessageUpdateMessageRequest extends SpeakeasyBase {
    attributes?: string;
    body?: string;
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
    chatV1ServiceChannelMessage?: shared.ChatV1ServiceChannelMessage;
}
