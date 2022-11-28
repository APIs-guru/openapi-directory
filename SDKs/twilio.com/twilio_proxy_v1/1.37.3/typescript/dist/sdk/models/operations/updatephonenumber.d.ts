import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdatePhoneNumberServerList: readonly ["https://proxy.twilio.com"];
export declare class UpdatePhoneNumberPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class UpdatePhoneNumberUpdatePhoneNumberRequest extends SpeakeasyBase {
    isReserved?: boolean;
}
export declare class UpdatePhoneNumberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdatePhoneNumberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdatePhoneNumberPathParams;
    request?: UpdatePhoneNumberUpdatePhoneNumberRequest;
    security: UpdatePhoneNumberSecurity;
}
export declare class UpdatePhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    proxyV1ServicePhoneNumber?: shared.ProxyV1ServicePhoneNumber;
}
