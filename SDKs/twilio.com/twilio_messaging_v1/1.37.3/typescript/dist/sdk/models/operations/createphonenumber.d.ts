import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreatePhoneNumberServerList: readonly ["https://messaging.twilio.com"];
export declare class CreatePhoneNumberPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreatePhoneNumberCreatePhoneNumberRequest extends SpeakeasyBase {
    phoneNumberSid: string;
}
export declare class CreatePhoneNumberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreatePhoneNumberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreatePhoneNumberPathParams;
    request?: CreatePhoneNumberCreatePhoneNumberRequest;
    security: CreatePhoneNumberSecurity;
}
export declare class CreatePhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1ServicePhoneNumber?: shared.MessagingV1ServicePhoneNumber;
}
