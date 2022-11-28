import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListEndUserServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListEndUserQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListEndUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListEndUserListEndUserResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListEndUserListEndUserResponse extends SpeakeasyBase {
    meta?: ListEndUserListEndUserResponseMeta;
    results?: shared.TrusthubV1EndUser[];
}
export declare class ListEndUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListEndUserQueryParams;
    security: ListEndUserSecurity;
}
export declare class ListEndUserResponse extends SpeakeasyBase {
    contentType: string;
    listEndUserResponse?: ListEndUserListEndUserResponse;
    statusCode: number;
}
