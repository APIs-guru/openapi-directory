import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSourceIpMappingServerList: readonly ["https://voice.twilio.com"];
export declare class ListSourceIpMappingQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSourceIpMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSourceIpMappingListSourceIpMappingResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSourceIpMappingListSourceIpMappingResponse extends SpeakeasyBase {
    meta?: ListSourceIpMappingListSourceIpMappingResponseMeta;
    sourceIpMappings?: shared.VoiceV1SourceIpMapping[];
}
export declare class ListSourceIpMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListSourceIpMappingQueryParams;
    security: ListSourceIpMappingSecurity;
}
export declare class ListSourceIpMappingResponse extends SpeakeasyBase {
    contentType: string;
    listSourceIpMappingResponse?: ListSourceIpMappingListSourceIpMappingResponse;
    statusCode: number;
}
