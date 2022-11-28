import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListConfigurationAddressServerList: readonly ["https://conversations.twilio.com"];
export declare class ListConfigurationAddressQueryParams extends SpeakeasyBase {
    pageSize?: number;
    type?: string;
}
export declare class ListConfigurationAddressSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListConfigurationAddressListConfigurationAddressResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListConfigurationAddressListConfigurationAddressResponse extends SpeakeasyBase {
    addressConfigurations?: shared.ConversationsV1ConfigurationAddress[];
    meta?: ListConfigurationAddressListConfigurationAddressResponseMeta;
}
export declare class ListConfigurationAddressRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListConfigurationAddressQueryParams;
    security: ListConfigurationAddressSecurity;
}
export declare class ListConfigurationAddressResponse extends SpeakeasyBase {
    contentType: string;
    listConfigurationAddressResponse?: ListConfigurationAddressListConfigurationAddressResponse;
    statusCode: number;
}
