import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListFlexFlowServerList: readonly ["https://flex-api.twilio.com"];
export declare class ListFlexFlowQueryParams extends SpeakeasyBase {
    friendlyName?: string;
    pageSize?: number;
}
export declare class ListFlexFlowSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListFlexFlowListFlexFlowResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListFlexFlowListFlexFlowResponse extends SpeakeasyBase {
    flexFlows?: shared.FlexV1FlexFlow[];
    meta?: ListFlexFlowListFlexFlowResponseMeta;
}
export declare class ListFlexFlowRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListFlexFlowQueryParams;
    security: ListFlexFlowSecurity;
}
export declare class ListFlexFlowResponse extends SpeakeasyBase {
    contentType: string;
    listFlexFlowResponse?: ListFlexFlowListFlexFlowResponse;
    statusCode: number;
}
