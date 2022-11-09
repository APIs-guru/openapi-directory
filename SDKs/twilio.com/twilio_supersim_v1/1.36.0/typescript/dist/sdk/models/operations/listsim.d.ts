import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSIM_SERVERS: string[];
export declare class ListSimQueryParams extends SpeakeasyBase {
    fleet?: string;
    iccid?: string;
    pageSize?: number;
    status?: shared.SimEnumStatusEnum;
}
export declare class ListSimSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSimRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListSimQueryParams;
    security: ListSimSecurity;
}
export declare class ListSimListSimResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSimListSimResponse extends SpeakeasyBase {
    meta?: ListSimListSimResponseMeta;
    sims?: shared.SupersimV1Sim[];
}
export declare class ListSimResponse extends SpeakeasyBase {
    contentType: string;
    listSimResponse?: ListSimListSimResponse;
    statusCode: number;
}
