import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHCOMMAND_SERVERS: string[];
export declare class FetchCommandPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchCommandSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchCommandRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchCommandPathParams;
    security: FetchCommandSecurity;
}
export declare class FetchCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wirelessV1Command?: shared.WirelessV1Command;
}
