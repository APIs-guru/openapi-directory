import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListIpCommandServerList: readonly ["https://supersim.twilio.com"];
export declare class ListIpCommandQueryParams extends SpeakeasyBase {
    direction?: shared.IpCommandEnumDirectionEnum;
    pageSize?: number;
    sim?: string;
    simIccid?: string;
    status?: shared.IpCommandEnumStatusEnum;
}
export declare class ListIpCommandSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListIpCommandListIpCommandResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListIpCommandListIpCommandResponse extends SpeakeasyBase {
    ipCommands?: shared.SupersimV1IpCommand[];
    meta?: ListIpCommandListIpCommandResponseMeta;
}
export declare class ListIpCommandRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListIpCommandQueryParams;
    security: ListIpCommandSecurity;
}
export declare class ListIpCommandResponse extends SpeakeasyBase {
    contentType: string;
    listIpCommandResponse?: ListIpCommandListIpCommandResponse;
    statusCode: number;
}
