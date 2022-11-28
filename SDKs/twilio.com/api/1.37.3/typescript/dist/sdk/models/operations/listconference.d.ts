import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListConferenceServerList: readonly ["https://api.twilio.com"];
export declare class ListConferencePathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListConferenceQueryParams extends SpeakeasyBase {
    dateCreated?: Date;
    dateCreatedLessThan?: Date;
    dateCreatedGreaterThan?: Date;
    dateUpdated?: Date;
    dateUpdatedLessThan?: Date;
    dateUpdatedGreaterThan?: Date;
    friendlyName?: string;
    pageSize?: number;
    status?: shared.ConferenceEnumStatusEnum;
}
export declare class ListConferenceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListConferenceListConferenceResponse extends SpeakeasyBase {
    conferences?: shared.ApiV2010AccountConference[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListConferenceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListConferencePathParams;
    queryParams: ListConferenceQueryParams;
    security: ListConferenceSecurity;
}
export declare class ListConferenceResponse extends SpeakeasyBase {
    contentType: string;
    listConferenceResponse?: ListConferenceListConferenceResponse;
    statusCode: number;
}
