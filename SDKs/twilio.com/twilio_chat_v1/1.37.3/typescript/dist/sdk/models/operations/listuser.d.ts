import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListUserServerList: readonly ["https://chat.twilio.com"];
export declare class ListUserPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListUserQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUserListUserResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListUserListUserResponse extends SpeakeasyBase {
    meta?: ListUserListUserResponseMeta;
    users?: shared.ChatV1ServiceUser[];
}
export declare class ListUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUserPathParams;
    queryParams: ListUserQueryParams;
    security: ListUserSecurity;
}
export declare class ListUserResponse extends SpeakeasyBase {
    contentType: string;
    listUserResponse?: ListUserListUserResponse;
    statusCode: number;
}
