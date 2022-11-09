import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSERVICEBINDING_SERVERS: string[];
export declare class ListServiceBindingPathParams extends SpeakeasyBase {
    chatServiceSid: string;
}
export declare class ListServiceBindingQueryParams extends SpeakeasyBase {
    bindingType?: shared.ServiceBindingEnumBindingTypeEnum[];
    identity?: string[];
    pageSize?: number;
}
export declare class ListServiceBindingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListServiceBindingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListServiceBindingPathParams;
    queryParams: ListServiceBindingQueryParams;
    security: ListServiceBindingSecurity;
}
export declare class ListServiceBindingListServiceBindingResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListServiceBindingListServiceBindingResponse extends SpeakeasyBase {
    bindings?: shared.ConversationsV1ServiceServiceBinding[];
    meta?: ListServiceBindingListServiceBindingResponseMeta;
}
export declare class ListServiceBindingResponse extends SpeakeasyBase {
    contentType: string;
    listServiceBindingResponse?: ListServiceBindingListServiceBindingResponse;
    statusCode: number;
}
