import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTUSAPPTOPERSON_SERVERS: string[];
export declare class ListUsAppToPersonPathParams extends SpeakeasyBase {
    messagingServiceSid: string;
}
export declare class ListUsAppToPersonQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListUsAppToPersonSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUsAppToPersonRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUsAppToPersonPathParams;
    queryParams: ListUsAppToPersonQueryParams;
    security: ListUsAppToPersonSecurity;
}
export declare class ListUsAppToPersonListUsAppToPersonResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListUsAppToPersonListUsAppToPersonResponse extends SpeakeasyBase {
    compliance?: shared.MessagingV1ServiceUsAppToPerson[];
    meta?: ListUsAppToPersonListUsAppToPersonResponseMeta;
}
export declare class ListUsAppToPersonResponse extends SpeakeasyBase {
    contentType: string;
    listUsAppToPersonResponse?: ListUsAppToPersonListUsAppToPersonResponse;
    statusCode: number;
}
