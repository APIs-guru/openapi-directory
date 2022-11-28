import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListHostedNumbersAuthorizationDocumentServerList: readonly ["https://preview.twilio.com"];
export declare class ListHostedNumbersAuthorizationDocumentQueryParams extends SpeakeasyBase {
    email?: string;
    pageSize?: number;
    status?: shared.AuthorizationDocumentEnumStatusEnum;
}
export declare class ListHostedNumbersAuthorizationDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse extends SpeakeasyBase {
    items?: shared.PreviewHostedNumbersAuthorizationDocument[];
    meta?: ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta;
}
export declare class ListHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListHostedNumbersAuthorizationDocumentQueryParams;
    security: ListHostedNumbersAuthorizationDocumentSecurity;
}
export declare class ListHostedNumbersAuthorizationDocumentResponse extends SpeakeasyBase {
    contentType: string;
    listHostedNumbersAuthorizationDocumentResponse?: ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse;
    statusCode: number;
}
