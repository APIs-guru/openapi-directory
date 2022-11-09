import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTHOSTEDNUMBERSHOSTEDNUMBERORDER_SERVERS: string[];
export declare class ListHostedNumbersHostedNumberOrderQueryParams extends SpeakeasyBase {
    friendlyName?: string;
    incomingPhoneNumberSid?: string;
    pageSize?: number;
    phoneNumber?: string;
    status?: shared.HostedNumberOrderEnumStatusEnum;
    uniqueName?: string;
}
export declare class ListHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListHostedNumbersHostedNumberOrderQueryParams;
    security: ListHostedNumbersHostedNumberOrderSecurity;
}
export declare class ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
    items?: shared.PreviewHostedNumbersHostedNumberOrder[];
    meta?: ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta;
}
export declare class ListHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
    contentType: string;
    listHostedNumbersHostedNumberOrderResponse?: ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse;
    statusCode: number;
}
