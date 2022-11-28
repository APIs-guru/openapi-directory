import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListChannelServerList: readonly ["https://chat.twilio.com"];
export declare class ListChannelPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListChannelQueryParams extends SpeakeasyBase {
    pageSize?: number;
    type?: shared.ChannelEnumChannelTypeEnum[];
}
export declare class ListChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
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
    channels?: shared.ChatV1ServiceChannel[];
    meta?: ListChannelListChannelResponseMeta;
}
export declare class ListChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListChannelPathParams;
    queryParams: ListChannelQueryParams;
    security: ListChannelSecurity;
}
export declare class ListChannelResponse extends SpeakeasyBase {
    contentType: string;
    listChannelResponse?: ListChannelListChannelResponse;
    statusCode: number;
}
