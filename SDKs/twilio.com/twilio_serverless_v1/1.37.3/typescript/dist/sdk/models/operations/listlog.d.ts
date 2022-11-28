import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListLogServerList: readonly ["https://serverless.twilio.com"];
export declare class ListLogPathParams extends SpeakeasyBase {
    environmentSid: string;
    serviceSid: string;
}
export declare class ListLogQueryParams extends SpeakeasyBase {
    endDate?: Date;
    functionSid?: string;
    pageSize?: number;
    startDate?: Date;
}
export declare class ListLogSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListLogListLogResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListLogListLogResponse extends SpeakeasyBase {
    logs?: shared.ServerlessV1ServiceEnvironmentLog[];
    meta?: ListLogListLogResponseMeta;
}
export declare class ListLogRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListLogPathParams;
    queryParams: ListLogQueryParams;
    security: ListLogSecurity;
}
export declare class ListLogResponse extends SpeakeasyBase {
    contentType: string;
    listLogResponse?: ListLogListLogResponse;
    statusCode: number;
}
