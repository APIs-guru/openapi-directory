import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHCREDENTIALLIST_SERVERS: string[];
export declare class FetchCredentialListPathParams extends SpeakeasyBase {
    sid: string;
    trunkSid: string;
}
export declare class FetchCredentialListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchCredentialListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchCredentialListPathParams;
    security: FetchCredentialListSecurity;
}
export declare class FetchCredentialListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trunkingV1TrunkCredentialList?: shared.TrunkingV1TrunkCredentialList;
}
