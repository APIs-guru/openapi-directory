import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTUSERCHANNEL_SERVERS: string[];
export declare class ListUserChannelPathParams extends SpeakeasyBase {
    serviceSid: string;
    userSid: string;
}
export declare class ListUserChannelQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListUserChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUserChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUserChannelPathParams;
    queryParams: ListUserChannelQueryParams;
    security: ListUserChannelSecurity;
}
export declare class ListUserChannelListUserChannelResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListUserChannelListUserChannelResponse extends SpeakeasyBase {
    channels?: shared.IpMessagingV2ServiceUserUserChannel[];
    meta?: ListUserChannelListUserChannelResponseMeta;
}
export declare class ListUserChannelResponse extends SpeakeasyBase {
    contentType: string;
    listUserChannelResponse?: ListUserChannelListUserChannelResponse;
    statusCode: number;
}
