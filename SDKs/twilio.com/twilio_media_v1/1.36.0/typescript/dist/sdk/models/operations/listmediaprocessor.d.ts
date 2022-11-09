import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTMEDIAPROCESSOR_SERVERS: string[];
export declare class ListMediaProcessorQueryParams extends SpeakeasyBase {
    order?: shared.MediaProcessorEnumOrderEnum;
    pageSize?: number;
    status?: shared.MediaProcessorEnumStatusEnum;
}
export declare class ListMediaProcessorSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListMediaProcessorRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListMediaProcessorQueryParams;
    security: ListMediaProcessorSecurity;
}
export declare class ListMediaProcessorListMediaProcessorResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListMediaProcessorListMediaProcessorResponse extends SpeakeasyBase {
    mediaProcessors?: shared.MediaV1MediaProcessor[];
    meta?: ListMediaProcessorListMediaProcessorResponseMeta;
}
export declare class ListMediaProcessorResponse extends SpeakeasyBase {
    contentType: string;
    listMediaProcessorResponse?: ListMediaProcessorListMediaProcessorResponse;
    statusCode: number;
}
