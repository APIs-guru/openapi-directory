import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListCompositionServerList: readonly ["https://video.twilio.com"];
export declare class ListCompositionQueryParams extends SpeakeasyBase {
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    pageSize?: number;
    roomSid?: string;
    status?: shared.CompositionEnumStatusEnum;
}
export declare class ListCompositionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListCompositionListCompositionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListCompositionListCompositionResponse extends SpeakeasyBase {
    compositions?: shared.VideoV1Composition[];
    meta?: ListCompositionListCompositionResponseMeta;
}
export declare class ListCompositionRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListCompositionQueryParams;
    security: ListCompositionSecurity;
}
export declare class ListCompositionResponse extends SpeakeasyBase {
    contentType: string;
    listCompositionResponse?: ListCompositionListCompositionResponse;
    statusCode: number;
}
