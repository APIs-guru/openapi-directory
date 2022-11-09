import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTPLAYERSTREAMER_SERVERS: string[];
export declare class ListPlayerStreamerQueryParams extends SpeakeasyBase {
    order?: shared.PlayerStreamerEnumOrderEnum;
    pageSize?: number;
    status?: shared.PlayerStreamerEnumStatusEnum;
}
export declare class ListPlayerStreamerSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListPlayerStreamerRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListPlayerStreamerQueryParams;
    security: ListPlayerStreamerSecurity;
}
export declare class ListPlayerStreamerListPlayerStreamerResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListPlayerStreamerListPlayerStreamerResponse extends SpeakeasyBase {
    meta?: ListPlayerStreamerListPlayerStreamerResponseMeta;
    playerStreamers?: shared.MediaV1PlayerStreamer[];
}
export declare class ListPlayerStreamerResponse extends SpeakeasyBase {
    contentType: string;
    listPlayerStreamerResponse?: ListPlayerStreamerListPlayerStreamerResponse;
    statusCode: number;
}
