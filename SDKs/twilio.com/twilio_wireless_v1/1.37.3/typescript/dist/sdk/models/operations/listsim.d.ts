import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSimServerList: readonly ["https://wireless.twilio.com"];
export declare class ListSimQueryParams extends SpeakeasyBase {
    eId?: string;
    iccid?: string;
    pageSize?: number;
    ratePlan?: string;
    simRegistrationCode?: string;
    status?: shared.SimEnumStatusEnum;
}
export declare class ListSimSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
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
    sims?: shared.WirelessV1Sim[];
}
export declare class ListSimRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListSimQueryParams;
    security: ListSimSecurity;
}
export declare class ListSimResponse extends SpeakeasyBase {
    contentType: string;
    listSimResponse?: ListSimListSimResponse;
    statusCode: number;
}
