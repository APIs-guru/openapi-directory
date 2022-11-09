import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHMEMBER_SERVERS: string[];
export declare class FetchMemberPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
    queueSid: string;
}
export declare class FetchMemberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchMemberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchMemberPathParams;
    security: FetchMemberSecurity;
}
export declare class FetchMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountQueueMember?: shared.ApiV2010AccountQueueMember;
}
