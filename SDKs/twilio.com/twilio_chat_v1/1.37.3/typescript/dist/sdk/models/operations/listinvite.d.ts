import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListInviteServerList: readonly ["https://chat.twilio.com"];
export declare class ListInvitePathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
}
export declare class ListInviteQueryParams extends SpeakeasyBase {
    identity?: string[];
    pageSize?: number;
}
export declare class ListInviteSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListInviteListInviteResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListInviteListInviteResponse extends SpeakeasyBase {
    invites?: shared.ChatV1ServiceChannelInvite[];
    meta?: ListInviteListInviteResponseMeta;
}
export declare class ListInviteRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListInvitePathParams;
    queryParams: ListInviteQueryParams;
    security: ListInviteSecurity;
}
export declare class ListInviteResponse extends SpeakeasyBase {
    contentType: string;
    listInviteResponse?: ListInviteListInviteResponse;
    statusCode: number;
}
