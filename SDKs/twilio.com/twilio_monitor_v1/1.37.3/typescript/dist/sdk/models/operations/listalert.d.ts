import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListAlertServerList: readonly ["https://monitor.twilio.com"];
export declare class ListAlertQueryParams extends SpeakeasyBase {
    endDate?: Date;
    logLevel?: string;
    pageSize?: number;
    startDate?: Date;
}
export declare class ListAlertSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListAlertListAlertResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListAlertListAlertResponse extends SpeakeasyBase {
    alerts?: shared.MonitorV1Alert[];
    meta?: ListAlertListAlertResponseMeta;
}
export declare class ListAlertRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListAlertQueryParams;
    security: ListAlertSecurity;
}
export declare class ListAlertResponse extends SpeakeasyBase {
    contentType: string;
    listAlertResponse?: ListAlertListAlertResponse;
    statusCode: number;
}
