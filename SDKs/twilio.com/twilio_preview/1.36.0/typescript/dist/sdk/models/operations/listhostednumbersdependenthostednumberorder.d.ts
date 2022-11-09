import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTHOSTEDNUMBERSDEPENDENTHOSTEDNUMBERORDER_SERVERS: string[];
export declare class ListHostedNumbersDependentHostedNumberOrderPathParams extends SpeakeasyBase {
    signingDocumentSid: string;
}
export declare class ListHostedNumbersDependentHostedNumberOrderQueryParams extends SpeakeasyBase {
    friendlyName?: string;
    incomingPhoneNumberSid?: string;
    pageSize?: number;
    phoneNumber?: string;
    status?: shared.DependentHostedNumberOrderEnumStatusEnum;
    uniqueName?: string;
}
export declare class ListHostedNumbersDependentHostedNumberOrderSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListHostedNumbersDependentHostedNumberOrderRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListHostedNumbersDependentHostedNumberOrderPathParams;
    queryParams: ListHostedNumbersDependentHostedNumberOrderQueryParams;
    security: ListHostedNumbersDependentHostedNumberOrderSecurity;
}
export declare class ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse extends SpeakeasyBase {
    items?: shared.PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder[];
    meta?: ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta;
}
export declare class ListHostedNumbersDependentHostedNumberOrderResponse extends SpeakeasyBase {
    contentType: string;
    listHostedNumbersDependentHostedNumberOrderResponse?: ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse;
    statusCode: number;
}
