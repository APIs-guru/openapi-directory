import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTENTITY_SERVERS: string[];
export declare class ListEntityPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListEntityQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListEntitySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListEntityRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListEntityPathParams;
    queryParams: ListEntityQueryParams;
    security: ListEntitySecurity;
}
export declare class ListEntityListEntityResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListEntityListEntityResponse extends SpeakeasyBase {
    entities?: shared.VerifyV2ServiceEntity[];
    meta?: ListEntityListEntityResponseMeta;
}
export declare class ListEntityResponse extends SpeakeasyBase {
    contentType: string;
    listEntityResponse?: ListEntityListEntityResponse;
    statusCode: number;
}
