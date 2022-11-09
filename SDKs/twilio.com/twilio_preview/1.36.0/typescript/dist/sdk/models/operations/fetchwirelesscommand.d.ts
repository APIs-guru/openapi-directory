import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHWIRELESSCOMMAND_SERVERS: string[];
export declare class FetchWirelessCommandPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchWirelessCommandSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWirelessCommandRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWirelessCommandPathParams;
    security: FetchWirelessCommandSecurity;
}
export declare class FetchWirelessCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewWirelessCommand?: shared.PreviewWirelessCommand;
}
