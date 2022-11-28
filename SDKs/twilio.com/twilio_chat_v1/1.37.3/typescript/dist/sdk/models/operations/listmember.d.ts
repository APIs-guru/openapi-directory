import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListMemberServerList: readonly ["https://chat.twilio.com"];
export declare class ListMemberPathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
}
export declare class ListMemberQueryParams extends SpeakeasyBase {
    identity?: string[];
    pageSize?: number;
}
export declare class ListMemberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListMemberListMemberResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListMemberListMemberResponse extends SpeakeasyBase {
    members?: shared.ChatV1ServiceChannelMember[];
    meta?: ListMemberListMemberResponseMeta;
}
export declare class ListMemberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListMemberPathParams;
    queryParams: ListMemberQueryParams;
    security: ListMemberSecurity;
}
export declare class ListMemberResponse extends SpeakeasyBase {
    contentType: string;
    listMemberResponse?: ListMemberListMemberResponse;
    statusCode: number;
}
