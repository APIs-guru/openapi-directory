import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTCONNECTIONPOLICYTARGET_SERVERS: string[];
export declare class ListConnectionPolicyTargetPathParams extends SpeakeasyBase {
    connectionPolicySid: string;
}
export declare class ListConnectionPolicyTargetQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListConnectionPolicyTargetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListConnectionPolicyTargetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListConnectionPolicyTargetPathParams;
    queryParams: ListConnectionPolicyTargetQueryParams;
    security: ListConnectionPolicyTargetSecurity;
}
export declare class ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListConnectionPolicyTargetListConnectionPolicyTargetResponse extends SpeakeasyBase {
    meta?: ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta;
    targets?: shared.VoiceV1ConnectionPolicyConnectionPolicyTarget[];
}
export declare class ListConnectionPolicyTargetResponse extends SpeakeasyBase {
    contentType: string;
    listConnectionPolicyTargetResponse?: ListConnectionPolicyTargetListConnectionPolicyTargetResponse;
    statusCode: number;
}
