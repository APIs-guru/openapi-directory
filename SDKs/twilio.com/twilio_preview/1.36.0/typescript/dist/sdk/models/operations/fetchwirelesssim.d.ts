import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHWIRELESSSIM_SERVERS: string[];
export declare class FetchWirelessSimPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchWirelessSimSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWirelessSimRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWirelessSimPathParams;
    security: FetchWirelessSimSecurity;
}
export declare class FetchWirelessSimResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewWirelessSim?: shared.PreviewWirelessSim;
}
