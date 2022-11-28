import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListBindingServerList: readonly ["https://notify.twilio.com"];
export declare class ListBindingPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListBindingQueryParams extends SpeakeasyBase {
    endDate?: Date;
    identity?: string[];
    pageSize?: number;
    startDate?: Date;
    tag?: string[];
}
export declare class ListBindingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
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
    bindings?: shared.NotifyV1ServiceBinding[];
    meta?: ListBindingListBindingResponseMeta;
}
export declare class ListBindingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListBindingPathParams;
    queryParams: ListBindingQueryParams;
    security: ListBindingSecurity;
}
export declare class ListBindingResponse extends SpeakeasyBase {
    contentType: string;
    listBindingResponse?: ListBindingListBindingResponse;
    statusCode: number;
}
