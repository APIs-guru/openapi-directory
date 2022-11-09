import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSMSCOMMAND_SERVERS: string[];
export declare class ListSmsCommandQueryParams extends SpeakeasyBase {
    direction?: shared.SmsCommandEnumDirectionEnum;
    pageSize?: number;
    sim?: string;
    status?: shared.SmsCommandEnumStatusEnum;
}
export declare class ListSmsCommandSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSmsCommandRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListSmsCommandQueryParams;
    security: ListSmsCommandSecurity;
}
export declare class ListSmsCommandListSmsCommandResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSmsCommandListSmsCommandResponse extends SpeakeasyBase {
    meta?: ListSmsCommandListSmsCommandResponseMeta;
    smsCommands?: shared.SupersimV1SmsCommand[];
}
export declare class ListSmsCommandResponse extends SpeakeasyBase {
    contentType: string;
    listSmsCommandResponse?: ListSmsCommandListSmsCommandResponse;
    statusCode: number;
}
