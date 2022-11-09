import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEMESSAGE_SERVERS: string[];
export declare class CreateMessagePathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class CreateMessageCreateMessageRequest extends SpeakeasyBase {
    addressRetention?: shared.MessageEnumAddressRetentionEnum;
    applicationSid?: string;
    attempt?: number;
    body?: string;
    contentRetention?: shared.MessageEnumContentRetentionEnum;
    forceDelivery?: boolean;
    from?: string;
    maxPrice?: number;
    mediaUrl?: string[];
    messagingServiceSid?: string;
    persistentAction?: string[];
    provideFeedback?: boolean;
    scheduleType?: shared.MessageEnumScheduleTypeEnum;
    sendAsMms?: boolean;
    sendAt?: Date;
    smartEncoded?: boolean;
    statusCallback?: string;
    to: string;
    validityPeriod?: number;
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
    apiV2010AccountMessage?: shared.ApiV2010AccountMessage;
}
