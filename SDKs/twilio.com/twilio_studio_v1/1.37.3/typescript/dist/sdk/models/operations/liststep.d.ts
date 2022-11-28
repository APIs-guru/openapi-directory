import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListStepServerList: readonly ["https://studio.twilio.com"];
export declare class ListStepPathParams extends SpeakeasyBase {
    engagementSid: string;
    flowSid: string;
}
export declare class ListStepQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListStepSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListStepListStepResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListStepListStepResponse extends SpeakeasyBase {
    meta?: ListStepListStepResponseMeta;
    steps?: shared.StudioV1FlowEngagementStep[];
}
export declare class ListStepRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListStepPathParams;
    queryParams: ListStepQueryParams;
    security: ListStepSecurity;
}
export declare class ListStepResponse extends SpeakeasyBase {
    contentType: string;
    listStepResponse?: ListStepListStepResponse;
    statusCode: number;
}
