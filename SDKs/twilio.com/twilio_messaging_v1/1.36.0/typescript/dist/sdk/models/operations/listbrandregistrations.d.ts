import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTBRANDREGISTRATIONS_SERVERS: string[];
export declare class ListBrandRegistrationsQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListBrandRegistrationsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListBrandRegistrationsRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListBrandRegistrationsQueryParams;
    security: ListBrandRegistrationsSecurity;
}
export declare class ListBrandRegistrationsListBrandRegistrationsResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListBrandRegistrationsListBrandRegistrationsResponse extends SpeakeasyBase {
    data?: shared.MessagingV1BrandRegistrations[];
    meta?: ListBrandRegistrationsListBrandRegistrationsResponseMeta;
}
export declare class ListBrandRegistrationsResponse extends SpeakeasyBase {
    contentType: string;
    listBrandRegistrationsResponse?: ListBrandRegistrationsListBrandRegistrationsResponse;
    statusCode: number;
}
