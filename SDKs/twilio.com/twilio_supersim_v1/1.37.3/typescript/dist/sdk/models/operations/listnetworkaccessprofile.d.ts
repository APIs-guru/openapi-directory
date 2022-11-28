import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListNetworkAccessProfileServerList: readonly ["https://supersim.twilio.com"];
export declare class ListNetworkAccessProfileQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListNetworkAccessProfileSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListNetworkAccessProfileListNetworkAccessProfileResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListNetworkAccessProfileListNetworkAccessProfileResponse extends SpeakeasyBase {
    meta?: ListNetworkAccessProfileListNetworkAccessProfileResponseMeta;
    networkAccessProfiles?: shared.SupersimV1NetworkAccessProfile[];
}
export declare class ListNetworkAccessProfileRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListNetworkAccessProfileQueryParams;
    security: ListNetworkAccessProfileSecurity;
}
export declare class ListNetworkAccessProfileResponse extends SpeakeasyBase {
    contentType: string;
    listNetworkAccessProfileResponse?: ListNetworkAccessProfileListNetworkAccessProfileResponse;
    statusCode: number;
}
