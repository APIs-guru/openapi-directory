import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTCALL_SERVERS: string[];
export declare class ListCallPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListCallQueryParams extends SpeakeasyBase {
    endTime?: Date;
    endTimeLessThan?: Date;
    endTimeGreaterThan?: Date;
    from?: string;
    pageSize?: number;
    parentCallSid?: string;
    startTime?: Date;
    startTimeLessThan?: Date;
    startTimeGreaterThan?: Date;
    status?: shared.CallEnumStatusEnum;
    to?: string;
}
export declare class ListCallSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListCallRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListCallPathParams;
    queryParams: ListCallQueryParams;
    security: ListCallSecurity;
}
export declare class ListCallListCallResponse extends SpeakeasyBase {
    calls?: shared.ApiV2010AccountCall[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListCallResponse extends SpeakeasyBase {
    contentType: string;
    listCallResponse?: ListCallListCallResponse;
    statusCode: number;
}
