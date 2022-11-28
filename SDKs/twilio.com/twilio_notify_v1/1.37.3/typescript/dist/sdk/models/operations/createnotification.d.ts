import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateNotificationServerList: readonly ["https://notify.twilio.com"];
export declare class CreateNotificationPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateNotificationCreateNotificationRequest extends SpeakeasyBase {
    action?: string;
    alexa?: any;
    apn?: any;
    body?: string;
    data?: any;
    deliveryCallbackUrl?: string;
    facebookMessenger?: any;
    fcm?: any;
    gcm?: any;
    identity?: string[];
    priority?: shared.NotificationEnumPriorityEnum;
    segment?: string[];
    sms?: any;
    sound?: string;
    tag?: string[];
    title?: string;
    toBinding?: string[];
    ttl?: number;
}
export declare class CreateNotificationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateNotificationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateNotificationPathParams;
    request?: CreateNotificationCreateNotificationRequest;
    security: CreateNotificationSecurity;
}
export declare class CreateNotificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notifyV1ServiceNotification?: shared.NotifyV1ServiceNotification;
}
