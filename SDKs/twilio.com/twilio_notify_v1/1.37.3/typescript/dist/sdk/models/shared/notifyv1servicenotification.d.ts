import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationEnumPriorityEnum } from "./notificationenumpriorityenum";
export declare class NotifyV1ServiceNotification extends SpeakeasyBase {
    accountSid?: string;
    action?: string;
    alexa?: any;
    apn?: any;
    body?: string;
    data?: any;
    dateCreated?: Date;
    facebookMessenger?: any;
    fcm?: any;
    gcm?: any;
    identities?: string[];
    priority?: NotificationEnumPriorityEnum;
    segments?: string[];
    serviceSid?: string;
    sid?: string;
    sms?: any;
    sound?: string;
    tags?: string[];
    title?: string;
    ttl?: number;
}
