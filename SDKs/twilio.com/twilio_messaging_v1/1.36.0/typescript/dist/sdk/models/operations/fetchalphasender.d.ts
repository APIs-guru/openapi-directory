import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHALPHASENDER_SERVERS: string[];
export declare class FetchAlphaSenderPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchAlphaSenderSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchAlphaSenderRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchAlphaSenderPathParams;
    security: FetchAlphaSenderSecurity;
}
export declare class FetchAlphaSenderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1ServiceAlphaSender?: shared.MessagingV1ServiceAlphaSender;
}
