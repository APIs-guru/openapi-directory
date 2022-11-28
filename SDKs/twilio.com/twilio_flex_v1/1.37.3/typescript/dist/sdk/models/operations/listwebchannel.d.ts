import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListWebChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class ListWebChannelQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListWebChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListWebChannelListWebChannelResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListWebChannelListWebChannelResponse extends SpeakeasyBase {
    flexChatChannels?: shared.FlexV1WebChannel[];
    meta?: ListWebChannelListWebChannelResponseMeta;
}
export declare class ListWebChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListWebChannelQueryParams;
    security: ListWebChannelSecurity;
}
export declare class ListWebChannelResponse extends SpeakeasyBase {
    contentType: string;
    listWebChannelResponse?: ListWebChannelListWebChannelResponse;
    statusCode: number;
}
