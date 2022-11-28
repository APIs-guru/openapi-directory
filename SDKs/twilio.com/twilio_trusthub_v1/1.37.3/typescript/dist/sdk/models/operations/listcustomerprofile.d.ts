import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListCustomerProfileServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListCustomerProfileQueryParams extends SpeakeasyBase {
    friendlyName?: string;
    pageSize?: number;
    policySid?: string;
    status?: shared.CustomerProfileEnumStatusEnum;
}
export declare class ListCustomerProfileSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListCustomerProfileListCustomerProfileResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListCustomerProfileListCustomerProfileResponse extends SpeakeasyBase {
    meta?: ListCustomerProfileListCustomerProfileResponseMeta;
    results?: shared.TrusthubV1CustomerProfile[];
}
export declare class ListCustomerProfileRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListCustomerProfileQueryParams;
    security: ListCustomerProfileSecurity;
}
export declare class ListCustomerProfileResponse extends SpeakeasyBase {
    contentType: string;
    listCustomerProfileResponse?: ListCustomerProfileListCustomerProfileResponse;
    statusCode: number;
}
