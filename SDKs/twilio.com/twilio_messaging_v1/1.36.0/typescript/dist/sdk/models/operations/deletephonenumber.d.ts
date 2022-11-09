import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEPHONENUMBER_SERVERS: string[];
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
