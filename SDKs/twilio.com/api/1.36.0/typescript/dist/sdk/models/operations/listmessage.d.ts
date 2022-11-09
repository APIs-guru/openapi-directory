import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTMESSAGE_SERVERS: string[];
export declare class ListMessagePathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListMessageQueryParams extends SpeakeasyBase {
    dateSent?: Date;
    dateSentLessThan?: Date;
    dateSentGreaterThan?: Date;
    from?: string;
    pageSize?: number;
    to?: string;
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
export declare class ListMessageListMessageResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    messages?: shared.ApiV2010AccountMessage[];
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListMessageResponse extends SpeakeasyBase {
    contentType: string;
    listMessageResponse?: ListMessageListMessageResponse;
    statusCode: number;
}
