import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteIncomingPhoneNumberServerList: readonly ["https://api.twilio.com"];
export declare class DeleteIncomingPhoneNumberPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class DeleteIncomingPhoneNumberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteIncomingPhoneNumberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteIncomingPhoneNumberPathParams;
    security: DeleteIncomingPhoneNumberSecurity;
}
export declare class DeleteIncomingPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
