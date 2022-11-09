import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTBINDING_SERVERS: string[];
export declare class ListBindingPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListBindingQueryParams extends SpeakeasyBase {
    bindingType?: shared.BindingEnumBindingTypeEnum[];
    identity?: string[];
    pageSize?: number;
}
export declare class ListBindingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListBindingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListBindingPathParams;
    queryParams: ListBindingQueryParams;
    security: ListBindingSecurity;
}
export declare class ListBindingListBindingResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListBindingListBindingResponse extends SpeakeasyBase {
    bindings?: shared.ChatV2ServiceBinding[];
    meta?: ListBindingListBindingResponseMeta;
}
export declare class ListBindingResponse extends SpeakeasyBase {
    contentType: string;
    listBindingResponse?: ListBindingListBindingResponse;
    statusCode: number;
}
