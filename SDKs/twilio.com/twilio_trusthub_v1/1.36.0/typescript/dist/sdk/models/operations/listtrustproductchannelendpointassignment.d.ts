import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTTRUSTPRODUCTCHANNELENDPOINTASSIGNMENT_SERVERS: string[];
export declare class ListTrustProductChannelEndpointAssignmentPathParams extends SpeakeasyBase {
    trustProductSid: string;
}
export declare class ListTrustProductChannelEndpointAssignmentQueryParams extends SpeakeasyBase {
    channelEndpointSid?: string;
    channelEndpointSids?: string;
    pageSize?: number;
}
export declare class ListTrustProductChannelEndpointAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListTrustProductChannelEndpointAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListTrustProductChannelEndpointAssignmentPathParams;
    queryParams: ListTrustProductChannelEndpointAssignmentQueryParams;
    security: ListTrustProductChannelEndpointAssignmentSecurity;
}
export declare class ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse extends SpeakeasyBase {
    meta?: ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta;
    results?: shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment[];
}
export declare class ListTrustProductChannelEndpointAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    listTrustProductChannelEndpointAssignmentResponse?: ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse;
    statusCode: number;
}
