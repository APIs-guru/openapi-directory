import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListWirelessSimServerList: readonly ["https://preview.twilio.com"];
export declare class ListWirelessSimQueryParams extends SpeakeasyBase {
    eId?: string;
    iccid?: string;
    pageSize?: number;
    ratePlan?: string;
    simRegistrationCode?: string;
    status?: string;
}
export declare class ListWirelessSimSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListWirelessSimListWirelessSimResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListWirelessSimListWirelessSimResponse extends SpeakeasyBase {
    meta?: ListWirelessSimListWirelessSimResponseMeta;
    sims?: shared.PreviewWirelessSim[];
}
export declare class ListWirelessSimRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListWirelessSimQueryParams;
    security: ListWirelessSimSecurity;
}
export declare class ListWirelessSimResponse extends SpeakeasyBase {
    contentType: string;
    listWirelessSimResponse?: ListWirelessSimListWirelessSimResponse;
    statusCode: number;
}
