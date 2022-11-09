import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEMESSAGE_SERVERS: string[];
export declare class CreateMessagePathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
}
export declare class CreateMessageHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.MessageEnumWebhookEnabledTypeEnum;
}
export declare class CreateMessageCreateMessageRequest extends SpeakeasyBase {
    attributes?: string;
    body?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    from?: string;
    lastUpdatedBy?: string;
    mediaSid?: string;
}
export declare class CreateMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateMessagePathParams;
    headers: CreateMessageHeaders;
    request?: CreateMessageCreateMessageRequest;
    security: CreateMessageSecurity;
}
export declare class CreateMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    chatV2ServiceChannelMessage?: shared.ChatV2ServiceChannelMessage;
}
