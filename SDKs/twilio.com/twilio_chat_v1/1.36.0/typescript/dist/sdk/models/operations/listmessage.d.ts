import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTMESSAGE_SERVERS: string[];
export declare class ListMessagePathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
}
export declare class ListMessageQueryParams extends SpeakeasyBase {
    order?: shared.MessageEnumOrderTypeEnum;
    pageSize?: number;
}
export declare class ListMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListMessagePathParams;
    queryParams: ListMessageQueryParams;
    security: ListMessageSecurity;
}
export declare class ListMessageListMessageResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListMessageListMessageResponse extends SpeakeasyBase {
    messages?: shared.ChatV1ServiceChannelMessage[];
    meta?: ListMessageListMessageResponseMeta;
}
export declare class ListMessageResponse extends SpeakeasyBase {
    contentType: string;
    listMessageResponse?: ListMessageListMessageResponse;
    statusCode: number;
}
