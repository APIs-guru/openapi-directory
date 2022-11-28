import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListCommandServerList: readonly ["https://wireless.twilio.com"];
export declare class ListCommandQueryParams extends SpeakeasyBase {
    direction?: shared.CommandEnumDirectionEnum;
    pageSize?: number;
    sim?: string;
    status?: shared.CommandEnumStatusEnum;
    transport?: shared.CommandEnumTransportEnum;
}
export declare class ListCommandSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListCommandListCommandResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListCommandListCommandResponse extends SpeakeasyBase {
    commands?: shared.WirelessV1Command[];
    meta?: ListCommandListCommandResponseMeta;
}
export declare class ListCommandRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListCommandQueryParams;
    security: ListCommandSecurity;
}
export declare class ListCommandResponse extends SpeakeasyBase {
    contentType: string;
    listCommandResponse?: ListCommandListCommandResponse;
    statusCode: number;
}
