import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListConferenceServerList: readonly ["https://insights.twilio.com"];
export declare class ListConferenceQueryParams extends SpeakeasyBase {
    conferenceSid?: string;
    createdAfter?: string;
    createdBefore?: string;
    detectedIssues?: string;
    endReason?: string;
    friendlyName?: string;
    mixerRegion?: string;
    pageSize?: number;
    status?: string;
    subaccount?: string;
    tags?: string;
}
export declare class ListConferenceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListConferenceListConferenceResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListConferenceListConferenceResponse extends SpeakeasyBase {
    conferences?: shared.InsightsV1Conference[];
    meta?: ListConferenceListConferenceResponseMeta;
}
export declare class ListConferenceRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListConferenceQueryParams;
    security: ListConferenceSecurity;
}
export declare class ListConferenceResponse extends SpeakeasyBase {
    contentType: string;
    listConferenceResponse?: ListConferenceListConferenceResponse;
    statusCode: number;
}
