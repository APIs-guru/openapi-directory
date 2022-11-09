import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTEXECUTIONSTEP_SERVERS: string[];
export declare class ListExecutionStepPathParams extends SpeakeasyBase {
    executionSid: string;
    flowSid: string;
}
export declare class ListExecutionStepQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListExecutionStepSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListExecutionStepRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListExecutionStepPathParams;
    queryParams: ListExecutionStepQueryParams;
    security: ListExecutionStepSecurity;
}
export declare class ListExecutionStepListExecutionStepResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListExecutionStepListExecutionStepResponse extends SpeakeasyBase {
    meta?: ListExecutionStepListExecutionStepResponseMeta;
    steps?: shared.StudioV2FlowExecutionExecutionStep[];
}
export declare class ListExecutionStepResponse extends SpeakeasyBase {
    contentType: string;
    listExecutionStepResponse?: ListExecutionStepListExecutionStepResponse;
    statusCode: number;
}
