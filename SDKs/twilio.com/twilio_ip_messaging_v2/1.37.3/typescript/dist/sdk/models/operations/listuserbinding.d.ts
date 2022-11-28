import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListUserBindingServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class ListUserBindingPathParams extends SpeakeasyBase {
    serviceSid: string;
    userSid: string;
}
export declare class ListUserBindingQueryParams extends SpeakeasyBase {
    bindingType?: shared.UserBindingEnumBindingTypeEnum[];
    pageSize?: number;
}
export declare class ListUserBindingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUserBindingListUserBindingResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListUserBindingListUserBindingResponse extends SpeakeasyBase {
    bindings?: shared.IpMessagingV2ServiceUserUserBinding[];
    meta?: ListUserBindingListUserBindingResponseMeta;
}
export declare class ListUserBindingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUserBindingPathParams;
    queryParams: ListUserBindingQueryParams;
    security: ListUserBindingSecurity;
}
export declare class ListUserBindingResponse extends SpeakeasyBase {
    contentType: string;
    listUserBindingResponse?: ListUserBindingListUserBindingResponse;
    statusCode: number;
}
