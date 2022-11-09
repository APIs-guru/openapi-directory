import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTCALLNOTIFICATION_SERVERS: string[];
export declare class ListCallNotificationPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
}
export declare class ListCallNotificationQueryParams extends SpeakeasyBase {
    log?: number;
    messageDate?: Date;
    messageDateLessThan?: Date;
    messageDateGreaterThan?: Date;
    pageSize?: number;
}
export declare class ListCallNotificationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListCallNotificationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListCallNotificationPathParams;
    queryParams: ListCallNotificationQueryParams;
    security: ListCallNotificationSecurity;
}
export declare class ListCallNotificationListCallNotificationResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    notifications?: shared.ApiV2010AccountCallCallNotification[];
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListCallNotificationResponse extends SpeakeasyBase {
    contentType: string;
    listCallNotificationResponse?: ListCallNotificationListCallNotificationResponse;
    statusCode: number;
}
