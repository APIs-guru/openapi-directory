import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSmsCommandServerList: readonly ["https://supersim.twilio.com"];
export declare class FetchSmsCommandPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchSmsCommandSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSmsCommandRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSmsCommandPathParams;
    security: FetchSmsCommandSecurity;
}
export declare class FetchSmsCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supersimV1SmsCommand?: shared.SupersimV1SmsCommand;
}
