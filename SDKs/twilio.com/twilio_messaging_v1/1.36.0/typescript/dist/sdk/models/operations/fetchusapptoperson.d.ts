import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHUSAPPTOPERSON_SERVERS: string[];
export declare class FetchUsAppToPersonPathParams extends SpeakeasyBase {
    messagingServiceSid: string;
    sid: string;
}
export declare class FetchUsAppToPersonSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUsAppToPersonRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUsAppToPersonPathParams;
    security: FetchUsAppToPersonSecurity;
}
export declare class FetchUsAppToPersonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1ServiceUsAppToPerson?: shared.MessagingV1ServiceUsAppToPerson;
}
