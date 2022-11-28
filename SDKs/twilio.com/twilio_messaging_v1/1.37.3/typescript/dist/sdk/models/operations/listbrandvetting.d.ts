import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListBrandVettingServerList: readonly ["https://messaging.twilio.com"];
export declare class ListBrandVettingPathParams extends SpeakeasyBase {
    brandSid: string;
}
export declare class ListBrandVettingQueryParams extends SpeakeasyBase {
    pageSize?: number;
    vettingProvider?: shared.BrandVettingEnumVettingProviderEnum;
}
export declare class ListBrandVettingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListBrandVettingListBrandVettingResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListBrandVettingListBrandVettingResponse extends SpeakeasyBase {
    data?: shared.MessagingV1BrandRegistrationsBrandVetting[];
    meta?: ListBrandVettingListBrandVettingResponseMeta;
}
export declare class ListBrandVettingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListBrandVettingPathParams;
    queryParams: ListBrandVettingQueryParams;
    security: ListBrandVettingSecurity;
}
export declare class ListBrandVettingResponse extends SpeakeasyBase {
    contentType: string;
    listBrandVettingResponse?: ListBrandVettingListBrandVettingResponse;
    statusCode: number;
}
