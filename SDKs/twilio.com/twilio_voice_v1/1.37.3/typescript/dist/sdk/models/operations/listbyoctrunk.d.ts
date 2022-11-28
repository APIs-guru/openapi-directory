import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListByocTrunkServerList: readonly ["https://voice.twilio.com"];
export declare class ListByocTrunkQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListByocTrunkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListByocTrunkListByocTrunkResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListByocTrunkListByocTrunkResponse extends SpeakeasyBase {
    byocTrunks?: shared.VoiceV1ByocTrunk[];
    meta?: ListByocTrunkListByocTrunkResponseMeta;
}
export declare class ListByocTrunkRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListByocTrunkQueryParams;
    security: ListByocTrunkSecurity;
}
export declare class ListByocTrunkResponse extends SpeakeasyBase {
    contentType: string;
    listByocTrunkResponse?: ListByocTrunkListByocTrunkResponse;
    statusCode: number;
}
