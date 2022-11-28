import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeletePhoneNumberServerList: readonly ["https://messaging.twilio.com"];
export declare class DeletePhoneNumberPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeletePhoneNumberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeletePhoneNumberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeletePhoneNumberPathParams;
    security: DeletePhoneNumberSecurity;
}
export declare class DeletePhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
