import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListEndUserTypeServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListEndUserTypeQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListEndUserTypeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListEndUserTypeListEndUserTypeResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListEndUserTypeListEndUserTypeResponse extends SpeakeasyBase {
    endUserTypes?: shared.TrusthubV1EndUserType[];
    meta?: ListEndUserTypeListEndUserTypeResponseMeta;
}
export declare class ListEndUserTypeRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListEndUserTypeQueryParams;
    security: ListEndUserTypeSecurity;
}
export declare class ListEndUserTypeResponse extends SpeakeasyBase {
    contentType: string;
    listEndUserTypeResponse?: ListEndUserTypeListEndUserTypeResponse;
    statusCode: number;
}
