import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTCHANNEL_SERVERS: string[];
export declare class ListChannelQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListChannelQueryParams;
    security: ListChannelSecurity;
}
export declare class ListChannelListChannelResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListChannelListChannelResponse extends SpeakeasyBase {
    flexChatChannels?: shared.FlexV1Channel[];
    meta?: ListChannelListChannelResponseMeta;
}
export declare class ListChannelResponse extends SpeakeasyBase {
    contentType: string;
    listChannelResponse?: ListChannelListChannelResponse;
    statusCode: number;
}
