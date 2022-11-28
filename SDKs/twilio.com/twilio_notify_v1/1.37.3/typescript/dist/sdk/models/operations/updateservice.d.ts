import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateServiceServerList: readonly ["https://notify.twilio.com"];
export declare class UpdateServicePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
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
export declare class UpdateServiceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateServicePathParams;
    request?: UpdateServiceUpdateServiceRequest;
    security: UpdateServiceSecurity;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notifyV1Service?: shared.NotifyV1Service;
}
