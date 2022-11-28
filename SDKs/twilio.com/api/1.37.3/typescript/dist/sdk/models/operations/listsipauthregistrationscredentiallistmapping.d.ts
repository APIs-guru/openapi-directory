import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSipAuthRegistrationsCredentialListMappingServerList: readonly ["https://api.twilio.com"];
export declare class ListSipAuthRegistrationsCredentialListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
}
export declare class ListSipAuthRegistrationsCredentialListMappingQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSipAuthRegistrationsCredentialListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse extends SpeakeasyBase {
    contents?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListSipAuthRegistrationsCredentialListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSipAuthRegistrationsCredentialListMappingPathParams;
    queryParams: ListSipAuthRegistrationsCredentialListMappingQueryParams;
    security: ListSipAuthRegistrationsCredentialListMappingSecurity;
}
export declare class ListSipAuthRegistrationsCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    listSipAuthRegistrationsCredentialListMappingResponse?: ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse;
    statusCode: number;
}
