import { SpeakeasyBase } from "../../../internal/utils";
export declare class NotifyV1Service extends SpeakeasyBase {
    accountSid?: string;
    alexaSkillId?: string;
    apnCredentialSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    defaultAlexaNotificationProtocolVersion?: string;
    defaultApnNotificationProtocolVersion?: string;
    defaultFcmNotificationProtocolVersion?: string;
    defaultGcmNotificationProtocolVersion?: string;
    deliveryCallbackEnabled?: boolean;
    deliveryCallbackUrl?: string;
    facebookMessengerPageId?: string;
    fcmCredentialSid?: string;
    friendlyName?: string;
    gcmCredentialSid?: string;
    links?: Map<string, any>;
    logEnabled?: boolean;
    messagingServiceSid?: string;
    sid?: string;
    url?: string;
}
