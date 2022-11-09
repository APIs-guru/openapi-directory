import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEMESSAGE_SERVERS: string[];
export declare class UpdateMessagePathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    sid: string;
}
export declare class UpdateMessageHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.MessageEnumWebhookEnabledTypeEnum;
}
export declare class UpdateMessageUpdateMessageRequest extends SpeakeasyBase {
    attributes?: string;
    body?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    from?: string;
    lastUpdatedBy?: string;
}
export declare class UpdateMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateMessagePathParams;
    headers: UpdateMessageHeaders;
    request?: UpdateMessageUpdateMessageRequest;
    security: UpdateMessageSecurity;
}
export declare class UpdateMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipMessagingV2ServiceChannelMessage?: shared.IpMessagingV2ServiceChannelMessage;
}
