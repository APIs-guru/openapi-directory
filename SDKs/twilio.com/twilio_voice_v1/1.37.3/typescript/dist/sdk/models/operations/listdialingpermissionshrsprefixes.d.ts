import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListDialingPermissionsHrsPrefixesServerList: readonly ["https://voice.twilio.com"];
export declare class ListDialingPermissionsHrsPrefixesPathParams extends SpeakeasyBase {
    isoCode: string;
}
export declare class ListDialingPermissionsHrsPrefixesQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListDialingPermissionsHrsPrefixesSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse extends SpeakeasyBase {
    content?: shared.VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes[];
    meta?: ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta;
}
export declare class ListDialingPermissionsHrsPrefixesRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListDialingPermissionsHrsPrefixesPathParams;
    queryParams: ListDialingPermissionsHrsPrefixesQueryParams;
    security: ListDialingPermissionsHrsPrefixesSecurity;
}
export declare class ListDialingPermissionsHrsPrefixesResponse extends SpeakeasyBase {
    contentType: string;
    listDialingPermissionsHrsPrefixesResponse?: ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse;
    statusCode: number;
}
