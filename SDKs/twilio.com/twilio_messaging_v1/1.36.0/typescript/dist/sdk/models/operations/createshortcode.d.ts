import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESHORTCODE_SERVERS: string[];
export declare class CreateShortCodePathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateShortCodeCreateShortCodeRequest extends SpeakeasyBase {
    shortCodeSid: string;
}
export declare class CreateShortCodeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateShortCodeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateShortCodePathParams;
    request?: CreateShortCodeCreateShortCodeRequest;
    security: CreateShortCodeSecurity;
}
export declare class CreateShortCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1ServiceShortCode?: shared.MessagingV1ServiceShortCode;
}
