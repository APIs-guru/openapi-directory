import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchIpCommandServerList: readonly ["https://supersim.twilio.com"];
export declare class FetchIpCommandPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchIpCommandSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchIpCommandRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchIpCommandPathParams;
    security: FetchIpCommandSecurity;
}
export declare class FetchIpCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supersimV1IpCommand?: shared.SupersimV1IpCommand;
}
