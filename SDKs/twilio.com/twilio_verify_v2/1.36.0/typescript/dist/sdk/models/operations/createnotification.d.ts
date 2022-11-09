import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATENOTIFICATION_SERVERS: string[];
export declare class CreateNotificationPathParams extends SpeakeasyBase {
    challengeSid: string;
    identity: string;
    serviceSid: string;
}
export declare class CreateNotificationCreateNotificationRequest extends SpeakeasyBase {
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
    verifyV2ServiceEntityChallengeNotification?: shared.VerifyV2ServiceEntityChallengeNotification;
}
