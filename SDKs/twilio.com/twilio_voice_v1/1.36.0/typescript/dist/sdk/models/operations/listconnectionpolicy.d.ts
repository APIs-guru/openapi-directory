import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTCONNECTIONPOLICY_SERVERS: string[];
export declare class ListConnectionPolicyQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListConnectionPolicySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListConnectionPolicyRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListConnectionPolicyQueryParams;
    security: ListConnectionPolicySecurity;
}
export declare class ListConnectionPolicyListConnectionPolicyResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListConnectionPolicyListConnectionPolicyResponse extends SpeakeasyBase {
    connectionPolicies?: shared.VoiceV1ConnectionPolicy[];
    meta?: ListConnectionPolicyListConnectionPolicyResponseMeta;
}
export declare class ListConnectionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    listConnectionPolicyResponse?: ListConnectionPolicyListConnectionPolicyResponse;
    statusCode: number;
}
