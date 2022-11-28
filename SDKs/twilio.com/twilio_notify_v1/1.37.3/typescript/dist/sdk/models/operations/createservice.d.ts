import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateServiceServerList: readonly ["https://notify.twilio.com"];
export declare class CreateServiceCreateServiceRequest extends SpeakeasyBase {
    alexaSkillId?: string;
    apnCredentialSid?: string;
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
    logEnabled?: boolean;
    messagingServiceSid?: string;
}
export declare class CreateServiceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateServiceRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateServiceCreateServiceRequest;
    security: CreateServiceSecurity;
}
export declare class CreateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notifyV1Service?: shared.NotifyV1Service;
}
