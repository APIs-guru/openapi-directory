import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListExecutionServerList: readonly ["https://studio.twilio.com"];
export declare class ListExecutionPathParams extends SpeakeasyBase {
    flowSid: string;
}
export declare class ListExecutionQueryParams extends SpeakeasyBase {
    dateCreatedFrom?: Date;
    dateCreatedTo?: Date;
    pageSize?: number;
}
export declare class ListExecutionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListExecutionListExecutionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListExecutionListExecutionResponse extends SpeakeasyBase {
    executions?: shared.StudioV1FlowExecution[];
    meta?: ListExecutionListExecutionResponseMeta;
}
export declare class ListExecutionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListExecutionPathParams;
    queryParams: ListExecutionQueryParams;
    security: ListExecutionSecurity;
}
export declare class ListExecutionResponse extends SpeakeasyBase {
    contentType: string;
    listExecutionResponse?: ListExecutionListExecutionResponse;
    statusCode: number;
}
