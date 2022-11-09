import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHOUTGOINGCALLERID_SERVERS: string[];
export declare class FetchOutgoingCallerIdPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchOutgoingCallerIdSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchOutgoingCallerIdRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchOutgoingCallerIdPathParams;
    security: FetchOutgoingCallerIdSecurity;
}
export declare class FetchOutgoingCallerIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountOutgoingCallerId?: shared.ApiV2010AccountOutgoingCallerId;
}
