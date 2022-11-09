import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTMEMBER_SERVERS: string[];
export declare class ListMemberPathParams extends SpeakeasyBase {
    accountSid: string;
    queueSid: string;
}
export declare class ListMemberQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListMemberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListMemberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListMemberPathParams;
    queryParams: ListMemberQueryParams;
    security: ListMemberSecurity;
}
export declare class ListMemberListMemberResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    queueMembers?: shared.ApiV2010AccountQueueMember[];
    start?: number;
    uri?: string;
}
export declare class ListMemberResponse extends SpeakeasyBase {
    contentType: string;
    listMemberResponse?: ListMemberListMemberResponse;
    statusCode: number;
}
