import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListCustomerProfileChannelEndpointAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListCustomerProfileChannelEndpointAssignmentPathParams extends SpeakeasyBase {
    customerProfileSid: string;
}
export declare class ListCustomerProfileChannelEndpointAssignmentQueryParams extends SpeakeasyBase {
    channelEndpointSid?: string;
    channelEndpointSids?: string;
    pageSize?: number;
}
export declare class ListCustomerProfileChannelEndpointAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse extends SpeakeasyBase {
    meta?: ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponseMeta;
    results?: shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment[];
}
export declare class ListCustomerProfileChannelEndpointAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListCustomerProfileChannelEndpointAssignmentPathParams;
    queryParams: ListCustomerProfileChannelEndpointAssignmentQueryParams;
    security: ListCustomerProfileChannelEndpointAssignmentSecurity;
}
export declare class ListCustomerProfileChannelEndpointAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    listCustomerProfileChannelEndpointAssignmentResponse?: ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse;
    statusCode: number;
}
