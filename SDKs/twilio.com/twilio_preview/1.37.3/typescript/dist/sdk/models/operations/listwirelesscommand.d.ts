import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListWirelessCommandServerList: readonly ["https://preview.twilio.com"];
export declare class ListWirelessCommandQueryParams extends SpeakeasyBase {
    device?: string;
    direction?: string;
    pageSize?: number;
    sim?: string;
    status?: string;
}
export declare class ListWirelessCommandSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListWirelessCommandListWirelessCommandResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListWirelessCommandListWirelessCommandResponse extends SpeakeasyBase {
    commands?: shared.PreviewWirelessCommand[];
    meta?: ListWirelessCommandListWirelessCommandResponseMeta;
}
export declare class ListWirelessCommandRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListWirelessCommandQueryParams;
    security: ListWirelessCommandSecurity;
}
export declare class ListWirelessCommandResponse extends SpeakeasyBase {
    contentType: string;
    listWirelessCommandResponse?: ListWirelessCommandListWirelessCommandResponse;
    statusCode: number;
}
